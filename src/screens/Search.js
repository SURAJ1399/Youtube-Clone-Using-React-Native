import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView ,FlatList, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import{useNavigation,useTheme} from  '@react-navigation/native'

//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=viedo&key=AIzaSyCvf6qFINMVRScjjf6aoB0YaBDftEj_4OU

const SearchScreen=({navigation})=>{

    const [value,setvalue]=useState("")
    const {colors}=useTheme()
    const textcolor=colors. iconColor
   
   // const [minicardData,setMiniCard]=useState([])
   const dispatch=useDispatch()
   const minicardData=useSelector(state=>{
     return state.cardData

   })
    const[loading,setloading]=useState(false)

    const fetchData=()=>
        {
                setloading(true)
            
                fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=viedo&key=AIzaSyCvf6qFINMVRScjjf6aoB0YaBDftEj_4OU`)
            .then(res=>res.json())
            .then(data=>{console.log(data.items)
                
                setloading(false)
                
               dispatch({type:"add",payload:data.items})

               //setMiniCard(data.items)
            

})

       
        }

    return(

        <View style={{ flex:1}}>
            <View style={{
                marginTop:Constant.statusBarHeight,
                padding:5,flexDirection:"row",
                justifyContent:"space-around",
                elevation:5,
                backgroundColor:colors.headerColor
                
            

            }}> 


            <Ionicons style={{color:textcolor}}name="md-arrow-back" size={25} 
            
            
            onPress={()=>navigation.goBack()}></Ionicons>
                <TextInput
                style={{width:"75%",backgroundColor:"#e6e6e6",paddingLeft:10}}
                value={value}
                onChangeText={(text)=>setvalue(text)}

                />

<Ionicons style={{color:textcolor}} name="md-send" size={25} onPress={()=>fetchData()}></Ionicons>
            </View>
                {/* <ScrollView>
                <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                            <MiniCard></MiniCard>
                </ScrollView> */}

             {loading ?  <ActivityIndicator style={{marginTop:20}} size="large" color="red" />:null}
               
               
                <FlatList
                data={minicardData}
                renderItem={({item})=>{

                    return <MiniCard
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    >


                    </MiniCard>
                }}
                
                ></FlatList>
           
        </View>
    )
}

export default SearchScreen