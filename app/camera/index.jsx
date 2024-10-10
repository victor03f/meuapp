import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Linking } from "react-native";






export default camera = () => {
  const [permissions, requestPermissions] = useCameraPermissions();
  const [foto, setFoto] = useState(null);
  const [scanner, setScanner] = useState(false);
  const [scanned, setScanned] = useState(false);
  const cameraRef = useRef(null);
  const [ladoCamera, SetladoCamera] = useState("back");
  const [permissaoSalvar, pedirpermissaoSalvar] = MediaLibrary.usePermissions();


  if (!permissions) {
    return <View></View>;
  }


  if (!permissions.granted) {
    return (
      <View style={style.container}>
        <Text style={style.TextPermission}>
          Voce precisa da permissao para utilizar a camera
        </Text>
        <Button title="pedir permissão" onPress={requestPermissions} />
      </View>
    );
  }


  const tirarFoto = async () => {
    const fotoBase64 = await cameraRef.current?.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
    setFoto(fotoBase64);
    console.log(fotoBase64);
  };
  const inverterLadoCamera = () => {
    SetladoCamera(ladoCamera == "back" ? "front" : "back");
  };


  const salvaFoto = async () => {
    if (permissaoSalvar.status !== "granted") {
      await pedirpermissaoSalvar();
    }
    MediaLibrary.saveToLibraryAsync(foto.uri);
    setFoto(null);
  };
  const readQr = async ({data}) => {
    setScanned(true);
    await Linking.openURL(data);
    setScanned(false);
};


return (
  <View style={style.container}>
    {foto ? (
      <SafeAreaView style={style.Viewcontainer}>
        <View style={style.ViewFoto}>

       
        <Image style={style.image} source={{ uri: foto.uri }} />
        <View style={style.viewButton}>
              <Pressable title="Salvar Foto" onPress={salvaFoto}>
                <Image style={style.icon} source={require('../image/salvar.png')} />
              </Pressable>
              <Pressable title="Descartar imagem" onPress={() => setFoto(null)}>
                <Image style={style.icon} source={require('../image/salvar.png')} />
              </Pressable>
              <Pressable title="Salvar Foto" onPress={salvaFoto}>
                <Image style={style.icon} source={require('../image/salvar.png')} />
              </Pressable>
              
              <Pressable onPress={tirarFoto}>
                <Image style={style.icon} source={require('../image/deletar.png')} />
              </Pressable>
           
        </View>
        </View>
      </SafeAreaView>
    ) : (
      <View>
        {scanner ? (
          <View style={style.camera}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : readQr}
              style={StyleSheet.absoluteFillObject}
            />
            <View style={style.cambtn}>
              <Pressable style={style.button} onPress={() => setScanner(!scanner)}>
                
              </Pressable>
            </View>
          </View>
        ) : (
          <CameraView style={style.camera} ref={cameraRef} facing={ladoCamera}>
            <View style={style.cameraContainer}>
              <Pressable onPress={tirarFoto}>
                <Image style={style.icon} source={require('../image/camera.png')} />
              </Pressable>
              
              <Pressable style={style.button} onPress={() => setScanner(!scanner)}>
                <Image style={style.icon} source={require('../image/qr-code.png')} />
              </Pressable>
              <Pressable onPress={inverterLadoCamera}>
                <Image style={style.icon} source={require('../image/trocaLado.png')} />
              </Pressable>
            </View>
          </CameraView>
        )}
      </View>
    )}
  </View>
);
}



const style = StyleSheet.create({

container:{
  flex: 1
},
  Viewcontainer:{
    flex: 1,
   
  },
  ViewFoto:{
    flex: 1,
    
  },
  image:{
    width: "100%",
    height: "100%",
  },
  camera:{
    width: "100%",
    height: "100%",
  },
    cameraContainer:{
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    icon:{
      width: 55,
      height: 55
    },
    viewButton:{
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
});



