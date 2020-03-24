import React from "react";
import {Platform,StyleSheet,View,Image,Text,StatusBar,Linking} from "react-native";
import {Header,Container,Body,Icon,Button,Thumbnail,Content,Left,Right,SwipeRow} from "native-base";
import Display from 'react-native-display';

export default class notifications extends React.Component{
  render(){
    return(
    <Container>
    <StatusBar hidden={true} />
    <Header/> 
    <MessageList/>
    </Container>
    )
  }
}

class MessageContent extends React.Component{
  render(){
    const item=this.props.number;
    const who=this.props.user;
    const IconUrls=[
      require("../assets/User-Icon(Main)/User-Icon1.jpg"),
      require("../assets/User-Icon(Main)/User-Icon2.jpg"),
      require("../assets/User-Icon(Main)/User-Icon3.jpg"),
      require("../assets/User-Icon(Main)/User-Icon4.jpg"),
    ]; 
    return(
      <Body>
      <View style={{flexDirection:"row"}}>
      <Thumbnail small source={IconUrls[item]}/>  
      <Text style={style.textNearPhoto}>{this.props.user +"歡迎你加入隊伍"}</Text>  
      </View>
      </Body>
    )
  }
}

class CampaignNotificationContent extends React.Component{
  render(){
    const CampaignUrls=[
      require("../assets/CampaignPhoto(Campaign)/dcr_2330069 Basic Law.jpg")
    ]
    return(
      <Body>
      <View style={{flexDirection:"row"}}>
      <Thumbnail small source={CampaignUrls[0]}/>  
      <Text style={style.textNearPhoto}>你所關注的比賽(2018-19年有問有答《基本法 問答比賽)已有人創建隊伍</Text>  
      </View>
      </Body>
    )
  }
}

class CampaignNotification extends React.Component{
  constructor(props){
    super(props);
    this.state={
      enable:true,
    }
  }
  render(){
    return(
       <Display enable={this.state.enable}>
      <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button success>
        <Text>了解更多</Text>
        </Button>
      }
      body={
        <CampaignNotificationContent/>
      } 
      right={
        <Button danger onPress={()=>this.setState({enable:false})} >
        <Text>忽略</Text>
        </Button>
      }
      />
      </Display>
    )
  }
}


class Message extends React.Component{
  constructor(props){
    super(props);
    this.state={
      enable:true,
    }
  }

  render(){
    const numberT=this.props.numberT;
    const userT=this.props.userT;
    const yourUserName=" lamkwa "
    const yourAddress=" 香港 "
    const message="我是"+ yourUserName +"來自"+ yourAddress +"很高興能夠與你組隊"+"\n\n經Team友發送"
    return(
      <Display enable={this.state.enable}>
      <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button success onPress={()=>Linking.openURL('whatsapp://send?text='+message+'&phone=+852 64366938')}>
        <Text>聯絡</Text>
        </Button>
      }
      body={
        <MessageContent number={numberT} user={userT}/>
      } 
      right={
        <Button danger onPress={()=>this.setState({enable:false})} >
        <Text>忽略</Text>
        </Button>
      }
      />
      </Display>
    )
  }
}

class MessageList extends React.Component{
  render(){
    return(
      <Content>
      <Message numberT={2} userT={"Ryanscp"}/> 
      <Message numberT={1} userT={"MingFung123"}/>
      <Message numberT={3} userT={"lincolnCC"}/>
      <CampaignNotification/> 
      </Content>
    )
  }
}

const style=StyleSheet.create({
  textNearPhoto:{
    paddingLeft:12,
  }
})