import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Navbar from './Navbar';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.appName}>Bluestock</Text>
      <Text style={styles.subtitle}>Manage your investment portfolio</Text>

      <View style={styles.portfolioBox}>
        <View>
          <Text style={styles.boxTitle}>Portfolio Value</Text>
          <Text style={styles.amount}>₹45,523</Text>
        </View>
        <Image
          source={require('../assets/chart.png')}
          style={styles.chart}
          resizeMode="contain"
        />
      </View>

      <View style={styles.summaryRow}>
        <View style={[styles.summaryBox, { backgroundColor: '#D4F4DD' }]}>
          <Text style={styles.profit}>₹12,405</Text>
          <Text style={styles.boxLabel}>Profit</Text>
        </View>
        <View style={[styles.summaryBox, { backgroundColor: '#FDDCDC' }]}>
          <Text style={styles.loss}>₹3,210</Text>
          <Text style={styles.boxLabel}>Loss</Text>
        </View>
      </View>

      <Text style={styles.holdingsTitle}>Holdings</Text>

      <View style={styles.card}>
        <View style={styles.companyInfo}>
          <Image source={require('../assets/apple.png')} style={styles.logo} />
          <View>
            <Text style={styles.company}>Apple</Text>
            <Text style={styles.ticker}>10K x</Text>
          </View>
        </View>
        <View style={styles.rightInfo}>
          <Text style={styles.price}>$175.00</Text>
          <Text style={styles.gain}>+3.2%</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.companyInfo}>
          <Image source={require('../assets/tesla.png')} style={styles.logo} />
          <View>
            <Text style={styles.company}>Tesla</Text>
            <Text style={styles.ticker}>750.50</Text>
          </View>
        </View>
        <View style={styles.rightInfo}>
          <Text style={styles.price}>$750.50</Text>
          <Text style={styles.loss}>-1.5%</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.companyInfo}>
          <Image source={require('../assets/amazon.png')} style={styles.logo} />
          <View>
            <Text style={styles.company}>Amazon</Text>
            <Text style={styles.ticker}>123.80</Text>
          </View>
        </View>
        <View style={styles.rightInfo}>
          <Text style={styles.price}>$123.80</Text>
          <Text style={styles.gain}>+0.4%</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IpoList')}>
        <Text style={styles.buttonText}>View IPO List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransactionHistory')}>
        <Text style={styles.buttonText}>View Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  appName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E50FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 24,
  },
  portfolioBox: {
    flexDirection: 'row',
    backgroundColor: '#E6F0FF',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  boxTitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  chart: {
    width: 80,
    height: 40,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  summaryBox: {
    flex: 0.48,
    padding: 16,
    borderRadius: 12,
  },
  profit: {
    color: '#0A9800',
    fontSize: 20,
    fontWeight: '600',
  },
  loss: {
    color: '#D20000',
    fontSize: 20,
    fontWeight: '600',
  },
  boxLabel: {
    fontSize: 12,
    color: '#555',
  },
  holdingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  company: {
    fontWeight: '600',
    fontSize: 16,
  },
  ticker: {
    fontSize: 12,
    color: '#888',
  },
  rightInfo: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: '600',
    fontSize: 16,
  },
  gain: {
    color: '#0A9800',
    fontSize: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#1E50FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
