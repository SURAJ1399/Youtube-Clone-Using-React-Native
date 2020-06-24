import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { useNavigation, useTheme } from '@react-navigation/native';
import{useDispatch,useSelector} from 'react-redux'

export default function Header() {
const navigation=useNavigation()

const {colors}=useTheme()
const mycolor=colors.iconColor

const dispatch=useDispatch()
const {currenttheme}=useSelector(state=>{
  return state.mydarkmode
})


  return (
    <View style={{
        height:45,
        marginTop:30,
        flexDirection:"row",
        backgroundColor:colors.headerColor,
        elevation:4,
        justifyContent:"space-between"
    }}>
        <View  style={{flexDirection:"row",marginLeft:10,marginTop:4}}>

                <Entypo  name="youtube" size={32} color="red" />
                <Text style={{fontSize:18,marginTop:3, marginLeft:8,color:mycolor
                    
                    ,fontWeight:"bold"}}> YouTube

                </Text>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:"space-around",width:120,marginTop:10
    }}>
                <Ionicons name="md-videocam" size={23} color={mycolor} />

            
                <Ionicons name="md-search" size={24} color={mycolor} 
                onPress={()=>navigation.navigate("search")}
                
                />
                <MaterialIcons name="account-circle" size={23} color={mycolor}
                
                onPress={()=>dispatch({type:"change_theme",payload:!currenttheme})}/>
        </View>
    </View>
  
  );
}

