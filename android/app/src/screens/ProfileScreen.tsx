import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/user-avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Akshat Yadav</Text>
      <Text style={styles.email}>akshat@example.com</Text>

      <View style={styles.section}>
        <Text style={styles.label}>KYC Status:</Text>
        <Text style={styles.value}>Verified ✅</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Account Type:</Text>
        <Text style={styles.value}>Individual</Text>
      </View>

      <Button title="Logout" onPress={() => console.log('Logged out!')} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
});