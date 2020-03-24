import React from "react";
import {Platform,StyleSheet,View,Image,Text,StatusBar} from "react-native";
import PlaceHolder from "../components/Placeholder";
import {Thumbnail,Container,Header,Left,Body,Right,Button,H1,H2,H3} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import { human } from 'react-native-typography'

export default class User extends React.Component{
  render(){
    return(
      <Container>
      <StatusBar hidden={true} />
      <Header>
      </Header>
      <UserInfo/>
      <View style={style.line}>
      </View>
      <UserStar/>
      <View style={style.line}>
      </View>

      <View style={{flexDirection:"row"}}>
      <Text style={human.regular15}>組建隊伍:</Text>
      <Text style={{fontSize:18,marginRight:14}} >3次</Text>
      <Text style={human.regular15} >加入隊伍:</Text>
      <Text style={{fontSize:18}} >5次</Text>
      </View>

      <View style={style.line}>
      </View>
      <Text style={human.regular15} >技能:</Text>   
      <UserSkill/>
      </Container>
    )
  }
}

class UserInfo extends React.Component{
  render(){
    return(
      <View style={{alignItems:"center"}}>
      <Thumbnail large source={require("../assets/User-Icon(Main)/User-Icon1.jpg")}/>
      <Text style={{fontSize:20}}>lamkwa</Text>
      <Text style={{fontSize:16}} >香港 (男)</Text>
      </View> 
    )
  }
}

class RoundText extends React.Component{
  render(){
    return (
      <Button rounded info style={style.roundButton}> 
      <Text style={human.regular12} >{this.props.skill}</Text>
      </Button>
    )
  }
}

class UserSkill extends React.Component{
  render(){
    return(
      <View style={{flexDirection:"column"}}>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}> 
      <RoundText skill="雲端運算"/>
      <RoundText skill="人工智能"/>
      <RoundText skill="手機程式"/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}> 
      <RoundText skill="網頁制作"/>
      <RoundText skill="市場營銷"/>
      <RoundText skill="財務管理"/>
      </View>
      </View>
    )
  }
}

class UserStar extends React.Component{
  render(){
    return(
      <View style={{flexDirection:"row"}} >
      <Text style={human.regular15} >評分:</Text>
      <AntDesign name="star" size={30}/>
      <AntDesign name="star" size={30}/>
      <AntDesign name="star" size={30}/>
      <AntDesign name="star" size={30}/>
      <AntDesign name="staro" size={30}/>
      </View>
    )
  }
}


const style=StyleSheet.create({
  line:{
    height:0.5,
    backgroundColor:'rgba(200,200,200,0.2)',
    marginTop:10,
  },
  roundButton:{
    alignContents:"center", 
    margin:15,
    width:100,
  }, 
})  