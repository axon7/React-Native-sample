import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'Jane Doe'},
    {name: 'Brad Traversy'},
    {name: 'John Smith'},
    {name: 'Steve Jackkson'}
]

export default class Component4 extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        userDataSource: ds.cloneWithRows(users),
    };
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
        <View style={style.row}>
            <Text style={style.rowText}>{user.name}</Text>
        </View>
        );
    }

 render(){
   return(
    <ListView
    dataSource={this.state.userDataSource}
    renderRow={this.renderRow.bind(this)}/>
   );
 }
}


const style = StyleSheet.create({
    row: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 3
        

    },
    rowText: {
        color: 'pink',
        flex: 1
    }
})