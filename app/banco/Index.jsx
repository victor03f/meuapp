import React, { useState } from 'react';
import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';
import Saldo from './components/Input';
import Operacao from './components/Operacao';

export default function App() {
    const [saldo, setSaldo] = useState(7320.92);
    const [valorModal, setValorModal] = useState(0);
    const [operacao, setOperacao] = useState('');
    const [erroVisible, setErroVisible] = useState(false);
    const [confirmarVisible, setConfirmarVisible] = useState(false);

    const calcular = () => {
        if (operacao === 'saque') {
            const multa = valorModal * 0.025;
            setSaldo(saldo - valorModal - multa);
        } else if (operacao === 'deposito') {
            const bonus = valorModal * 0.01;
            setSaldo(saldo + valorModal + bonus);
        }
        setValorModal(0);
        setConfirmarVisible(false);
    };

    const showErro = () => setErroVisible(true);

    const showConfirm = (valor, operacao) => {
        setValorModal(valor);
        setOperacao(operacao);
        setConfirmarVisible(true);
    };

    return (
        <View style={styles.container}>
            <Saldo saldo={saldo} />
            <Operacao
                saldoAtual={saldo}
                showErro={showErro}
                showConfirm={showConfirm}
            />

            <Modal
                transparent
                animationType="slide"
                visible={erroVisible}
                onRequestClose={() => setErroVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Digite um valor válido para a operação.</Text>
                        <Pressable style={styles.button} onPress={() => setErroVisible(false)}>
                            <Text style={styles.textButton}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType="slide"
                visible={confirmarVisible}
                onRequestClose={() => setConfirmarVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {operacao === 'saque'
                                ? `Confirma o saque de R$ ${valorModal}? Saldo futuro: R$ ${(saldo - valorModal - valorModal * 0.025).toFixed(2)}`
                                : `Confirma o depósito de R$ ${valorModal}? Saldo futuro: R$ ${(saldo + valorModal + valorModal * 0.01).toFixed(2)}`}
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <Pressable style={styles.button} onPress={calcular}>
                                <Text style={styles.textButton}>Confirmar</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => setConfirmarVisible(false)}>
                                <Text style={styles.textButton}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    modalView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '50',
    },
    modalText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50',
    },
    modalButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50',
    },
    textButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50',
    },
});