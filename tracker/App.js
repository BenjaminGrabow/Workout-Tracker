import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { start, getById } from './store/actions';
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

export default connect(mapStateToProps, { start, getById })(App);

// Logout 
// logout = () => {
//   localStorage.clear();
//  };