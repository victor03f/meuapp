import React, { useState, useContext } from "react";
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet } from "react-native";
import NavIfome from "./components/NavIfome";
import { Link, router } from "expo-router";
import { AppContext } from "../../scripts/AppContext";



export default Ifome = () => {
    const {name, onChangeName} = useContext(AppContext)
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
        console.log(resposta)
        if (resposta.status === 200) {
            alert("user criado com sucesso")
            router.replace('/iFome/buyScreen')
            console.log(resposta)
            
        }
        else if (resposta.status == 409){
            alert("Email já cadastrado")
            
        }
    }


    return (
        <SafeAreaView style={style.safeview}>
            <View style={style.view}>
                <NavIfome />
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



                        <Pressable style={style.button} onPress={enviarRegistro}>
                            <Text style={style.textButton}>Enviar registo</Text>
                        </Pressable>


                                  <Link href={'/iFome/buyScreen'}>
                       
                            <Text style={style.textButton}>Compra</Text>
                       
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


    button: {
        marginTop: 25,
        marginBottom: 20,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
})