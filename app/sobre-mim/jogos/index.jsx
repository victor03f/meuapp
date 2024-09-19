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
        <SafeAreaView>
    
          <Navbar name = "Jogos"
          voltar = "/sobre-mim"
          />
         <ScrollView>

          <GamesAboutMe img ={require('../../image/elden-ring.jpeg')}
          text = {"Elden Ring"}
          year = {"Lançamento: 2022"}
          />
          <GamesAboutMe img ={require('../../image/red-dead.jpeg')}
          text = {"Red Dead Redemption 2 "}
          year = {"Lançamento:2018"}
          
          />
          <GamesAboutMe img ={require('../../image/black-myth.jpeg')}
          text = {"Black myth: Wukong"}
          year = {"Lançamento:2018"}
          
          />
          <GamesAboutMe img ={require('../../image/God-of-War.jpeg')}
          text = {"God of War: Ragnarok"}
          year = {"Lançamento:2022"}
          />
          </ScrollView>
          </SafeAreaView>
          
    )
}