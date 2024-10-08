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
          {" "}
          Voce precisa da permissao para utilizar a camera
        </Text>
        <Button title="pedir permissão" onPress={requestPermissions} />
      </View>
    );
  }

  const tirarfoto = async () => {
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
    if (!permissaoSalvar.status == "granted") {
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
      {foto ?(
        <SafeAreaView style={style.container}>

          <Image style={style.image} source={{ uri: foto.uri }} />
          <View style={style.ViewButton}>

            <Button style={style.ButtonFoto} title="Descartar imagem" onPress={() => setFoto(null)} />
            <Button title="Salvar Foto" onPress={salvaFoto} />
          </View>
          
        </SafeAreaView>
        
        ):
        
        <View>
          </View>
}
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
 ):(
        <CameraView style={style.camera} ref={cameraRef} facing={ladoCamera}
        >
          <View style={style.cameraContainer}>
            <Pressable onPress={tirarfoto}>
              <Image
                style={style.fotoDePerfil}
                source={require('../image/camera.png')}

              />
            </Pressable>
            <Pressable style={style.button} onPress={() => setScanner(!scanner)}>
                      <Image
                          style={style.fotoDePerfil}
                          source={require('../image/qr-code.png')}
                      />
                  </Pressable>

            <Pressable onPress={inverterLadoCamera}>
              <Image
                style={style.fotoDePerfil}
                source={require('../image/trocaLado.png')}

              />
            </Pressable>
          </View>
        </CameraView>
      )}
    </View>
    
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  TextPermission: {
    TextAlign: "center",
  },
  camera: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  ButtonFoto: {
    flex: 1,
  },
  ViewButton: {
    justifyContent: 'flex-end'
  },

  fotoDePerfil: {
    width: 60,
    height: 60,
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row'

  }
});
