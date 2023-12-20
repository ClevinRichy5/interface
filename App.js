import React from "react";
//import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Image, View } from "react-native";

import Interface1 from "./Ecran1/interface1";
import interface2 from "./Ecran1/interface2"; 
import interface3 from "./Ecran1/interface3";
import interface4 from "./Ecran1/interface4";
import interface5 from "./Ecran1/interface5";
import interface6 from "./Ecran1/interface6";
import fruit from './assets/carotte.png'
const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function App(){

  return(

       <NavigationContainer>
             <tab.Navigator initialRouteName="Home"screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused ? 'home' : 'ios-home-outline'; 
            } else if (route.name === '.') {
              iconName = focused ? 'like' : 'heart-outline';
          }else if (route.name === '..') {
            iconName = focused ? 'shop' : 'basket-outline';
        }else if (route.name === '...') {
          iconName = focused ? 'info' : 'document-text-outline';
      }else if (route.name === '....') {
        iconName = focused ? 'notif' : 'notifications-outline';
    }
    else if (route.name === '.....') {
      iconName = focused ? 'star' : 'star-outline';
  }
     return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(58, 146, 55)',
        inactiveTintColor: 'gray', 
      }}>
                <tab.Screen name="Home" component={Interface1} options={{/*tabBarStyle: { display: "none" }, headerShown: false,*/title: ' ',headerRight: () => (
                        <Image
        
                          style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                      ),}}/>
                <tab.Screen name = "." component={interface2} options={{tabBarStyle: { display: "none" },}} />
                <tab.Screen name = ".." component={interface3}  />
                <tab.Screen name = "..." component={interface4} options={{tabBarStyle: { display: "none" }, title:'',headerLeft: () => (
                  <Ionicons name="chevron-back" size={24} color="black" style={{marginLeft:10}} />
                      ),headerRight: () => (
                       <View style={{display:'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}> 
                        <Ionicons name="share-outline" size={24} color="black" />
                         <Ionicons name="md-information-circle-outline" size={24} color="black" style={{margin:10}}/>
                       </View>
                      ),}} />
                <tab.Screen name = "...." component={interface5} options={{tabBarStyle: { display: "none" },}} />
                <tab.Screen name = "....." component={interface6} options={{tabBarStyle: { display: "none" },}} />
             </tab.Navigator>
    </NavigationContainer>
  );
}