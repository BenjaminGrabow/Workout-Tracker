import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Exercises from './components/Exercises/Exercises';
import { StyleSheet, Text, View } from 'react-native';
import { Route } from 'react-router-native';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (

    <View>
    <Route exact path="/" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/libary" component={Exercises} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
});

const mapStateToProps = state => {
  return {
    exercise: state.exercise,
    byId: state.byId
  };
};

export default App;

// Logout 
// logout = () => {
//   localStorage.clear();
//  };