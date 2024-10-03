import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Link} from "expo-router";

const App = () => {
    const [element, setElement] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [elements, setElements] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [img, setImg] = useState('');


    async function getPokemons() {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
            const data = await res.json();
            setPokemons(data.results);
            setFilteredPokemons(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    async function getPokemonTypes() {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/type');
            const data = await res.json();
            setElements(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPokemons();
        getPokemonTypes();
    }, []);

    const handleElementChange = async (element) => {
        setElement(element);
        let pokemonList = [...pokemons];
        if (element) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${element}`);
                const data = await response.json();
                const filteredPokemonsByType = data.pokemon.map(p => p.pokemon.name);
                pokemonList = pokemonList.filter(p => filteredPokemonsByType.includes(p.name));
            } catch (error) {
                console.error(error);
            }
        }
        setFilteredPokemons(pokemonList);
    };

   async function getImg() {
        setPokemon(url);
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setImg(data.sprites.front_default);
                });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>

            <Picker
                selectedValue={element}
                style={styles.picker}
                onValueChange={handleElementChange}
            >
                <Picker.Item label="Selecione um tipo" value="" />
                {elements.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.name} />
                ))}
            </Picker>
            <Picker
                selectedValue={pokemon}
                style={styles.picker}
                onValueChange={getImg}
            >
                <Picker.Item label="Selecione um pokemon" value="" />
                {filteredPokemons.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.url} />
                ))}
            </Picker>

            {img ? (
                <Image
                    source={{ uri: img }}
                    style={styles.image}
                />
            ) : null}

            <View>
                <Link href="../">
                    Voltar
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
    },
    picker: {
        width: '80%',
        height: 40,
        marginTop: 20,
    },
    card: {
        alignItems: 'center',
        margin: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default App;