import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Container, Header, Content, Tab, Tabs} from 'native-base';
import TabOneScreen from './TabOne';
import TabTwoScreen from './TabTwo';
import TabThreeScreen from './TabThree';
export default class TabContainerScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#2ed573'}} hasTabs />
        <Tabs>
          <Tab
            heading="Tab1"
            tabStyle={{backgroundColor: '#2ed573'}}
            activeTabStyle={{backgroundColor: '#7bed9f'}}
            textStyle={{backgroundColor: '#2ed573'}}
            activeTextStyle={{backgroundColor: '#7bed9f'}}>
            <TabOneScreen />
          </Tab>

          <Tab
            heading="Tab2"
            tabStyle={{backgroundColor: '#2ed573'}}
            activeTabStyle={{backgroundColor: '#7bed9f'}}
            textStyle={{backgroundColor: '#2ed573'}}
            activeTextStyle={{backgroundColor: '#7bed9f'}}>
            <TabTwoScreen />
          </Tab>

          <Tab
            heading="Tab3"
            tabStyle={{backgroundColor: '#2ed573'}}
            activeTabStyle={{backgroundColor: '#7bed9f'}}
            textStyle={{backgroundColor: '#2ed573'}}
            activeTextStyle={{backgroundColor: '#7bed9f'}}>
            <TabThreeScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
