import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const handleReadMore = () => setShowFullDescription(!showFullDescription);

  return (
    <View style={styles.container}>
      {/* Üst Kısım */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Food Details</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Icon name="favorite" size={28} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </View>

      {/* Ürün Görseli */}
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>

      {/* Ürün Bilgileri */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>

        <View style={styles.productInfo}>
          <Text style={styles.productRating}>⭐ {product.rating}</Text>
          <Text style={styles.productKcal}>🔥 100 Kcal</Text>
          <Text style={styles.productTime}>⏱️ 20min</Text>
        </View>

        {/* Miktar  */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Açıklama */}
        <Text style={styles.descriptionTitle}>About food</Text>
        <Text style={styles.description}>
          {showFullDescription
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et cursus tortor metus suspendisse sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod et lectus id fermentum.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et cursus tortor metus suspendisse sed...'}
          <Text onPress={handleReadMore} style={styles.readMore}>
            {showFullDescription ? ' Show less' : ' Read more'}
          </Text>
        </Text>

        {/* Sepete Ekleme Butonu */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  productImage: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  productRating: {
    fontSize: 14,
    color: '#666',
  },
  productKcal: {
    fontSize: 14,
    color: '#666',
  },
  productTime: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    width: '40%',
    justifyContent: 'space-between',
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  readMore: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    width: width * 0.8, 
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
