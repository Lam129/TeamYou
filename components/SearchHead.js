import React from "react";
import {Header,Item,Input,Button} from "native-base"
import {Text} from "react-native";

export default class SearchHead extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchItem:""
    }
  } 
  render(){
    return(
      <Header searchBar rounded>
      <Item>
      <Input placeholder="搜尋"
      onChangeText={(text)=>this.setState({searchItem:text})}
      value={this.searchItem}  
      />
      </Item>
      <Button>
      <Text>Search</Text>
      </Button>
      </Header>
    )
  }
}