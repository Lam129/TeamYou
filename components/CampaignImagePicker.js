import React from "react"
import {View,Image,Button} from "react-native";
import {ImagePicker} from "expo"

export default class CampaignImagePicker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      image:null
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
  let {image} =this.state 
  let path={uri:image}
  let number=this.props.campaignPhoto
  if(isNaN(number)){
    path={uri:image}
  }
  else{
    path=imageNumber[number]
  }
    return(
      <View>
      <Image
      source={path} style={{width:200,height:200,}}
      />
      <Button
      title="從圖庫中選擇"
      onPress={this._pickImage}
      />
      </View>
    )
  }
  _pickImage=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      allowEditing:true,
      aspect:[4,3],
    })
    if(!result.cancelled){
      this.setState({image:result.uri})
      this.props.uploadImage(result.uri)
    }
  }
}