import { useState, useEffect } from "react";
import { View, Text,StyleSheet, FlatList } from "react-native";
import NavMemorias from "./componentes/navMemorias";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";


const Memorias = () => {
    const getStoredMemories = async () => {
        try {
            const value = await AsyncStorage.getItem('lista_memorias');
            if (value !== null) {
                return(value)
            }
        } catch (e) {
        
        }
    };

    const [memorias, SetMemorias] = useState(null);


    useEffect(() => {
        getStoredMemories().then((data) => {
            console.log(data, typeof data)
            if (data) {
                
                SetMemorias([JSON.parse(data)])
            }
        })
    }, [])

    return (
        <View style={style.container}>
            <NavMemorias name="Memórias" />
            <FlatList
                data={memorias}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <View style={style.memoryItem}>
                        <Text style={style.memoryTitle}>{item.title}</Text>
                        <Text style={style.memoryDescription}>{item.desc}</Text>
                        <Text>{item.where} - {item.year}</Text>
                    </View>
                )}
            />
            <Link href="./add-memorias">
                <Text style={style.textAdd}>Adicionar memórias</Text>
            </Link>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    memoryItem: {
    
    },
    memoryTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333', 
    },
    memoryDescription: {
        fontSize: 16,
        color: '#666', 
    },
    textAdd: {
        fontSize: 30,
        color: '#007BFF', 
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default Memorias;
