import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        alignItems: 'center',
        fontSize: 20,
    },
    tarefa_concluida: {
        textDecorationLine: 'line-through'
    }

})

const lista = [
    { id: 1, descricao: 'Comer torrada antes de dormir', feito: false },
    { id: 2, descricao: 'Jogar jogo', feito: false },
    { id: 3, descricao: 'Estudar', feito: true },
    { id: 4, descricao: 'Dar comida para calopsita', feito: true }
]

export default lista_tarefa = () => {
    return <View style={styles.container}>
        
            <Text style={styles.title}></Text>
    
        <FlatList
            data={lista}
            renderItem={({item}) => <View style={styles.container}>
                <Text style={[item.feito ? styles.tarefa_concluida : styles.tarefa_nao_feita]}>
                    {item.descricao}
                </Text>
            </View>}>
        </FlatList>

    </View>
}
