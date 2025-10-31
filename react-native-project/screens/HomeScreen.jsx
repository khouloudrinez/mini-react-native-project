import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SavedAddresses')}
      >
        <Text style={styles.text}>Add Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Category')}
      >
        <Text style={styles.text}>Category Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ImageSearch')}
      >
        <Text style={styles.text}>Image Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1AAF31',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    paddingVertical: 60,
  },
  button: {
    width: width * 0.8, 
    height: 70, 
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
