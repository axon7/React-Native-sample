import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
export default class Component1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Kuba',
            message: this.props.message,
            showName: true 
        }
    }

    static defaultProps = {
        message: 'Hi There'
    }

 render(){
     let name = this.state.showName ? this.state.name: "No Name";
   return(
    <View>
      <Text>{this.state.message}</Text>
      <Text>{name}</Text>

    </View>
   );
 }
}