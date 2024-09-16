import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, } from "react-native"


const style = StyleSheet.create({
    titleButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ButtonAboutMe = (props) => {
    return (
        <View  style={style.titleButton}>
            
            
            <Pressable>
<Link href={'./jogos'}>
            <Text style = {style.TextView}>
             {props.button}
            </Text>
            </Link>
            </Pressable>
        
            </View>
        
    )
}