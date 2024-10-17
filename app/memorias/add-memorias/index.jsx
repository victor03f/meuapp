import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, Pressable, FlatList } from "react-native";
import NavMemorias from "../componentes/navMemorias";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";



const stylesCadastro = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        padding: 15,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
});



export default cadastrarMemoria = () => {
    const [FormData, setFormData] = useState({
        title: '',
        where: '',
        desc: '',
        year: '',
        image: '',

    })



    const handleSubmit = async () => {

        if (!FormData.title || !FormData.where || !FormData.desc || !FormData.year || !FormData.image) {
            alert('Todos os campos devem ser preenchiidos')
            return;
        }
        try {
            const jsonValue = JSON.stringify(FormData);
            await AsyncStorage.setItem('lista_memorias', jsonValue);
            alert('Sucesso', 'Memória adicionada com sucesso!');
            
            setFormData({ title: '', where: '', desc: '', year: '', image: '' });
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <View style={stylesCadastro.container}>
            <NavMemorias name="Cadastrar Memória" />
            <Text style={stylesCadastro.title}>Cadastrar Memória</Text>
            <TextInput
                style={stylesCadastro.input}
                placeholder="Título"
                value={FormData.title}
                onChangeText={(text) => setFormData({ ...FormData, title: text })}
            />
            <TextInput
                style={stylesCadastro.input}
                placeholder="Local"
                value={FormData.where}
                onChangeText={(text) => setFormData({ ...FormData, where: text })}
            />
            <TextInput
                style={stylesCadastro.input}
                placeholder="Ano"
                value={FormData.year}
                onChangeText={(text) => setFormData({ ...FormData, year: text })}
            />
            <TextInput
                style={stylesCadastro.input}
                placeholder="Descrição"
                value={FormData.desc}
                onChangeText={(text) => setFormData({ ...FormData, desc: text })}
            />
            <TextInput
                style={stylesCadastro.input}
                placeholder="Imagem"
                value={FormData.image}
                onChangeText={(text) => setFormData({ ...FormData, image: text })}
            />
            <Pressable style={stylesCadastro.button} onPress={handleSubmit}>
                <Text style={stylesCadastro.buttonText}>ADICIONAR</Text>
            </Pressable>
            <Link style={stylesCadastro.button} href={"../"}>
            <Text style={stylesCadastro.buttonText}>Voltar</Text>
            </Link>
        </View>
    );
}