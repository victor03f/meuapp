import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Pressable,  StyleSheet } from "react-native"; 



export default signup = () => {

  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [email, onChangeEmail] = React.useState('');


  const enviarRegistro = async() => {
    if(!name||!password||!email){
    alert("Prencha todos os campos corretamente")
  }
    const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'name':name,
        'password':password,
        'email':email,
      })
    })
    if(resposta.status == 200){
      alert("user criado com sucesso")
    }
    else(resposta.status == 409)
    alert("Email já cadastrado")
  }


  return (
    <SafeAreaView style={style.safeview}>
      <View style={style.view}>
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
<Text style={style.textButton} >Enviar</Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
  safeview:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  view:{
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    height: '75%',
  },
  input:{
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
  },
  subtitle:{
    display:'flex',
    padding:10
  },
  text:{
    fontSize:20,
  },
  textButton:{
color:'white'
  },
  button:{
    padding: 10,
    
    backgroundColor: '#000000',
    borderRadius: 5,
    width: '50%',
    marginBottom: 10,
    alignItems: 'center',
  },
  pressable:{
    padding:15
  }
})