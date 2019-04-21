import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight,  Button, Image } from 'react-native';

export default class CityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [{ id: 1,  select: false },
            { id: 2,  select: false },
            { id: 3,  select: false },
            { id: 4,  select: false },
            { id: 5,  select: false },
            { id: 6,  select: false }],
        selectItem: [],
    }
  }

  _itemPress = (item) => {
    console.log(item);
  }

  _selectItemPress = (item) => {
    this.state.data[item.id - 1].select = !item.select
    this.setState({data: this.state.data})
    // this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.data}
          extraData={this.state}
          renderItem={({item}) => {
            return (
                <TouchableHighlight onPress={ _ => this._itemPress(item)}>
                    <View style={styles.standaloneRowFront}>
                            <TouchableHighlight onPress={_ => this._selectItemPress(item)}>
                                <View style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: item.select ? ("#ff081f") : ("#39a7fc")
                                }}>
                                    <Text>{item.id}</Text>
                                </View>
                            </TouchableHighlight>
                        <View style={{marginLeft: 20}}>
                            <Text>{item.select ? ("选中") : ("未选中")}</Text>
                        </View>
                    </View>
                </TouchableHighlight>)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    standaloneRowFront: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 70,
        marginBottom: 5
    },
});
