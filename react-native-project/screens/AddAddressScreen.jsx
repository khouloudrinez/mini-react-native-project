import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { addAddress } from '../redux/store';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

const categoryList = ['Appartment', 'House', 'Office'];

export default function AddAddressScreen({ navigation }) {
  const [category, setCategory] = useState('Apartment');
  const [street, setStreet] = useState('');
  const [zone, setZone] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');
  const [aptNumber, setAptNumber] = useState('');
  const [directions, setDirections] = useState('');
  const [mobile, setMobile] = useState('');
  const [label, setLabel] = useState('');

  const dispatch = useDispatch();

  const handleSave = () => {
    if (!street.trim() || !mobile.trim()) return;

    dispatch(
      addAddress({
        id: Date.now().toString(),
        title: `${category} (${label || "My Address"})`,
        details: `${street}${zone ? ', ' + zone : ''}${building ? ', ' + building : ''}${floor ? ', Floor ' + floor : ''}${aptNumber ? ', Apt ' + aptNumber : ''}`,
        mobile: `+974 ${mobile}`,
      })
    );

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.white }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Custom Header */}
   <SafeAreaView style={styles.safeArea}>
  <View style={styles.header}>
        <TouchableOpacity onPress={()  =>  navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Address</Text>
        <View style={{ width: 26 }} />
      </View>


      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Segmented control */}
        <View style={styles.segmentWrap}>
          {categoryList.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.segment, category === c && styles.segmentActive]}
              onPress={() => setCategory(c)}
            >
              <Text style={[styles.segmentText, category === c && styles.segmentTextActive]}>
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Inputs */}
        <View style={styles.row}>
          <View style={styles.half}>
            <TextInput
              style={styles.input}
              placeholder="Street Number"
              placeholderTextColor="#bdbdbd"
              value={street}
              onChangeText={setStreet}
            />
          </View>
          <View style={styles.half}>
            <TextInput
              style={styles.input}
              placeholder="Zone"
              placeholderTextColor="#bdbdbd"
              value={zone}
              onChangeText={setZone}
            />
          </View>
        </View>

        <TextInput
          style={[styles.input, { marginTop: 12 }]}
          placeholder="Building Number"
          placeholderTextColor="#bdbdbd"
          value={building}
          onChangeText={setBuilding}
        />

        <View style={[styles.row, { marginTop: 12 }]}>
          <View style={styles.half}>
            <TextInput
              style={styles.input}
              placeholder="Floor"
              placeholderTextColor="#bdbdbd"
              value={floor}
              onChangeText={setFloor}
            />
          </View>
          <View style={styles.half}>
            <TextInput
              style={styles.input}
              placeholder="Apartment Number"
              placeholderTextColor="#bdbdbd"
              value={aptNumber}
              onChangeText={setAptNumber}
            />
          </View>
        </View>

        <TextInput
          style={[styles.input, { marginTop: 12 }]}
          placeholder="Additional Directions (Optional)"
          placeholderTextColor="#bdbdbd"
          value={directions}
          onChangeText={setDirections}
        />

        <View style={[styles.phoneRow, { marginTop: 12 }]}>
          <TouchableOpacity style={styles.flagBox}>
            <Image
              source={{ uri: "https://flagcdn.com/w320/qa.png" }}
              style={{ width: 24, height: 24, borderRadius: 12 }}
            />
            <Ionicons name="chevron-down" size={18} color="#555" />
          </TouchableOpacity>

          <TextInput
            style={styles.phoneInput}
            placeholder="+974 30404379"
            placeholderTextColor="#bdbdbd"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <TextInput
          style={[styles.input, { marginTop: 12, marginBottom: 120 }]}
          placeholder="Address Label (Optional)"
          placeholderTextColor="#bdbdbd"
          value={label}
          onChangeText={setLabel}
        />
      </ScrollView>

      {/* Save Button */}
      <View style={styles.saveWrap}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.90}>
          <Text style={styles.saveText}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
  },

  container: {
    padding: 18,
    backgroundColor: colors.white,
  },
  safeArea: {
  backgroundColor: colors.white,
},

  segmentWrap: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },
  segment: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
  },
  segmentActive: {
    backgroundColor: colors.black,
  },
  segmentText: {
    fontFamily: "Rubik-Bold",
    fontSize: 16,
    color: colors.black,
  },
  segmentTextActive: {
    color: colors.white,
  },

  input: {
 borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,   // bigger input
    fontFamily: "Rubik",
    fontSize: 16,
    color: colors.black,
    width: "100%",
    marginBottom: 12, 
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  half: {
    width: "48%",
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
flagBox: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
  borderWidth: 1,
  borderColor: "#e0e0e0",
  borderRadius: 14,
  paddingHorizontal: 16,  // match input
  paddingVertical: 15,    // match input
  marginBottom: 12,       // spacing like other inputs
},
phoneInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: "#e0e0e0",
  borderRadius: 14,
  paddingHorizontal: 16,  // same as normal input
  paddingVertical: 18,    // same as normal input
  fontFamily: "Rubik",
  fontSize: 16,
  color: colors.black,
  marginBottom: 12,       // add spacing between inputs
},

  saveWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 18,
    paddingHorizontal: 18,
  },
  saveBtn: {
    backgroundColor: colors.green,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: "center",
  },
  saveText: {
    fontFamily: "Rubik-Bold",
    color: colors.white,
    fontSize: 17,
  },
});
