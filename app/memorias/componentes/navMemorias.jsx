import React, { useState } from "react";
import { View, Text, StyleSheet,Pressable, } from "react-native"


const style = StyleSheet.create({
    navView:{
        display:'flex',
        flexDirection: 'row',
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
export default navMemorias = (props) =>{

    return(
        <View style = {style.navView}>
            <Text style = {style.TextView}>
             {props.name}
            </Text>
        </View>
    )

}
