import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';

const style = StyleSheet.create({
})

export default Selecionar = () => {
    const [pokemon, setPokemon] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [type, setTypes] = useState('')

    useEffect(() => {
  fetch('https://pokeapi.co/api/v2/type')
.then(response => response.json())
.then(dados => setTypes(dados.results))
    },[])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(dados => setPokemons(dados.results))
    }, [])
    
    return <View style={style.container}>
        <Text style={style.texto}>Selecione abaixo:  </Text>
        <Picker
        selectedValue={pokemon}
        style={style.picker}
        onValueChange={(itemValue) => setPokemon(itemValue)}>
            <Picker.Item label="Selecione um Pokémon"/>
            {pokemons.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.url}/>
            ))}
        </Picker>
        {pokemon?<Text>Você Selecionou: {pokemon}</Text>: ''}
        <Picker>

        </Picker>
    </View>
}