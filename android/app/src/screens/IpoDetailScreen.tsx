// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const IpoDetailScreen = ({ route, navigation }: { route: { params: { ipo: any } }, navigation: any }) => {
//   const { ipo } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{ipo.name} IPO</Text>
//       <Text style={styles.label}>Date:</Text>
//       <Text style={styles.value}>{ipo.date}</Text>
//       <Text style={styles.label}>Issue Price:</Text>
//       <Text style={styles.value}>{ipo.price}</Text>
//       <Text style={styles.label}>Status:</Text>
//       <Text style={styles.value}>{ipo.status}</Text>

//       <Button title="Apply Now" onPress={() => Alert.alert('IPO Application Process')} />
//     </View>
//   );
// };

// export default IpoDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 16,
//     color: '#444',
//     marginTop: 16,
//   },
//   value: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
// });
