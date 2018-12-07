import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
  };

  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', { name: 'Jane' })}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default Home;
