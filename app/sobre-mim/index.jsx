import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Image } from "react-native"
import { Link } from "expo-router"
import Navbar from "../../components/Navbar";
import ButtonAboutMe from "../../components/ButtonAboutMe";

const style = StyleSheet.create({
    picture: {
        width: 200,
        height: 200,
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 20
    },
    ViewDescription: {
        width: "50%",
        alignSelf: 'center',
        marginTop: 20
    }

}
)

export default Sobremim = () => {
    return (
        <View>
            <Navbar name="Meu App" />
            <View>


                <Image
                    style={style.picture}
                    source={require('../image/minhafoto.jpeg')}
                />
            </View>
            <View style={style.ViewDescription}>
                <Text style={style.description}>Olá, Seja bem vindo(a). Esse é meu site pessoal para falar dos meus gostos pessoais!</Text>
                <ButtonAboutMe button = "Veja os meu jogos preferidos" />
            </View>
        </View>
    )
}
