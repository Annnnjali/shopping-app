import {
    StyleSheet, 
    Text, 
    View,
    FlatList,
} from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/molecule/ProductCard';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddCart = ({navigation}) => { 
  const { cartProducts } = useSelector(state => state.addcart);

  const renderItem = ({item}) => {
    return (
      <ProductCard navigation={navigation} item={item}/>
    );
  };

  const renderHeader = () => (
    <View>
      <Text style={styles.txt}> ADD TO CART </Text> 
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={cartProducts}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default AddCart;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '$BG_COLOR',
    
  },
    txt: {
       color: '$TEXT',
      fontWeight: 'bold',
      fontSize: 25,
      paddingHorizontal: 5,
      margin: 40,
      marginTop: 0,
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
});
