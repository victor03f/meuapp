import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from "react-native";
import {Link} from "expo-router";

const Index = () => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>Bem vindo!</Text>
            <Link href="./calculadora" style={styles.links}>
                <Text style={styles.linkText}>Calculadora</Text>
            </Link>
            <Link href="./calculadora2" style={styles.links}>
                <Text style={styles.linkText}>Calculadora-Atualizada</Text>
            </Link>
    
            <Link href="./banco" style={styles.links}>
                <Text style={styles.linkText}>Banco</Text>
            </Link>
            <Link href="./lista-tarefa" style={styles.links}>
                <Text style={styles.linkText}>Lista de tarefas</Text>
            </Link>
            <Link href="./login" style={styles.links}>
                <Text style={styles.linkText}>Login com API Task-Hub</Text>
            </Link>
            <Link href="./pokemon" style={styles.links}>
                <Text style={styles.linkText}>Pokemon</Text>
            </Link>
            <Link href="./splash-screen" style={styles.links}>
                <Text style={styles.linkText}>Tela de inicio</Text>
            </Link>
            <Link href="./sobre-mim" style={styles.links}>
                <Text style={styles.linkText}>Sobre mim</Text>
            </Link>
            <Link href="./iFome" style={styles.links}>
                <Text style={styles.linkText}>iFome</Text>
            </Link>
            <Link href="./camera" style={styles.links}>
                <Text style={styles.linkText}>Camera</Text>
            </Link>
        </SafeAreaView>
    )
}

export default Index

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#333',
    },
    links: {
        backgroundColor: '#007bff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    linkText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
})