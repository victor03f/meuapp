import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView,SafeAreaView } from "react-native"
import {Link} from "expo-router"
import Buttonbuyscreen from "../components/buttonbuyscreen";


const style = StyleSheet.create({
    

})


export default buyscreen = () => {

    return(
        <View style = {style.ViewBuyScreen}>
    <Buttonbuyscreen
   img ={"https://i0.wp.com/portalnerdistico.com.br/wp-content/uploads/2024/01/anonimo-filme-1.jpg"}
    />
        </View>
    )

}