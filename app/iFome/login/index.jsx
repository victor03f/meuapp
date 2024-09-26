import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView,SafeAreaView } from "react-native"
import {Link} from "expo-router"
import NavIfome from "../../iFome/components/NavIfome";


const style = StyleSheet.create({
    

})



export default loginScreen = () =>{
    return(
        <View style = {style.ViewLogin}>
            <NavIfome/>
          <Text style = {style.TextLogin}>
         Faça seu login
          </Text>

        </View>
    )
}