
import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import CityList from '../pages/CityPage';

export default class TopTabBar extends React.Component {
    render() {
      return (
        <ScrollableTabView 
          initialPage={5}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarUnderlineStyle={{backgroundColor:'#fff'}}
        >
          <CityList tabLabel='全城' />
          <Text tabLabel='全部影片'>全部影片</Text>
          <Text tabLabel='全部时间'>全部时间</Text>
          <Text tabLabel='综合排序'>综合排序</Text>
        </ScrollableTabView>
      );
    }
  }
module.exports = TopTabBar;