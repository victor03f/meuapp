import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native-web";
import * as ImagePicker from 'expo-image-picker'

export default function PickerGaleria(){
    const [image, setImage] = useState('')
    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
    })
    
    }
    return(
       <View>
<Button title= "Selecionar Uma imagem da Galeria" onPress={pickImage}/>
{image && <Image source={{uri: image}} style={style.img}/>}
       </View> 
    )
}