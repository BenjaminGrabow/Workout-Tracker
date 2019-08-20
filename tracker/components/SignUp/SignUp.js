import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: ''
      }
  }

  signup = () => {
this.props.signUp(
  this.state.username,
  this.state.email,
  this.state.password
);

this.setState({
  username: '',
  email: '',
  password: '',
  passwordCheck: ''
});
  };
 
  render() { 
    return ( 
      <View style={{padding: 10}}>
      <TextInput
         style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
        placeholder="Username"
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
       <TextInput
         style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
        placeholder="Email"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
       <TextInput
    style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
        placeholder="Password"
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        underlineColorAndroid="transparent"
        // Making the Text Input Text Hidden.
        secureTextEntry={true}
      />
      <TextInput
         style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
        placeholder="Password Check"
        onChangeText={(passwordCheck) => this.setState({passwordCheck})}
        value={this.state.passwordCheck}
        underlineColorAndroid="transparent"
        // Making the Text Input Text Hidden.
        secureTextEntry={true}
      />
      <Button
            onPress={this.signup}
            title="Sign Up"
          />
    </View>
     );
  }
}
 
export default connect(null, { signUp })(SignUp);