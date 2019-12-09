import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, InputAccessoryView, KeyboardAvoidingView, ScrollView } from 'react-native';
// import FloatingLabel from '../../components/FloatingLabel'
import { Form, Item, Input, Label } from 'native-base';

const { height } = Dimensions.get('window')

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: ''
    }
  }

  handlePhoneNumber = (value) => this.setState({ phoneNumber: value });
  handlePassword = (value) => this.setState({ password: value });

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoStyle}
            source={require('../../assets/images/ParkMe-Logo.png')}
          />
        </View>
        {/* <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}> */}
        <View style={styles.formContainer} >
          <Form >
            <Item floatingLabel style={styles.formItem}>
              <Label style={{ color: '#a5a5a5' }}>Phone number</Label>
              <Input
                value={this.state.phoneNumber}
                onChangeText={this.handlePhoneNumber}
                keyboardType='numeric'
                autoCompleteType={"off"}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={{ color: '#000000', }}
              />
            </Item>
            <Item floatingLabel style={styles.formItem}>
              <Label style={{ color: '#a5a5a5' }} >Password</Label>
              <Input
                value={this.state.password}
                onChangeText={this.handlePassword}
                textContentType={"password"}
                autoCompleteType={"off"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry
                // inputAccessoryViewID='loginBtn'
                style={{ color: '#000000', }}
              />
            </Item>
          </Form>
          <Text style={styles.forgotText}>
            Forgot password?
          </Text>
        </View>
        {/* </ScrollView> */}

        {/* <InputAccessoryView nativeID='loginBtn'>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} activeOpacity={0.7}
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#0db665',
              borderRadius: 8,
            }}
          >
            <Text style={{
              color: '#ffffff',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </InputAccessoryView> */}

        <View style={styles.btnContainer} >
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Home')} activeOpacity={0.7}
          >
            <Text style={styles.loginBtnText}>
              Log In
            </Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>
            or <Text style={{ color: '#0db665', }} onPress={() => this.props.navigation.navigate('Phone')}>Sign up</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    paddingTop: 20,
    height: 128,
    width: 128
  },
  formContainer: {
    justifyContent: 'center',
    height: height / 3,
    paddingHorizontal: 25
  },
  formItem: {
    marginLeft: 0,
    paddingVertical: 2,
    borderBottomColor: '#a5a5a5',
  },
  forgotText: {
    textAlign: 'right',
    fontSize: 15,
    color: '#a5a5a5',
    marginTop: 15
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 25
  },
  loginBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0db665',
    borderRadius: 8,
  },
  loginBtnText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  signUpText: {
    color: '#a5a5a5',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 17,
  }
});