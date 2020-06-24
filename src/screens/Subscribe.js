import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView ,FlatList, ActivityIndicator} from 'react-native';
import { exp } from 'react-native-reanimated';
import Header from '../components/Header';


const Subscribe=()=>{
    return(

        <View style={{flex:1}}>
            <Header></Header>
            <Text>Subscribe Screen</Text>
        </View>
    )
}
export default Subscribe