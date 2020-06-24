import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import{useNavigation,useTheme} from  '@react-navigation/native'

const Card=(props)=>{
 const navigation=useNavigation()
 const {colors}=useTheme()
 const textcolor=colors. iconColor


    return(

        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})
        }}
        >
        <View style={{marginBottom:10}}
       > 

<Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}

        style={{width:"100%",height:200
        }}
        />



       
      
               <View style={{flexDirection:"row",margin:5}}>
                    <MaterialIcons name="account-circle" size={33} color="#212121" />
                        <View style={{marginLeft:6}}>
                        <Text style={{fontSize:16,width:Dimensions.get("screen").width-50,color:textcolor}}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                 {props.title}</Text>
    <Text style={{color:textcolor}}>{props.channel}</Text>
                        </View>
                </View>

     </View>
     </TouchableOpacity>
    )
}

export default Card