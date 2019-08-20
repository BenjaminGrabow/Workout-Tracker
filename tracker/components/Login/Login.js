import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../store/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      }
  }

  login = () => {
this.props.signUp(
  this.state.username,
  this.state.password
);

this.setState({
  username: '',
  password: '',
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
        placeholder="Password"
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        underlineColorAndroid="transparent"
        // Making the Text Input Text Hidden.
        secureTextEntry={true}
      />
      <Button
            onPress={this.login}
            title="Login"
          />
    </View>
     );
  }
}
 
export default connect(null, { login })(Login);