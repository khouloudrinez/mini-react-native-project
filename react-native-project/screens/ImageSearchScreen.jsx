import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import HeartOutline from '../assets/images/favorite_outline.svg';
import HeartFilled from '../assets/images/favorite_filled.svg';


const windowW = Dimensions.get('window').width;

const products = [
  {
    id: '1',
    name: 'Red & Black T-Shirt',
    price: 'QAR 48',
    image: require('../assets/images/polo1.jpg'),
    badge: 'Trending',
    badgeColor: '#00CEFF',
  },
  {
    id: '2',
    name: 'Red & Black T-Shirt',
    price: 'QAR 9',
    image: require('../assets/images/image.jpg'),
    badge: '50% Off',
    badgeColor: colors.green,
  },
  {
    id: '3',
    name: 'Red & Black T-Shirt',
    price: 'QAR 48',
    image: require('../assets/images/polo.jpg'),
  },
  {
    id: '4',
    name: 'U S Polo Assn Men Black & Red',
    price: 'QAR 48',
    image: require('../assets/images/manT.jpg'),
  },
   {
    id: '5',
    name: 'Red & Black T-Shirt',
    price: 'QAR 48',
    image: require('../assets/images/polo.jpg'),
  },
  {
    id: '6',
    name: 'U S Polo Assn Men Black & Red',
    price: 'QAR 48',
    image: require('../assets/images/manT.jpg'),
  },
];

export default function ImageSearchScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
     
    <View style={styles.imageContainer}>
       <Image source={item.image} style={styles.image} resizeMode="cover" />

        {item.badge && (
          <View style={[styles.badge, { backgroundColor: item.badgeColor || colors.cyan }]}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}

      <TouchableOpacity
          onPress={() => toggleFavorite(item.id)}
          style={styles.heartWrap}
          activeOpacity={0.85}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          {favorites.includes(item.id) ? (
          
           <HeartFilled width={20} height={20} fill="#1AAF31" style={styles.heartImage} />
          ) : (
           
            <HeartOutline width={20} height={20} color="#0A0A0A" strokeWidth={1.5} style={styles.heartImage} />
          )}
        </TouchableOpacity>
        
      </View>

      
      <View style={styles.infoRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.price}>{item.price}</Text>
          <Text numberOfLines={2} style={styles.title}>
            {item.name}
          </Text>
        </View>
        <TouchableOpacity style={styles.plusButton} activeOpacity={0.8}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
     
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation?.goBack?.()}>
          <Ionicons name="arrow-back" size={26} color={colors.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Image Search</Text>

        <View style={styles.cartWrap}>
          <Ionicons name="bag-outline" size={22} color={colors.black} />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>1</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.topRow}>
        <View style={styles.topImageBox}>
          <Image
            source={require('../assets/images/polo1.jpg')}
            style={styles.topImage}
            resizeMode="cover"
          />
        </View>
      </View>

     
      <View style={styles.filtersRow}>
        {['Top Sales', 'Newest', 'Price Low to High', 'Price High to Low'].map((f, i) => (
          <TouchableOpacity key={i} style={styles.filterChip}>
            <Text style={styles.filterText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

     
      <FlatList
        data={products}
        renderItem={renderCard}
        keyExtractor={(i) => i.id}
        numColumns={2}
        columnWrapperStyle={styles.colWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const cardWidth = (windowW - 28 - 14) / 2; // padding 14 each side + gap 14

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 60,
    paddingHorizontal: 14,
  },

  header: {
    height: 46,
    marginBottom: 8,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    top: 10,
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
  },
  cartWrap: {
    position: 'absolute',
   right: 0,
   top: 6,
   width: 36,
    height: 36,
   borderRadius: 18,
    backgroundColor: '#F7F7F7', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: colors.green,
    borderRadius: 9,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },

  // top image
  topRow: {
    marginBottom: 12,
  },
  topImageBox: {
    width: 90,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  topImage: {
    width: '100%',
    height: '100%',
  },

  
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  filterChip: {
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 9,
    borderColor: '#F0F0F0',
  },
  filterText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Rubik'
  },

 
  colWrapper: {
    justifyContent: 'space-between',
    marginBottom: 14,
  },


  card: {
    width: cardWidth,
    backgroundColor: colors.white,
       borderRadius: 14,
    borderColor: '#EAEAEA',
    // borderWidth: 1,
   overflow: 'visible',
  },
imageContainer: {
    position: 'relative',
    width: '100%',
    height: 170,
    backgroundColor: '#F8F8F8',
    borderRadius: 14,    
    overflow: 'hidden',  
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
  heartWrap: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0', 
  },
  heartImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },

    infoRow: {

   flexDirection: 'row',
    alignItems: 'flex-start', 
   paddingHorizontal: 10,
    paddingVertical: 8,
   },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: colors.black,
    lineHeight: 16,
  },
     plusButton: {

    width: 30,
   height: 30,
    borderRadius: 8,
   backgroundColor: colors.white,
   justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 1,
   borderColor: '#EAEAEA',
    marginLeft: 8,
    alignSelf: 'flex-start', 
   },
  plusText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: '500',
  },
});