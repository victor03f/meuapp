import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, } from "react-native"


const style = StyleSheet.create({
    titleButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C6DED',
        borderRadius: 100,
        padding: 5,
        marginTop: 5
    },
    TextView:{
     color: 'white',
     
    }
})

export default ButtonAboutMe = (props) => {
    return (
        <View  style={style.titleButton}>
            
            
            <Pressable>
            <Link href={`${props.link}`}>
            <Text style = {style.TextView}>
             {props.button}
            </Text>
            </Link>
            </Pressable>
        
            </View>
        
    )
}