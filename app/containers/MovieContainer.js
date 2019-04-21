
import React from 'react';
import { Image, View, Text,  StyleSheet } from 'react-native';

export default class Movie extends React.Component {
  static navigationOptions = {
      tabBarLabel: '影片库',

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
              <Text>影片库</Text>
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