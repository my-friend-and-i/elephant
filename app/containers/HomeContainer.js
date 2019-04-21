
import React from 'react';
import { Image, View, Text,  StyleSheet } from 'react-native';
import TopTabBar from './TopContainer';

export default class Home extends React.Component {
  static navigationOptions = {
      tabBarLabel: '购票观影',
      tabBarIcon: () =>
      {
          return (
              <Image source={require('../../images/home.png')}/>
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <TopTabBar/>
              <Text>购票观影</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
  }
});