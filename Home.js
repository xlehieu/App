import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,StyleSheet,Text,Button,TouchableOpacity,TextInput,Image,FlatList } from "react-native";
houseCategoriesImgae = require('../assets/housecategoriesimage.jpg');
apartmentCategoriesImage = require ('../assets/apartmentcategoriesimgae.jpg');
condosCategoriesImage = require ('../assets/condoscategoriesimage.jpg');

const Home = () => {
  const navigation = useNavigation();
  const goToHouseScreen = () =>{
    navigation.navigate("HouseScreen");
  }
    const [categories, setCategories] = useState([
        {
          image: houseCategoriesImgae,
          title: "Houses",
        },
        {
          image: apartmentCategoriesImage,
          title: "Apartments",
        },
        {
          image: condosCategoriesImage,
          title: "Condos",
        },
      ]);
      
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.containerCategories}>
      <FlatList 
      horizontal={true}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={goToHouseScreen}>
            <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'#4A4A4A',
        fontWeight:'600',
        marginTop:10,
        marginLeft:10,
        marginBottom:0,
    },
  categoryItem: {
    width: 130,
    height: 120,
    borderRadius: 10,
    margin: 10,
    borderColor:'#E4E2E2',
    borderWidth:'1px'
  },
  categoryImage: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 16,
    color:'#4A4A4A',
    fontWeight: "bold",
    marginTop:13,
  },
});

export default Home;