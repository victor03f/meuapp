import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";



export default camera = () => {

    const [permissions, requestPermissions] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if (!permissions) {
        return <View></View>
    }


    if (!permissions.granted) {
        return (
            <View style={style.container}>
                <Text style={style.TextPermission}> Voce precisa da permissao para utilizar a camera</Text>
                <Button
                    title='pedir permissão'
                    onPress={requestPermissions}

                />
            </View>
        )
    }

    const tirarfoto = async() =>{
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        })
        setFoto(foto)
        console.log(foto )
    }


    return (
        <CameraView style={style.camera} facing={'front'} ref={cameraRef}>
            <View style ={style.cameraButton}>
                <Button  title="Tirar foto" onPress={tirarfoto}/>
            </View>
        </CameraView>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    TextPermission: {
        TextAlign: 'center'
    },
    camera: {
        flex: 1
    }
})