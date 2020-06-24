import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView ,FlatList, ActivityIndicator} from 'react-native';
import { exp } from 'react-native-reanimated';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector,useDispatch} from 'react-redux'



const Littlecard=({name})=>{
return(

    <View style={{ backgroundColor:"red",width:150,borderRadius:4,height:40,marginTop:10}}>
                <Text style={{color:"white",textAlign:"center",fontSize:20,marginTop:5}}>{name}

                </Text>

    </View>
)

}


const Explore=()=>{


    const cardData=useSelector(state=>{

        return state.cardData
        
        })
        
    return(

        <View style={{flex:1}}>
            <Header></Header>
            <ScrollView>
                
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
                    
                    <Littlecard name="Gaming"/>
                    <Littlecard name="Trending"/>
                    <Littlecard name="Music"/>
                    <Littlecard name="Movies"/>
                    <Littlecard name="News"/>
                    <Littlecard name="Fashion"/>
                    
 
             </View>

             <Text style={{margin:8,fontSize:20,borderBottomWidth:1}}>Trending Videos</Text>
             
             <FlatList
                
                data={cardData}
                 renderItem={({item})=>{
 
                     return <Card
                     videoId={item.id.videoId}
                     title={item.snippet.title}
                     channel={item.snippet.channelTitle}
                     >
 
 
                     </Card>
                 }}
                 >
 
             </FlatList>
  
            </ScrollView>
            
        </View>
    )
}
export default Explore