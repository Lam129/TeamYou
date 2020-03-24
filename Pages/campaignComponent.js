import React from "react";
import {Platform, StyleSheet,View,Image,Text,ScrollView,Navigator,DeviceEventEmitter,TouchableOpacity,Linking} from "react-native";
import PlaceHolder from "../components/Placeholder" 
import {Container,Header,Button} from "native-base"
import SearchHead from "../components/SearchHead"
import {AntDesign,MaterialCommunityIcons} from "@expo/vector-icons"
import { SegmentedControls } from 'react-native-radio-buttons'

export default class Add extends React.Component{
  render(){
    return(  
      <Container>
      <SearchHead/>
      <SegmentedControls
  options={["全部","地區","院校"]}
  tint="#3F51B5"
  selectedTint="black"
  backTint="white"
/>
      <ScrollView>
      <CampaignPost navigation={this.props.navigation} />
      </ScrollView>
      </Container>
    )
  }   
} 

class CampaignPost extends React.Component{
  render(){
    return( 
     <View> 
     <View style={style.view}>
     <CampaignImage name="2018-19年有問有答《基本法》問答比賽 (香港) " image={0} navigation={this.props.navigation} 
     campaignDeadLine="12/3/2019" link={0} 
     />
     <CampaignImage name="第九屆全國大學生電子商務創業挑戰賽（杭州）" image={1} navigation={this.props.navigation} 
     campaignDeadLine="2/2/2019" link={1}
     />
     <CampaignImage name="第十屆中國大學生服務外包創新創業大賽" image={2} navigation={this.props.navigation} 
     campaignDeadLine="2/5/2019" link={2}
     />
     </View> 
     <View style={style.view}> 
     <CampaignImage name="第三屆全國互聯網金融與新金融案例大賽" image={3} navigation={this.props.navigation}
     campaignDeadLine="7/3/2019" link={3}
      />
     <CampaignImage name="2018年全國大學生“互聯網+”創新大賽暨 第六屆“發現杯”全國大學生互聯網軟件設計大獎賽" image={4}  navigation={this.props.navigation} 
     campaignDeadLine="4/8/2019" link={4}
     />
     <CampaignImage name="2019國際大學金融科技創新大賽" image={5} navigation={this.props.navigation} 
     campaignDeadLine="9/7/2019" link={5}
     />
     </View>
     <View style={style.view}>
     <CampaignImage name="第二屆全國高校數據驅動創新研究大賽" image={6} navigation={this.props.navigation} 
     campaignDeadLine="7/7/2019" link={6}
     />
     <CampaignImage name="中交公規院杯”2019世界大學生橋樑設計大賽" image={7} navigation={this.props.navigation} 
     campaignDeadLine="6/11/2019" link={7} />
     <CampaignImage name="第二屆全國集成電路“創業之芯”大賽" image={8} navigation={this.props.navigation}
     campaignDeadLine="9/10/2019" link={8} />
     </View>
     <View style={style.view}>
     <CampaignImage name="10w+獎學金：大學生網絡安全能力大賽" image={9} navigation={this.props.navigation}
     campaignDeadLine="20/3/2019" link={9}
      />
     <CampaignImage name="2018年第三屆江西省公共安全創新創業大賽 (江西) " image={10} navigation={this.props.navigation} 
     campaignDeadLine="2/9/2019" link={10}
     />
     <CampaignImage name="首屆全國醫學院校學生醫學信息技術應用技能大賽" image={11} navigation={this.props.navigation}
     campaignDeadLine="2/12/2019" link={11}
      />
     </View>
     <View style={style.view}>
     <CampaignImage name="陝西省第十屆大學生環保創意大賽 (陝西) " image={12} navigation={this.props.navigation} 
     campaignDeadLine="12/3/2019" link={12}
     />
     <CampaignImage name="G3AWARD 數字印刷創意設計大賽" image={13} navigation={this.props.navigation} 
     campaignDeadLine="4/10/2019" link={13}
     />
     <CampaignImage name="2018·桂林“綠色智造”工業設計大賽 (桂林) " image={14} navigation={this.props.navigation} 
     campaignDeadLine="12/2/2019" link={14}
     />
     </View>
     </View>
    )
  }
}

class CampaignImage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pressed:false 
    }
  }
  render(){
  const imageNumber=[
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
  ]
  const linkNumber=[
     "https://www.cpce.gov.hk/basiclaw2018-19/",
     "http://www.3chuang.net/",
     "http://www.fwwb.org.cn/", 
     "http://www.sif.zju.edu.cn/",
     "null",
     "http://fintechcom.cuhk.edu.cn/",
     "http://opendata.pku.edu.cn/competition-2019.xhtml",
     "null",
     "http://inno.ciciec.com/",
     "https://security.alibaba.com/online/detail?id=33",
     "http://www.szgan.cn/",
     "http://www.milc.org.cn/",
     "null",
     "null", 
     "http://www.gllszz.cn/",    
  ]
  const buttonColor=["white","#ff6666"] 
  return(
    <View style={style.campaign}>
    <TouchableOpacity onPress={()=>Linking.canOpenURL(linkNumber[this.props.link]).then(supported=>{
      if(!supported){
        alert("比賽主辦方沒提供綱站連結")
      }
      else{
        Linking.openURL(linkNumber[this.props.link]) 
      } 
    })} >   
    <Image style={style.image} source={imageNumber[this.props.image]}/>
    </TouchableOpacity>
    <Text style={style.text}>{this.props.name}</Text> 
    <View style={style.buttonRow}>
    <Button style={{backgroundColor:"#33ccff"}}
    onPress={
      () =>{this.props.navigation.navigate('Page2',
      {campaignName:this.props.name,campaignDeadLine:this.props.campaignDeadLine,campaignPhoto:this.props.image,campaignLink:linkNumber[this.props.link]})    
      }
      }
    >    
    <AntDesign name="addusergroup" />
    <Text>創建隊伍</Text> 
    </Button>
    <Button style={{backgroundColor:buttonColor[this.state.pressed *1 ]}} onPress={()=>this.setState({pressed:!this.state.pressed *1})} > 
    <MaterialCommunityIcons name="account-heart"/> 
    <Text>關注</Text>
    </Button>
    </View>
    </View>
  )
}
}


const style=StyleSheet.create({
  view:{
    flexDirection:"row",
    paddingTop:4,
  },
  image:{
    height:120,
    width:110,
  },
  text:{
    width:110,
    height:60,
  },
  campaign:{
    height:250,
    flexDirection:"column",
    padding:5
  },
  buttonRow:{
    flexDirection:"row",
    justifyContent:"space-between",
  }
})