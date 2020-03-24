import React from "react";
import {Header,Left,Right,Body,Title,Text,Icon,Button} from "native-base";


export default class HeadBar extends React.Component{
  render(){
    return<Header>
      <Left>
      <Button>
      <Text>back</Text>
      </Button>
      </Left>
      <Right>
      <Button>
      <Text>submit</Text>
      </Button>
      </Right>
      </Header> 
  }
}