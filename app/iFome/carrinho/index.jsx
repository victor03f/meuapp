import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView, Image } from "react-native"
import { Link } from "expo-router"
import NavIfome from "../components/NavIfome";
import { AppContext } from "../../../scripts/AppContext";


const style = StyleSheet.create({
   
})


const Item = ({id, name, local, price}) => {
    return(
        <View style={style.container}>
            <View >
                <Text style={style.name}>{name}</Text>
                <Text style={style.local}>{local}</Text>
            </View>
            <View>
                <Text style={style.price}>R$ {price}</Text>
            </View>
        </View>
    )
}
export default functionee = () =>{
    const { carrinho } = useContext(AppContext)
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let a = 0;
        let b = carrinho.map((item) => {a = a + item.price});
        setTotal(a);
    })

    return(
        <View>
         
                    <FlatList data={carrinho} renderItem={({item}) => (
                    <Item name={item.name} local={item.local} price={item.price} id={item.id} />
                )}  keyExtractor={item => item.id}
            />
        <Text style={style.total}>Total: R${total.toFixed(2)}</Text>
        <Pressable>
        <Text style={style.compra}>Finalizar compra</Text>
        </Pressable>
        </View>
        
    )
}
