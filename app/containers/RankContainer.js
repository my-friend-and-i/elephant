import React from 'react';
import { Image, View, Text,  StyleSheet } from 'react-native';

export default class Rank extends React.Component {
  static navigationOptions = {
      tabBarLabel: '排行榜',
      tabBarIcon: () =>
      {
          return (
              <Image source={require('../../images/rank.png')} />
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>排行榜</Text>
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