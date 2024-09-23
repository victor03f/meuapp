import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Link } from "expo-router"

const style = StyleSheet.create({
    img:{
        height: 150,
        width: 300
        
       
    },
    Viewimg:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewGames:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
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
            
            >
                <View style={style.Viewimg}>
            <Image
                style={style.img}
                source={{uri: props.img}}
            />
            </View>
            </Link>
            <Text style = {style.footerImg}>{props.text}</Text>
            <Text style = {style.footerImg}>{props.year}</Text>
        </View>
        </ScrollView>

    )
}