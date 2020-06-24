import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';

import Constant from 'expo-constants'

import {NavigationContainer,DefaultTheme,DarkTheme, useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import{MaterialIcons} from '@expo/vector-icons'

import {Provider,useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'

import {reducer} from './src/reducers/reducer'

import {themereducer} from './src/reducers/themereducer'

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()

const rootReducer=combineReducers({

  cardData:reducer, //[]
  mydarkmode:themereducer
})
const store=createStore(rootReducer)

const RootHome=()=>{
const {colors}=useTheme()
return(

<Tabs.Navigator

screenOptions={({ route }) => ({
  tabBarIcon: ({color }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Explore') {
      iconName = 'explore'
    }
    else if (route.name === 'Subscribe') {
      iconName = 'subscriptions'
    }

    // You can return any component that you like here!
    return <MaterialIcons name={iconName} size={25} color={color} />;
  },
})}
tabBarOptions={{
  activeTintColor: colors.tabIcon,
  inactiveTintColor: 'gray',
}}>

  <Tabs.Screen name="Home"component={Home}/>
  <Tabs.Screen name="Explore"component={Explore}/>
  <Tabs.Screen name="Subscribe"component={Subscribe}/>
</Tabs.Navigator>

)

}

export default()=>{
return(
  <Provider store={store}>
  <Navigation></Navigation>

    </Provider>
)
  
}
export function Navigation() {

  let mycurrenttheme=useSelector(state=>{

    return state.mydarkmode
  })
  return (

  
 
          <NavigationContainer theme={mycurrenttheme?customDarkTheme:customDefaultheme}>
            
            
            <Stack.Navigator headerMode="none">

                    <Stack.Screen name="rootname" component={RootHome}/>
                    <Stack.Screen name="search" component={Search}/>

                    <Stack.Screen name="videoplayer" component={VideoPlayer}/>



            </Stack.Navigator>

          </NavigationContainer>

  );
}

