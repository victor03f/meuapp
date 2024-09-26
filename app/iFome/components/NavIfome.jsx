import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native"


const style = StyleSheet.create({
navView:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: "#DB000A",
    padding: 7
    
},
TextNav:{
    color: 'white',
    fontSize: 19,
    justifyContent: 'space-around',
    fontStyle: 'arial'

},
})
export default Navifome = () =>{

    return(
        <View style = {style.navView}>
           <Text style = {style.TextNav}>iFome</Text>
        </View>
    )

}