import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet } from "react-native";
import NavIfome from "./iFome/components/NavIfome";
import { Link } from "expo-router";



export default Ifome = () => {

    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');


    const enviarRegistro = async () => {
        if (!name || !password || !email) {
            alert("Prencha todos os campos corretamente")
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'password': password,
                'email': email,
            })
        })
        if (resposta.status == 200) {
            alert("user criado com sucesso")
        }
        else (resposta.status == 409)
        alert("Email já cadastrado")
    }


    return (
        <SafeAreaView style={style.safeview}>
            <View style={style.view}>
                <NavIfome/>
                <View style={style.ViewLogin}>

                    <Text style={style.text}>Registre-se</Text>
                    <Text style={style.subtitle}>Nome:</Text>

                    <TextInput
                        style={style.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Ex: Victor"

                    />
                    <Text style={style.subtitle}>Senha:</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Ex: abc123"

                    />
                    <Text style={style.subtitle}>E-mail:</Text>
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Ex: example123@gmail.com"
                    />


                    <View style={style.pressable}>

                          <Link href={'/app/iFome/buyScreen'}>
                         
                        <Pressable style={style.button} onPress={enviarRegistro}>
                            <Text style={style.textButton}>Enviar</Text>
                        </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    ViewLogin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
    subtitle: {
        marginTop: 25,
        marginBottom: 25,
        fontSize: 17
    },
    textButton:{
        marginTop: 25,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
})