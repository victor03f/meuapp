import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView,SafeAreaView, Image } from "react-native"
import {Link} from "expo-router"
import NavIfome from "../components/NavIfome";


const style = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
      },

})




const DATA = [
    {
      id: '1',
      name: 'Coxinha',
      local: 'Maria coxinha',
      price: 'R$: 4,50',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLigfyds3_5OSm0C4_VTYXDa5g6e32kV9h7g&s',

    },
    {
      id: '2',
      name: 'Pastel',
      local: 'Zanza pasteis',
      price: 'R$: 11,00',
      img: 'https://static.itdg.com.br/images/360-240/47c51db99420cbe011888d340a127cd5/59405-shutterstock-1811357002-2-.jpg.jpg',
    },
    {
        id: '3',
        name: 'Hot-dog',
        local: 'Hot-dog do scooby',
        price: 'R$: 14,50',
        img: 'https://meucachorroquente.com.br/wp-content/uploads/2021/12/Melhores-recheios-de-cachorro-quente-nordestino-1200x720.jpg',
    },
    {
        id: '4',
        name: 'Pizza',
        local: 'Parma pizzaria',
        price: 'R$: 56,90',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
      },
      {
        id: '5',
        name: 'El burguer',
        local: 'Trailer El toro na palhoça',
        price: 'R$: 14,50',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg',
      },
  ];
  const Item = ({name, local, price, img}) => {
    console.log(img)
    return(
    <View style={style.item}>
      <Text style={style.name}>{name}</Text>
      <Text style={style.name}>{local}</Text>
      <Text style={style.name}>{price}</Text>
      <Image
        style={style.tinyLogo}
        source={{
          uri: img,
        }}
      />
      <Pressable style={style.button}>
<Text>
    botao
</Text>
      </Pressable>
    </View>)
  };


export default buyscreen = () => {

    return(
        
        <View style = {style.ViewBuyScreen}>
            <NavIfome/>
  <SafeAreaView style={style.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item name={item.name} local={item.local} price={item.price} img={item.img} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        </View>
    )

}