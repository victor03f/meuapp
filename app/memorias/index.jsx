import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable } from "react-native";
import NavMemorias from "./componentes/navMemorias";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default memorias = () => {

    const [meuTime, SetMeuTime] = useState(null);


    useEffect(() => {
        if (condition) {
            
        } else {
            
        }
    }, []);
    const buscarTime = async () => {
        let resultado = await AsyncStorage.getItem('@meu_time')
        resultado && SetMeuTime(resultado);
    };
    const salvarTime = async () => {
        
    }

    return(
        <View>
<NavMemorias name = "Memorias"/>

        </View>
    )




}

const style = StyleSheet.create({



})
