
import React from 'react';
import { Image, View, Text,  StyleSheet } from 'react-native';

export default class Me extends React.Component {
  static navigationOptions = {
      tabBarLabel: '用户',
      tabBarIcon: () =>
      {
          return (
              <Image source={require('../../images/movie.png')} />
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>我的</Text>
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