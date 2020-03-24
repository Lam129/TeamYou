import React from "react";
import {Platform, StyleSheet,View,Image,Text,TextInput,StatusBar,DeviceEventEmitter} from "react-native";
import PlaceHolder from "../components/Placeholder"
import {Container,Header,Content,Form,Label,Input,Item,Textarea,Left,Right,Button,Icon,Picker} from "native-base"
import {ImagePicker} from "expo";
import HeadBar from "../components/Head"; 
import CampaignImagePicker from "../components/CampaignImagePicker";
import {actionCreators} from "../redux/reducer"
import {connect} from "react-redux"
import {TagsInput} from "react-native-ui-lib" 
import { SegmentedControls } from 'react-native-radio-buttons'


class PostContent extends React.Component{   
  constructor(props){
    super(props);
    this.state={
      campaignName:" ",      
      campaignDeadLine:" ",
      campaignLink:" ",
      campaignPhoto:" ", 
      teammateRequirement:"",
      teamFeatures:"",
      comment:" ",
    }
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    if(params!=undefined){
      this.setState({ 
      campaignName:params.campaignName,
      campaignDeadLine:params.campaignDeadLine,
      campaignPhoto:params.campaignPhoto,
      campaignLink:params.campaignLink,
    })  
  } 
  else{
      this.setState({
        campaignName:" ",
        campaignDeadLine:" ",
        campaignPhoto:" ",
      })
  }
  }

  uploadImage(number){
    this.setState({
      campaignPhoto:number
    })
    alert("sucess")
  }

  
  onSubmitEditing=()=>{
    const {campaignName,campaignDeadLine,campaignPhoto,campaignLink,comment,teammateRequirement}=this.state
    const fillContent={campaignName:campaignName,userName:"lamkwa",campaignDeadLine:campaignDeadLine,number:campaignPhoto,numberIcon:0,campaignLink:campaignLink,comment:comment,teammateRequirement:teammateRequirement}  
    this.props.submitContent(fillContent)
    this.setState({
      campaignName:" ",
      campaignDeadLine:" ",
      campaignLink:" ",
      campaignPhoto:" ",
      comment:" ",
    }) 
  }

   

  render(){
    return(
      <Container> 
      <Header>
      <Left>
      </Left>
      <Right>
      <Button onPress={this.onSubmitEditing} > 
      <Text>提交</Text>
      </Button>
      </Right>
      </Header> 
      <Content> 
      <Form>
      <Item stackedLabel>
      <Label>比賽名稱</Label>
      <Input onChangeText={(text)=>this.setState({campaignName:text})} 
      value={this.state.campaignName}/>
      </Item>
      <Item stackedLabel>
      <Label>報名截止日期</Label>
      <Input onChangeText={(text)=>this.setState({campaignDeadLine:text})}
      value={this.state.campaignDeadLine}
      />
      </Item>
      <Item stackedLabel>
      <Label>比賽連結</Label>
      <Input
      onChangeText={(text)=>this.setState({campaignLink:text})}
      value={this.state.campaignLink}
      />
      </Item>
      <Item stackedLabel>
      <Label>比賽圖片</Label>
      <CampaignImagePicker uploadImage={this.uploadImage.bind(this)} campaignPhoto={this.state.campaignPhoto} />
      </Item>

      <Item stackedLabel>
      <Label>隊伍技能</Label>
      <TagsInput
      onChangeTags={(tags)=>this.setState({teammateRequirement:tags})} 
      tags={this.state.teammateRequirement}
      />
      </Item>

      <Item stackedLabel>
      <Label style={{marginBottom:10}} >隊伍限制</Label>
      <SegmentedControls
  options={["沒有限制","同一個城市","同一間院校"]}
/>
      </Item>

      <Item stackedLabel>
      <Label>想說的話</Label>
      <Input
      onChangeText={(text)=>this.setState({comment:text})}
      value={this.state.comment}
      />
      </Item>
      </Form>
      </Content>
      </Container>
    ) 
  }
}

const mapDispatchToProps = dispatch => ({
  submitContent: fillContent => dispatch(actionCreators.add(fillContent))
})

export default connect(
  null,
  mapDispatchToProps,
)(PostContent)

