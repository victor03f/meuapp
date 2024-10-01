import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView, Image } from "react-native"
import { Link } from "expo-router"
import NavIfome from "../components/NavIfome";
import { AppContext } from "../../../scripts/AppContext";

const style = StyleSheet.create({

    lfe:{
width: 200,
height: 200,
    },
    containerLogo: {
        height: 100,
        width: 100
    },
    tinyLogo: {
        width: 62,
        height: 60,
    },

    button: {
        marginTop: 10
    },
    Textbutton: {
        fontSize: 18,
        borderRadius: 1,
        marginBottom: 20,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',

    },
    sl: {
        display: 'flex',
    },
    ViewText: {
        display: 'flex',
        flexDirection: 'column',

    },
    img: {
        display: 'flex',
        marginRight: 12,
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    textUser: {
        display: 'flex',
        marginBottom: 40,

    },
})

const DATA = [
    {
        id: 1,
        name: 'Coxinha',
        local: 'Maria coxinha',
        price:  4.50,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLigfyds3_5OSm0C4_VTYXDa5g6e32kV9h7g&s',

    },
    {
        id: 2,
        name: 'Pastel',
        local: 'Zanza pasteis',
        price:  11.00,
        img: 'https://static.itdg.com.br/images/360-240/47c51db99420cbe011888d340a127cd5/59405-shutterstock-1811357002-2-.jpg.jpg',
    },
    {
        id: 3,
        name: 'Hot-dog',
        local: 'Hot-dog do scooby',
        price:  14.50,
        img: 'https://meucachorroquente.com.br/wp-content/uploads/2021/12/Melhores-recheios-de-cachorro-quente-nordestino-1200x720.jpg',
    },
    {
        id: 4,
        name: 'Pizza',
        local: 'Parma pizzaria',
        price:  56.00,
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    },
    {
        id: 5,
        name: 'El burguer',
        local: 'Trailer El toro na palhoça',
        price:  14.50,
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg',
    },
];
const Item = ({ id, name, local, price, img }) => {
    const { SetCarrinho, carrinho } = useContext(AppContext)
    return (
        <View style={style.sl}>
            <View style={style.item}>
                <Image
                    style={style.img}
                    source={{
                        uri: img,
                    }}
                />
                <View style={style.ViewText}>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.name}>{local}</Text>
                    <Text style={style.name}>{price.toFixed(2)}</Text>
                    <Pressable style={style.button} onPress={() => SetCarrinho([...carrinho, { id, name, local, price }])}>
                        <Text style={style.Textbutton}>
                            Comprar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};

export default buyscreen = () => {
    const { detail, SetDetail, name } = useContext(AppContext)
    return (
        <View>
              <SafeAreaView style={style.container}>
            <ScrollView style={style.ViewBuyScreen}>
              
                    <NavIfome />

                    <View style={style.containerLogo}>
                        <Link  style ={style.lfe}href={'../carrinho'}>
                            <Image style={style.tinyLogo} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6915/6915412.png' }} />
                        </Link>
                    </View>


                    <Text style={style.textUser}>Bem vindo(a):{name}</Text>
                    {/* DATA.map(() */}
                    {DATA.map((item) => {
                        return (
                            <Item name={item.name} id={item.id} local={item.local} price={item.price} img={item.img} />
                        )
                    })}
                
            </ScrollView>
            </SafeAreaView>
        </View>
    )

}