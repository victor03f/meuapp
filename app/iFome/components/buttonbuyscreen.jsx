import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native"


const style = StyleSheet.create({
    ButtonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#DB000A",
        padding: 7

    },
    TextButton: {
        color: 'white',
        fontSize: 19,
        justifyContent: 'space-around',
        fontStyle: 'arial'

    },
})
export default buttonbuyscreen = (props) => {

    return (
        <View style={style.ButtonView}>
            <Text style={style.TextButton}>{props.text}</Text>
            <Image
                style={style.img}
                source={{ uri: props.img }}
            />
            <Text style={style.PriceButton}>{props.price}</Text>
            <Link href={'/app/iFome/carrinho'}>
                <Pressable style={style}>
                    <Text style={style}>Enviar</Text>
                </Pressable>
            </Link>
        </View>
    )

}