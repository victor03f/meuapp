import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Saldo({ saldo }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../image/banco.jpeg')}
            />
            <Text style={styles.title}>Saldo Atual da Conta</Text>
            <Text style={styles.value}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '50%',
        height: 150 
    },
    title: {

    },
    value: {

    },
});