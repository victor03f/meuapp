import React from "react";
import {View,StyleSheet,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const app = () =>{
    const logoNetflix = 'https://logopng.com.br/logos/netflix-94.png';
    return(
<View style ={styles.ImgContainer}>
<LinearGradient
colors={['#FF0000','transparent']}
style={styles.gradient}/>
    <Image
    style ={styles.logo}
    
    source={{
        uri: logoNetflix,
    }}/>
</View>
    )
}
export default app;
const styles = StyleSheet.create({
    ImgContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    logo:{
        width:300,
        height:80,
    },
    gradient:{
        position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    }
});
