
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AddressItem({ address, selected, onSelect }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect} activeOpacity={0.7}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{address.title}</Text>
        <Text style={styles.details}>{address.details}</Text>
        <Text style={styles.mobile}>Mobile number: {address.mobile}</Text>
      </View>

      <View style={styles.radioOuter}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 17,
    marginBottom: 3,
  },
  details: {
    fontFamily: 'Rubik',
    fontSize: 13,
    color: '#777',
    marginBottom: 3,
  },
  mobile: {
    fontFamily: 'Rubik',
    fontSize: 13,
    color: '#999',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#bdbdbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    backgroundColor: colors.green,
    borderRadius: 5,
  },
});
