import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, } from "react-native"
import {Link} from "expo-router"

const style = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ButtonComponent = (props) => {
    return (
        <View  style={style.title}>
            <Link href={`${props.rota}`}>
                <Text style ={style.button}>
                    Calculadora
                </Text>
            </Link>
            </View>
        
    )
}