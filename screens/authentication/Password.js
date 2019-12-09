import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

const { height } = Dimensions.get('window')

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
    }
  }

  handlePassword = (value) => this.setState({ password: value });
  handleConfirmPassword = (value) => this.setState({ confirmPassword: value });

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={{ height: height / 2, }}>
          <View style={{ height: 80, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#000000' }}>
              STEP 3 <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#a5a5a5' }}>of 3</Text>
            </Text>
          </View >

          <View style={{ height: 80, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#000000', textAlign: 'center' }}>Enter your password</Text>
          </View>

          <View style={styles.formContainer} >
            <Form >
              <Item floatingLabel style={styles.formItem}>
                <Label style={{ color: '#a5a5a5' }}>Password</Label>
                <Input
                  value={this.state.password}
                  onChangeText={this.handlePassword}
                  keyboardType='numeric'
                  autoCompleteType={"off"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  style={{ color: '#000', }}
                />
              </Item>
              <Item floatingLabel style={styles.formItem}>
                <Label style={{ color: '#a5a5a5' }}>Confirm</Label>
                <Input
                  value={this.state.confirmPassword}
                  onChangeText={this.handleConfirmPassword}
                  keyboardType='numeric'
                  autoCompleteType={"off"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  style={{ color: '#000', }}
                />
              </Item>
            </Form>
          </View>
        </View>

        <View style={styles.btnContainer} >
          <TouchableOpacity
            style={styles.finishBtn}
            onPress={() => this.props.navigation.navigate('Home')} activeOpacity={0.7}
          >
            <Text style={styles.finishBtnText}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  formContainer: {
    // justifyContent: 'center',
    // height: height / 3,
    paddingHorizontal: 25
  },
  formItem: {
    marginLeft: 0,
    paddingVertical: 2,
    borderBottomColor: '#a5a5a5',
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 25
  },
  finishBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0db665',
    borderRadius: 8,
  },
  finishBtnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});