import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

const { height } = Dimensions.get('window')

export default class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    }
  }

  handlePhoneNumber = (value) => this.setState({ phoneNumber: value });

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={{ height: height / 2, }}>
          <View style={{ height: 80, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#000000' }}>
              STEP 1 <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#a5a5a5' }}>of 3</Text>
            </Text>
          </View >

          <View style={{ height: 80, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#000000', textAlign: 'center' }}>Enter your phone number</Text>
          </View>

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
                  style={{ color: '#000', }}
                />
              </Item>
            </Form>
          </View>
        </View>

        <View style={styles.btnContainer} >
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => this.props.navigation.navigate('Verification')} activeOpacity={0.7}
          >
            <Text style={styles.nextBtnText}>
              Next
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
  nextBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0db665',
    borderRadius: 8,
  },
  nextBtnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});