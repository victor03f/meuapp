import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView, Image } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

const style = StyleSheet.create({
    imgId: {
        height: 150,
        width: 300,
    },
    ViewId:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
)


export default DetalheScreen = () => {

    const { jogo } = useLocalSearchParams();
    const filmeObject = JSON.parse(jogo);
    return (
        <ScrollView>
            <View style= {style.ViewId}>

            
            <Image style={style.imgId} source={{ uri: filmeObject.jogo.img }} />
            <Text style={style.text}>{filmeObject.jogo.text}</Text>
            <Text>{filmeObject.jogo.year}</Text>
            </View>
        </ScrollView>

    )




}