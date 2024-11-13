import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const products = [
  { id: '1', name: 'Avocado Salad', price: '$15.00', time: '20min', rating: 4.5, image: require('../../assets/avocado-salad.jpg') },
  { id: '2', name: 'Royal Burger', price: '$10.00', time: '15min', rating: 4.2, image: require('../../assets/burger.jpeg') },
  { id: '3', name: 'Fruits Salad', price: '$12.00', time: '25min', rating: 4.8, image: require('../../assets/fruitsalad.jpeg') },
  { id: '4', name: 'Salad', price: '$8.00', time: '10min', rating: 4.3, image: require('../../assets/salad.jpg') },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query) {
      const filteredData = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={28} color="#4CAF50" />
        <Text style={styles.location}>Magura, BD</Text>
        <Image source={require('../../assets/avatar.png')} style={styles.profileImage} />
      </View>
      
      {/* Title */}
      <Text style={styles.title}>Find your food</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Food"
          value={searchQuery}
          onChangeText={handleSearch}
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="tune" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <Text style={styles.categoryText}>Food</Text>
        <Text style={styles.categoryText}>Fruits</Text>
        <Text style={styles.categoryText}>Vegetables</Text>
        <Text style={styles.categoryText}>Grocery</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { product: item })}>
              <Image source={item.image} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.productDetails}>
              <Text style={styles.productTime}>{item.time}</Text>
              <Text style={styles.productRating}>⭐ {item.rating}</Text>
            </View>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Icon name="home" size={28} color="#4CAF50" />
        <Icon name="shopping-cart" size={28} color="#4CAF50" />
        <Icon name="favorite" size={28} color="#4CAF50" />
        <Icon name="person" size={28} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#4CAF50',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 5,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '48%',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  productTime: {
    fontSize: 12,
    color: '#888',
  },
  productRating: {
    fontSize: 12,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#4CAF50',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 8,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;
