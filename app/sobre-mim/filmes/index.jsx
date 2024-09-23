import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView,SafeAreaView } from "react-native"
import {Link} from "expo-router"
import Navbar from "../../../components/Navbar";
import Games from "../../../components/Games-movies-AboutMe";
import { SafeAreaProvider, SafeAreaInsetsContext } from "react-native-safe-area-context";


const style = StyleSheet.create({
   movie:{
    height: 240,
    width: 200,
    display: 'flex',
    alignItems: 'center'
   
   },
    }
)

export default Jogos = () => {
//const lista = [{}, {}]

    return(
        <SafeAreaProvider>
        <View>

        
          <Navbar name = "Filmes"
          voltar = "/sobre-mim"
          />
         <ScrollView >

          <Games  img ={"https://i0.wp.com/portalnerdistico.com.br/wp-content/uploads/2024/01/anonimo-filme-1.jpg"}
          text = {"Anônimo"}
          year = {"Lançamento: 2022"}
          id = {1}
          style = {style.movie}
          
          />
          <Games  img ={"https://img33.tokyvideo.com/videos/355/355893/previews/previews_0012_custom_1696996476.0872.jpg"}
          text = {"Homem-aranha 2 (2004)"}
          year = {"Lançamento:2004"}
          id = {2}
          style = {style.movie}
          
          />
          <Games  img ={"https://uploads.jovemnerd.com.br/wp-content/uploads/2022/01/clube-da-luta-autor-ironiza-final-chines.jpg"}
          text = {"Clube da luta"}
          year = {"Lançamento:1999"}
          id = {3}
          style = {style.movie}
          />
           
           

          </ScrollView>
          </View>
          </SafeAreaProvider>
          
    )
}