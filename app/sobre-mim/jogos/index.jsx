import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView } from "react-native"
import { Link } from "expo-router"
import Navbar from "../../../components/Navbar";
import GamesAboutMe from "../../../components/Games-movies-AboutMe";


const style = StyleSheet.create({
    movie:{
        height: 640,
        width: 400,
        display: 'flex',
        alignItems: 'center'
    }
    
}
)

export default Jogos = () => {


    return (
        <SafeAreaView>
            <Navbar name="Jogos"
                voltar="/sobre-mim"
            />
            <ScrollView>
                <GamesAboutMe img={
                    "https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg"}
                    text={"Elden Ring"}
                    year={"Lançamento: 2022"}
                    id={1}
                />
                <GamesAboutMe img={"https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270"}
                    text={"Red Dead Redemption 2"}
                    year={"Lançamento:2018"}
                    id={2}
                />
                <GamesAboutMe img={"https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/KDOLVQTOY5EKDMFRAVYYEUEBVQ.jpg?smart=true&auth=fda6e80b8b792a30eabfa317f8015464c2773bbc619f2e9400a61c97c7342643&width=1200&height=630"}
                    text={"Black myth: Wukong"}
                    year={"Lançamento:2018"}
                    id={3}
                    style ={style.movie}
                />
                <GamesAboutMe img={"https://www.superjumpmagazine.com/content/images/size/w2000/2022/04/god-of-war-2018-featured-image.jpg"}
                    text={"God of War: Ragnarok"}
                    year={"Lançamento:2022"}
                    id={4}
                />
            </ScrollView>
        </SafeAreaView>

    )
}