import React from "react";
import {Platform, StyleSheet,View,Image,Text,ScrollView,Navigator} from "react-native"; 
import {Container,Header,Button} from "native-base"
import {AntDesign,MaterialCommunityIcons} from "@expo/vector-icons"
import AddPage from "./Add"
import CampaignPage from "./campaignComponent" 
import {
 createStackNavigator,
} from 'react-navigation';

const CampaignStack = createStackNavigator({
  Page1: { screen: CampaignPage},     
  Page2: { screen: AddPage},
   },
  {
    initialRouteName: 'Page1',
  }, {
    headerMode: 'none',
}
 );    

export default CampaignStack;   
