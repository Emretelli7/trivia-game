import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../components/common/Header';
import QuestionPage from '../components/QuestionPage';

export default class QuestionScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 0.10}}>
          <Header />
        </View>
        <View style={{flex: 0.90}}>
          <QuestionPage />
        </View>
      </View>
    );
  }
}
