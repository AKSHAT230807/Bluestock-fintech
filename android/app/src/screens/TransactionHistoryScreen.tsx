import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Transaction {
  id: string;
  type: string;
  name: string;
  amount: string;
  date: string;
}

const transactions = [
  { id: '1', type: 'Buy', name: 'Apple', amount: '₹15,000', date: '2025-07-01' },
  { id: '2', type: 'Sell', name: 'Tesla', amount: '₹8,200', date: '2025-07-03' },
  { id: '3', type: 'Buy', name: 'Amazon', amount: '₹12,450', date: '2025-07-05' },
];

const TransactionHistoryScreen = () => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.card}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  type: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E50FF',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  amount: {
    fontSize: 16,
    color: '#0A9800',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});