import React from "react";
import {Platform, StyleSheet,View,Image,Text} from "react-native";

export default class PlaceHolder extends React.Component{
  render(){
    return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text>{this.props.text}</Text>
    </View>
  }
}