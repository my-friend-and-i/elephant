import React from 'react';
import { Button, Image, View, Text,  StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27


class Find extends React.Component {
  static navigationOptions = {
      tabBarLabel: '发现',
      tabBarIcon: ({ focused }) =>
      {
          if (focused) {
              <Text>发现界面</Text>
          }
          return (
              <Text>界面</Text>
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>发现界面</Text>
          </View>
      );
  }
}
class Me extends React.Component {
  static navigationOptions = {
      tabBarLabel: '我的',

      tabBarIcon: ({ focused }) =>
      {
          if (focused) {
              <Text>我的界面</Text>
          }
          return (
              <Text>界面</Text>
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>我的界面</Text>
          </View>
      );
  }
}

class Tong extends React.Component {
  static navigationOptions = {
      tabBarLabel: '通讯录',
      tabBarIcon: ({ focused }) =>
      {
          if (focused) {
              <Text>通讯录界面</Text>
          }
          return (
              <Text>通讯录</Text>
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>通讯录界面</Text>
          </View>
      );
  }
}

class Chat extends React.Component {
  static navigationOptions = {
      tabBarLabel: '聊天',

      tabBarIcon: ({ focused }) =>
      {
          if (focused) {
              return (
                  <Text>聊天界面</Text>
              );
          }
          return (
                <Text>聊天</Text>
          );
      },
  };

  render() {
      return (
          <View style={styles.container}>
              <Text>聊天界面</Text>
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
  }
});

const MyApp = createBottomTabNavigator(
  {
      Chat: {
          screen: Chat,
      },
      Tong: {
          screen: Tong,
      },
      Find: {
          screen: Find,
      },
      Me: {
          screen: Me,
      },
  },
  {
      tabBarOptions: {
          activeTintColor: '#4BC1D2',
          inactiveTintColor: '#000',
          showIcon: true,
          showLabel: true,
          upperCaseLabel: false,
          pressColor: '#788493',
          pressOpacity: 0.8,
          style: {
              backgroundColor: '#fff',
              paddingBottom: 0,
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
          },
          labelStyle: {
              fontSize: 12,
              margin: 1
          },
          indicatorStyle: {height: 0},
      },
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: false,
      lazy: true,
      backBehavior: 'none',
});

const AppNav = createStackNavigator(
  {
    Home: { screen: MyApp },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNav);

// export default App;

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
