import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView, Image } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

const style = StyleSheet.create({
    imgId: {
        
       
    }
}
)


export default DetalheScreen = () => {

    const { jogo } = useLocalSearchParams();
    const filmeObject = JSON.parse(jogo);
    return (
        <ScrollView>
            <Image style={style.imgId} source={{ uri: filmeObject.jogo.img }} />
            <Text style={style.text}>{filmeObject.jogo.text}</Text>
            <Text>{filmeObject.jogo.year}</Text>
        </ScrollView>

    )




}