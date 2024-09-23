import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native"


const style = StyleSheet.create({
navView:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: "#EA1D2C",
    padding: 8
},
TextNav:{
    color: 'white',
    fontSize: 19,
    justifyContent: 'space-around',

},
})
export default Navcomponet = (voltarPara) =>{

    return(
        <View style = {style.navView}>
            {voltarPara??<Link href='./buyScreen'><Text>Carrinho</Text></Link>}
           <Text style = {style.TextNav}>iFome</Text>
        </View>
    )

}