import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, } from "react-native"
import Button from "../../components/ButtonTela-atividade"

const style = StyleSheet.create({
    title:{
        display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
    
    },
    text:{
        fontSize: 20,
    },
    description:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'50%',
        marginTop: '10%',
        fontSize: 15,
    }
    
})

export default initalScreen = () => {
    return(
        <View  style={style.title}>
            <Text style={style.text}>Clique em qual atividade deseja ir:</Text>
            <Text style = {style.description}>Todas as atividades abaixo foram desenvolvidar com o professor Ramon da área Técnica</Text>
            <ButtonComponent rota="./calculadora"/>
        </View>
    )
}