import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ipoData = [
  { id: '1', name: 'Reliance Retail', date: '2025-08-10', price: '₹980', status: 'Open' },
  { id: '2', name: 'Zomato Ltd', date: '2025-07-30', price: '₹105', status: 'Closed' },
  { id: '3', name: 'Nykaa', date: '2025-08-18', price: '₹230', status: 'Open' },
];

const IpoListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const renderItem = ({ item }: { item: { name: string; date: string; price: string; status: string } }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('IpoDetail', { ipo: item })}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Date: {item.date}</Text>
      <Text style={styles.detail}>Price: {item.price}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming IPOs</Text>
      <FlatList
        data={ipoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IpoListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  detail: {
    fontSize: 14,
    color: '#333',
  },
  status: {
    fontSize: 12,
    marginTop: 8,
    color: '#1E50FF',
    fontWeight: '600',
  },
});
