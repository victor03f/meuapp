import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, FlatList} from "react-native";
import NavMemorias from "./componentes/navMemorias";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

const getStoredMemories = async () => {
    try {
      const value = await AsyncStorage.getItem('lista_memorias');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }; 
export default memorias = () => {

    const [memorias, SetMemorias] = useState(null);


    useEffect(() => {
let resultado = getStoredMemories()
if(resultado){
   SetMemorias(JSON.stringify(resultado))
}
    }, []);
   

    return (
        <View style='container'>
            <NavMemorias name="Memorias" />
            <Link href={'../memorias/add-memorias/index'}>
            <Text>

            </Text>
            </Link>
            <FlatList
                data={memorias}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.Image }} style={style.Image} />
                        <Text>{item.title}</Text>
                        <Text>{item.desc}</Text>
                        <Text>{item.where} - {item.year}</Text>
                        <Link href={"./add-memorias"}>
                            <Text style = {style.textAdd}>
                                Adicionar memorias
                            </Text>
                        </Link>
                    </View>
                )}
            />
        </View>
    )




}

const style = StyleSheet.create({

    textAdd:{
        fontSize: 10
    }


})
