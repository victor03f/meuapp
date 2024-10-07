import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button,SafeAreaView,  } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";


export default camera = () => {
  const [permissions, requestPermissions] = useCameraPermissions();
  const [foto, setFoto] = useState(null);
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

  return (
    <View style={style.container}>
        
      {foto ? 
        <SafeAreaView style={style.container}>
          
          <Image style={style.image} source={{ uri: foto.uri }} />
          <View style={style.ViewButton}>
    
          <Button style={style.ButtonFoto} title="Descartar imagem" onPress={() => setFoto(null)} />
          <Button title="Salvar Foto" onPress={salvaFoto} />
          </View>
  
         </SafeAreaView>
       : 
        <CameraView style={style.camera} facing={ladoCamera} ref={cameraRef} barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}>
          <View style={style.cameraButton}>

            <Button title="Tirar foto" onPress={tirarfoto} />
            <Button title="Troca lado" onPress={inverterLadoCamera} />
            <TouchableOpacity style={style.button} onPress={onPress}>
        <Image style={style.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
      </TouchableOpacity>
            
          </View>
        </CameraView>
      }
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex:1,
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
  ButtonFoto:{
    flex: 1,
  },
  ViewButton:{
    justifyContent: 'flex-end'
  }
});
