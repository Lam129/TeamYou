import React from "react";
import {Platform, StyleSheet,View,Image,Text} from "react-native";
import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import {Ionicons,FontAwesome,Foundation} from "@expo/vector-icons";
import Main from "./Pages/Main";
import Campaign from "./Pages/Campaign";
import Add from "./Pages/Add";
import Notification from "./Pages/Notification";
import User from "./Pages/User";
import {createStore} from "redux";
import {reducer} from "./redux/reducer";
import {Provider} from "react-redux"

const store=createStore(reducer)

export default class App extends React.Component{
  render(){
    return(
    <Provider store={store}>
    <AppC/>
    </Provider>
    )
  } 
}

const getTabBarIcon=(navigation,focused,tintColor)=>{
  const {routeName}=navigation.state;
  let IconCompoent;
  let iconName;
  if(routeName ==="隊伍"){
    IconCompoent=FontAwesome
    iconName="handshake-o";
  }
  else if(routeName ==="比賽"){
    IconCompoent=FontAwesome;
    iconName="bullhorn";
  }

  else if(routeName==="組隊"){
    IconCompoent=Ionicons;
    iconName=`ios-add-circle${focused?'':"-outline"}`;
  }

  else if(routeName==="通知"){
    IconCompoent=Ionicons;
    iconName=`ios-information-circle${focused?'':'-outline'}`;
  }

  else if(routeName==="我的"){
    IconCompoent=Foundation;
    iconName="torso-business";
  }

  return <IconCompoent name={iconName} size={25} color={tintColor}/>;
};

const MainNavigator=createBottomTabNavigator({
  隊伍:Main,
  比賽:Campaign,
  組隊:Add,
  通知:Notification,
  我的:User,
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,tintColor})=>
      getTabBarIcon(navigation,focused,tintColor),
    
  }),
  tabBarOptions:{
    activeTintColor:"tomato",
    inactiveTintColor:"grey"
  }
});




const AppC=createAppContainer(MainNavigator);

