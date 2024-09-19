import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Link } from "expo-router"

const style = StyleSheet.create({
    img:{
        width: 300,
        height: 120,
    },
    ViewGames:{
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
    }
},
)

export default Games = (props) => {

    return (
        <ScrollView>
        <View style={style.ViewGames}>
            <Link 
            href={{
                pathname:`sobre-mim/descricao/${props.id}`,
                params:{'jogo': JSON.stringify({'jogo':props})},
            }}
            style={style.img}
            >
            <Image
                style={style.img}
                source={{uri: props.img}}
            />
            </Link>
            <Text style = {style.footerImg}>{props.text}</Text>
            <Text style = {style.footerImg}>{props.year}</Text>
        </View>
        </ScrollView>

    )
}