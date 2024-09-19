import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet,Pressable, } from "react-native"


const style = StyleSheet.create({
navView:{
    display:'flex',
    flexDirection: 'row-reverse',
    justifyContent:'space-between',
    backgroundColor: "#0C6DED",
    padding: 8
},
TextView:{
    color: 'white',
    fontSize: 19,
    justifyContent: 'space-around',

},
})
export default Navcomponet = (props) =>{

    return(
        <View style = {style.navView}>
            <Pressable>
            <Link href={`${props.voltar}`}>
            <Text style = {style.TextView}>
             Voltar
            </Text>
            </Link>
            </Pressable>
            <Text style = {style.TextView}>
             {props.name}
            </Text>
        </View>
    )

}
