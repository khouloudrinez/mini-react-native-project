
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../redux/store';
import { colors } from '../theme/colors';
import AddressItem from '../components/AddressItem';
import { Ionicons } from '@expo/vector-icons';

export default function SavedAddressScreen({ navigation }) {
  const addresses = useSelector((state) => state.address.list);
  const activeId = useSelector((state) => state.address.activeId);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safe}>
     
      <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          console.log('Back arrow pressed');
          navigation.navigate('Home');
        }}
      >
        <Ionicons name="arrow-back" size={26} color={colors.black} />
      </TouchableOpacity>

        <Text style={styles.headerTitle}>Saved Address</Text>

        <TouchableOpacity
          style={styles.addPill}
          onPress={() => navigation.navigate('AddAddress')}
        >
          <Text style={styles.addPillText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 18 }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        renderItem={({ item }) => (
          <AddressItem
            address={item}
            selected={activeId === item.id}
            onSelect={() => dispatch(setActive(item.id))}
          />
        )}

        
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Text style={{ fontFamily: 'Rubik', color: '#999' }}>
              No saved addresses yet
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
     pointerEvents: 'none',
  },
  addPill: {
    backgroundColor: colors.offWhite,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 99,
  },
  addPillText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#e8e8e8',
    marginVertical: 2,
  },
});
