// import React from 'react';
// import { Button, Image, View, Text,  StyleSheet } from 'react-native';
// import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import Home from "./containers/HomeContainer";
// import Me from "./containers/MeContainer";
// import Rank from "./containers/RankContainer";
// import Movie from "./containers/MovieContainer";

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 100,
//   }
// });

// const MyApp = createBottomTabNavigator(
//   {
//       Home: {
//           screen: Home,
//       },
//       Movie: {
//           screen: Movie,
//       },
//       Rank: {
//           screen: Rank,
//       },
//       User: {
//           screen: Me,
//       },
//   },
//   {
//     tabBarOptions: {
//         activeTintColor: '#4BC1D2',
//         inactiveTintColor: '#000',
//         showIcon: true,
//         showLabel: true,
//         upperCaseLabel: false,
//         pressColor: '#788493',
//         pressOpacity: 0.8,
//         style: {
//             height: 70,
//             backgroundColor: '#fff',
//             paddingBottom: 0,
//             borderTopWidth: 0.5,
//             borderTopColor: '#ccc',
//         },
//         labelStyle: {
//             fontSize: 12,
//             margin: 1
//         },
//         indicatorStyle: {height: 0},
//     },
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     animationEnabled: false,
//     lazy: true,
//     backBehavior: 'none',
// });

// const AppNav = createStackNavigator(
//   {
//     Home: { screen: MyApp },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(AppNav);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackAndroid,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import RouteConfig from './RouteConfig'
import StackNavigatorConfig from './StackNavigatorConfig'

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig)

const AppContainer = createAppContainer(Navigator);

export default class App extends PureComponent {
  render() {
    return <AppContainer />;
  }
}