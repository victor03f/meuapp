import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView,SafeAreaView } from "react-native"
import {Link} from "expo-router"
import Navbar from "../../../components/Navbar";
import GamesAboutMe from "../../../components/Games-movies-AboutMe";


const style = StyleSheet.create({
    
    }
)

export default Jogos = () => {
//const lista = [{}, {}]

    return(
        <View>

        
          <Navbar name = "Filmes"
          voltar = "/sobre-mim"
          />
         <ScrollView>

          <GamesAboutMe img ={require('../../image/anonimo.jpeg')}
          text = {"Anônimo"}
          year = {"Lançamento: 2022"}
          id = {1}
          />
          <GamesAboutMe img ={require('../../image/spider-man.jpg')}
          text = {"Homem-aranha 2 (2004) "}
          year = {"Lançamento:2004"}
          id = {2}
          
          />
          <GamesAboutMe img ={require('../../image/clube-da-luta.jpg')}
          text = {"Clube da luta"}
          year = {"Lançamento:1999"}
          />
           
           

          </ScrollView>
          </View>
          
    )
}