import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Animated, Dimensions } from 'react-native';

export default class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    }
    this.animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this.animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 0],
      }),
      fontSize: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 12],
      }),
      color: '#a5a5a5',
    }
    return (
      <View style={{ paddingVertical: 16, backgroundColor: '#fff' }} >
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{ fontSize: 15, color: '#000', padding: 2, borderBottomColor: '#a5a5a5', borderBottomWidth: 1 }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});