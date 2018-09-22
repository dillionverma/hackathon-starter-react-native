import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import { 
  loginUser,
} from '../actions';

class Login extends Component {

  constructor (props) {
      super(props);
      this.state = {
          email: '',
          password: ''
      };
  }

  handleLogin = (e) => {
    this.props.loginUser({email: this.state.email, password: this.state.password})
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
            <Text>JWT: {this.props.jwtToken || "N/A"}</Text>

            <TextInput 
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={false} 
                autoFocus={true} 
                keyboardType='email-address'
                value={this.state.email} 
                onChangeText={(text) => this.setState({ email: text })} />
            <TextInput 
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false} 
                secureTextEntry={true} 
                value={this.state.password} 
                onChangeText={(text) => this.setState({ password: text })} />
            <View style={{margin: 7}}/>
            <Button onPress={(e) => this.handleLogin(e)} title="Login" />
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});

function mapStateToProps(state) {
  return {
    jwtToken:    state.user.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser:  (body)  => dispatch(loginUser(body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
