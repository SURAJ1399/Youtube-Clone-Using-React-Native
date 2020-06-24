import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import{useNavigation,useTheme} from  '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'; 

const MiniCard =(props)=>{

    const navigation=useNavigation()
    const {colors}=useTheme()
    const textcolor=colors. iconColor
   

    return(

        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})
        }}>
        <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
            <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}

            style={{width:"45%",height:100
            }}
            />
            <View
            style={{paddingLeft:7}}>
              
                <Text style={{
                    fontSize:16,width:Dimensions.get("screen").width/2,color:textcolor
                }}
                numberOfLines={3}
                ellipsizeMode="tail"
                
                >{props.title}</Text>
                
                <Text
                style={{
                    fontSize:15,color:textcolor
                }}>
                    {props.channel}
                </Text>
           
            </View>
        </View>
        </TouchableOpacity>
        
        )

}
export default MiniCard