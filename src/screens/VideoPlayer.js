import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView ,FlatList, ActivityIndicator,Dimensions} from 'react-native';
import { exp } from 'react-native-reanimated';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants'
import{useNavigation,useTheme} from  '@react-navigation/native'

const VideoPlayer=({route})=>{

const {videoId,title}=route.params
const {colors}=useTheme()
const textcolor=colors. iconColor


    return(

        <View style={{flex:1,marginTop:Constant.statusBarHeight,}}>
                    <View style={{width:"100%",height:200}}>

                    <WebView 
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri:`https://www.youtube.com/embed/${videoId}`}}></WebView>

                    </View>
        
                    <Text style={{fontSize:20,width:Dimensions.get("screen").width-50,margin:7,color:textcolor}}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        {title}
                        
                    </Text>
    
                    <View style={{borderBottomWidth:1,color:textcolor}}></View>
     
        </View>
    )
}
export default VideoPlayer
