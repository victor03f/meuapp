import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, Pressable, FlatList } from "react-native";
import NavMemorias from "../componentes/navMemorias";



const style = StyleSheet.create({

})

const handleSubmit = async () => {

    if (!formData.title || !formData.where || !formData.desc || !formData.year || !formData.image) {
        alert('Todos os campos devem ser preenchiidos')
        return;
    }
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('lista_memorias', jsonValue);
    } catch (e) {
        // saving error
    }
};

export default cadastrarMemoria = () => {
    const [formData, setFormdata] = useState({
        title: '',
        where: '',
        desc: '',
        year: '',
        image: '',

    })




    return (
        <View>
            <NavMemorias />
            <TextInput
                style={style.input}
                placeholder="Onde?"
                value={formData.where}
                onChangeText={(text) => setFormdata({
                    ...formData, where: text
                })}
                required
            />
            <Pressable onPress={handleSubmit}>
                <Text>
                    ADICIONAR
                </Text>
            </Pressable>
        </View>
    )
}