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

  componentDidMount = () => {
    this.props.start();
  };

  render() {

    // if (this.props.byId) {
    //   return (
    //     <View>
    //        <Text>{this.props.byId[0].exercise}</Text>
    //        <Text>{this.props.byId[0].description}</Text>
    //       {/* <img src={this.props.byId[0].gif} alt="alt"/>  */}
    //     </View>
    //   )
    // }

    return (
    //   this.props.exercise ? (this.props.exercise.map((exer, index) => {
    //     return <View
    //     key={index}
    //      style={styles.container}>
    //       <Text
    //         onPress={() => this.props.getById(exer.id)}>{exer.exercise}</Text>
    //     </View>
    //   })) : null
    <View>
    <Route path="/" component={SignUp} />
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