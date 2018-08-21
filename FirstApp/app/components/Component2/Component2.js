import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
export default class Component2 extends Component {
 render(){
   return(
    <View style={styles.myView}>
        <Text style={{color: "red"}}>Helloooo Kuba!</Text>
    </View>
   );
 }
}


const styles = StyleSheet.create({
    myView: {backgroundColor: "#000000"}
})