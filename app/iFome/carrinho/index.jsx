import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView, Image } from "react-native"
import { Link } from "expo-router"
import NavIfome from "../components/NavIfome";
import { AppContext } from "../../../scripts/AppContext";


const style = StyleSheet.create({
   
})


export default carrinho = () => {
    const { SetCarrinho, carrinho } = useContext(AppContext)
    console.log(carrinho)
    return(
        <View>
            <Text>
                awfdwma
            </Text>
        </View>
    )
}