import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// Local assets 
import LifestyleImg from '../assets/images/mens/Lifestyle.jpg';
import training from '../assets/images/mens/training.jpg';
import running from '../assets/images/mens/running.jpg';
import dress from '../assets/images/womens/dress.jpg';
import top from '../assets/images/womens/top.jpg';
import legging from '../assets/images/womens/legging.jpg';
import heels from '../assets/images/womens/heels.jpg';
import flats from '../assets/images/womens/flats.jpg';
import sneakers from '../assets/images/womens/sneakers.jpg';
import yoga from '../assets/images/womens/yoga.jpg';
import wrunning from '../assets/images/womens/wrunning.jpg';
import gym from '../assets/images/womens/gym.jpg';
import jewellery from '../assets/images/womens/jewellery.jpg';
import bag from '../assets/images/womens/bag.jpg';
import scarf from '../assets/images/womens/scarf.jpg';
import toys from '../assets/images/kids/toys.jpg';
import PJs from '../assets/images/kids/PJs.jpg';
import jacket from '../assets/images/kids/jacket.jpg';
import sneakers_kids from '../assets/images/kids/sneakers.jpg';
import boots from '../assets/images/kids/boots.jpg';
import sandals from '../assets/images/kids/sandals.jpg';
import play from '../assets/images/kids/play.jpg';
import run from '../assets/images/kids/run.jpg'; 
import swim from '../assets/images/kids/swim.jpg';   


export default function CategoryScreen({ navigation }) {
  const [expanded, setExpanded] = useState({
    sale: false,
    apparel: true,
    footwear: false,
    sports: false,
    accessories: false,
  });

  const [selectedCategory, setSelectedCategory] = useState('Mens');
  const [searchText, setSearchText] = useState('');

  const toggleSection = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const imagesByCategory = {
    Mens: {
       Sale: [
        { label: 'Lifestyle', img: LifestyleImg },
        { label: 'Training', img: training },
        { label: 'Running', img: running },
      ],
      apparel: [
        { label: 'Lifestyle', img: LifestyleImg },
        { label: 'Training', img: training },
        { label: 'Lifestyle', img: LifestyleImg },
        { label: 'Running', img: running },
      ],
      footwear: [
        { label: 'Sneakers', img: running },
        { label: 'Trainers', img: training },
        { label: 'Slides', img: LifestyleImg },
      ],
      sports: [
        { label: 'Football', img: training },
        { label: 'Running', img: running },
        { label: 'Gym', img: LifestyleImg },
      ],
      accessories: [
        { label: 'Cap', img: LifestyleImg },
        { label: 'Bag', img: training },
        { label: 'Socks', img: running },
      ],
    },
    Womens: {
      sale: [
        { label: 'Dresses', img: dress },
        { label: 'Tops', img: top },
        { label: 'Leggings', img: legging },
      ],
      apparel: [
        { label: 'Dresses', img: dress },
        { label: 'Tops', img: top },
        { label: 'Leggings', img: legging },
      ],
      footwear: [
        { label: 'Heels', img: heels },
        { label: 'Flats', img: flats },
        { label: 'Sneakers', img: sneakers },
      ],
      sports: [
        { label: 'Yoga', img: yoga },
        { label: 'Running', img: wrunning },
        { label: 'Gym', img: gym },
      ],
      accessories: [
        { label: 'Jewellery', img: jewellery },
        { label: 'Bag', img: bag },
        { label: 'Scarf', img: scarf },
      ],
    },
    Kids: {
       sale: [
        { label: 'Toys', img: toys },
        { label: 'PJs', img: PJs },
        { label: 'Jackets', img: jacket },
      ],
      apparel: [
        { label: 'Toys', img: toys },
        { label: 'PJs', img: PJs },
        { label: 'Jackets', img: jacket },
      ],
      footwear: [
        { label: 'Sneakers', img: sneakers_kids },
        { label: 'Boots', img: boots },
        { label: 'Sandals', img: sandals },
      ],
      sports: [
        { label: 'Play', img: play },
        { label: 'Kids Run', img: run },
        { label: 'Swim', img: swim },
      ],
      accessories: [
        { label: 'Cap', img: LifestyleImg },
        { label: 'Backpack', img: training },
        { label: 'Bottle', img: running },
      ],
    },
    Equipments: {
      sale: [
        { label: 'Gymwear', img: training },
        { label: 'Padded', img: running },
        { label: 'Pro', img: LifestyleImg },
      ],
      apparel: [
        { label: 'Gymwear', img: training },
        { label: 'Padded', img: running },
        { label: 'Pro', img: LifestyleImg },
      ],
      footwear: [
        { label: 'Cleats', img: running },
        { label: 'Court', img: training },
        { label: 'Track', img: LifestyleImg },
      ],
      sports: [
        { label: 'Balls', img: LifestyleImg },
        { label: 'Rackets', img: training },
        { label: 'Weights', img: running },
      ],
      accessories: [
        { label: 'Straps', img: LifestyleImg },
        { label: 'Gloves', img: training },
        { label: 'Towel', img: running },
      ],
    },
  };

  const imagesFor = imagesByCategory[selectedCategory] || imagesByCategory.Mens;

  // Filter logic for search
  const filteredImages = Object.keys(imagesFor).reduce((acc, key) => {
    const filteredItems = imagesFor[key].filter((item) =>
      item.label.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    if (filteredItems.length > 0) acc[key] = filteredItems;
    return acc;
  }, {});

  const isSearching = searchText.trim().length > 0;

  const renderGrid = (items = []) => (
    <View style={styles.imageGrid}>
      {items.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={styles.imageItem}
         
        >
          <View style={styles.imageWrapper}>
            <Image source={item.img} style={styles.image} resizeMode="cover" />
          </View>
          <Text style={styles.imageLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>

      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#909090" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#909090"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

     
      <View style={styles.mainContent}>
        
        <View style={styles.sidebar}>
          {['Mens', 'Womens', 'Kids', 'Equipments', 'Sports', 'Offers'].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedCategory(item)}>
              <Text
                style={[
                  styles.sidebarText,
                  selectedCategory === item && styles.sidebarTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      
        <ScrollView style={styles.rightContent} showsVerticalScrollIndicator={false}>
      {Object.keys(filteredImages).map((key) => (
  <View key={key}>
    
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </Text>

      {!isSearching && (
        <TouchableOpacity onPress={() => toggleSection(key)}>
          <Ionicons
            name={expanded[key] ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#909090"
          />
        </TouchableOpacity>
      )}
    </View>

    
    {(isSearching || expanded[key]) && renderGrid(filteredImages[key])}

    <View style={styles.divider} />
  </View>
))}

        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, paddingHorizontal: 14, paddingTop: 70 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
    position: 'relative',
    paddingBottom: 6,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    color: colors.black,
    textAlign: 'center',
    pointerEvents: 'none',
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: 14,
    paddingVertical: 18,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: colors.black,
  },
  mainContent: { flexDirection: 'row', flex: 1 },
  sidebar: {
    width: '25%',
    paddingVertical: 1,
  },
  sidebarText: {
    fontSize: 14,
    color: '#909090',
    marginVertical: 14,
  },
  sidebarTextActive: {
    color: colors.black,
    fontWeight: '600',
  },
  rightContent: {
    flex: 1,
    paddingLeft: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#909090',
    marginVertical: 4,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  imageItem: {
    width: '33.3333%',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: colors.offWhite,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageLabel: {
    fontSize: 13,
    color: colors.black,
    marginTop: 6,
  },
});