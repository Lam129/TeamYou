import React from "react";
import {Platform, StyleSheet,View,Image,Text,ScrollView,StatusBar,TouchableOpacity,Linking,SegmentedControlIOS} from "react-native";
import PlaceHolder from "../components/Placeholder";
import {Card,CardItem,Button,Left,Right,Thumbnail,Body,Container,Header,Item,Input,Icon,} from "native-base";
import {FontAwesome} from "@expo/vector-icons";
import SearchHead from "../components/SearchHead"; 
import { TagSelect } from 'react-native-tag-select';
import CountDown from 'react-native-countdown-component'; 
import AwesomeButton from "react-native-really-awesome-button";
import {connect} from "react-redux"
import { SegmentedControls } from 'react-native-radio-buttons'



class Post extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selected:0
    }
  }
  render(){
    const contents=this.props.content
    return(
      <Container>
      <StatusBar hidden={true} />
      <SearchHead/>
      <SegmentedControls
  options={["全部","地區","院校"]}
  tint="#3F51B5"
  selectedTint="black"
  backTint="white"
/>


      <ScrollView>

      {contents.map(item=>(<CardBox detail={item} />))}

      
      </ScrollView>
      </Container>
    )
  }
}


const mapStateToProps=function(state){
  return{content:state.content} 
}

export default connect(
  mapStateToProps,
)(Post)


class CardBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      buttonColor:"white",  
      buttonStatement:"加入隊伍"
    }
  }
  render(){
    const item=this.props.detail;
    const ImageUrls=[
    require("../assets/CampaignPhoto(Campaign)/dcr_2330069 Basic Law.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo001.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo002.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo003.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo004.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo005.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo006.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo007.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo008.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo009.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo011.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo012.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo013.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo014.jpg"),
    require("../assets/CampaignPhoto(Campaign)/expo015.jpg"),
    ];
    const IconUrls=[
      require("../assets/User-Icon(Main)/User-Icon1.jpg"),
      require("../assets/User-Icon(Main)/User-Icon2.jpg"),
      require("../assets/User-Icon(Main)/User-Icon3.jpg"), 
    ];
    var path=ImageUrls[item.number] 
    if(isNaN(item.number)){
     path={uri:item.number} 
    }
    const data=item.teammateRequirement
    return(
      <Card style={{flex:0}}>
      <CardItem>
      <Left> 
      <Thumbnail source={IconUrls[item.numberIcon]}/>
      <Body>
      <Text>{item.userName}</Text>
      </Body>
      </Left>
      </CardItem>
      <CardItem>
      <TouchableOpacity onPress={()=> Linking.openURL(item.campaignLink)}> 
      <Image source={path} style={{height:150,width:330,flex:1}} />
      </TouchableOpacity>
      </CardItem>
      <CardItem>
      <Body>
      <Text style={{marginBottom:10}} >{item.campaignName}</Text>
      <Text style={{marginBottom:10}} >截止報名日期: {item.campaignDeadLine}</Text>
      <TagSelect
      data={data}
      />
      <Text >{item.comment}</Text> 
      </Body> 
      </CardItem>
      <CardItem style={{flexDirction:"row",justifyContent:"space-between"}}>
      <Button style={{backgroundColor:this.state.buttonColor}} onPress={()=>this.setState({
        buttonColor:"#cccccc",
        buttonStatement:"已經申請"
      })} >
      <FontAwesome name="group"/>
      <Text>{this.state.buttonStatement}</Text>
      </Button>
      <Text>11 小時前</Text> 
      </CardItem>
      </Card>
    )
  }
}



