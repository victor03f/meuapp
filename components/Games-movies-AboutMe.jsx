import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Image, ScrollView } from "react-native"
import { Link } from "expo-router"

const style = StyleSheet.create({
    img: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: 20,
        width:'65%',
        height:130,
    },
    footerImg:{
     fontSize: 15,
     padding: 5,
     marginTop: 7
    }
})

export default Games = (props) => {
    return (
        <ScrollView>

        
        <View style={style.ViewGames}>
            <Image
                style={style.img}
                source={props.img}
            />
            <Text style = {style.footerImg}>{props.text}</Text>
            <Text style = {style.footerImg}>{props.year}</Text>
        </View>
        </ScrollView>

    )
}