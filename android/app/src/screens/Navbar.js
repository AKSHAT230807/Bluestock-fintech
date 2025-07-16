import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const links = [
    { name: 'Home', to: 'Dashboard' },
    { name: 'IPOs', to: 'IpoList' },
    { name: 'Profile', to: 'Profile' }
  ];

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Bluestock</Text>

      <View style={styles.links}>
        {links.map(link => (
          <TouchableOpacity key={link.name} onPress={() => navigation.navigate(link.to)}>
            <Text style={styles.link}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.mobileMenu}>
          {links.map(link => (
            <TouchableOpacity key={link.name} onPress={() => navigation.navigate(link.to)}>
              <Text style={styles.mobileLink}>{link.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  links: {
    flexDirection: 'row',
    gap: 10,
  },
  link: {
    color: '#007bff',
    marginHorizontal: 5,
  },
  hamburger: {
    fontSize: 24,
    color: '#007bff',
  },
  mobileMenu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  mobileLink: {
    color: '#007bff',
    marginVertical: 5,
  },
});

export default Navbar;