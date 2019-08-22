import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { start, getById } from '../../store/actions';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  componentDidMount = () => {
    this.props.start();
  };

  render() { 
     this.props.byId ? (
        <View>
           <Text>{this.props.byId[0].exercise}</Text>
           <Text>{this.props.byId[0].description}</Text>
          {/* <img src={this.props.byId[0].gif} alt="alt"/>  */}
        </View>
      ) : null
    
    return ( 
         this.props.exercise ? (this.props.exercise.map((exer, index) => {
        return <View
        key={index}>
          <Text
            onPress={() => this.props.getById(exer.id)}>{exer.exercise}</Text>
        </View>
      })) : null
     );
  }
}
 
const mapStateToProps = state => {
  return {
    exercise: state.exercise,
    byId: state.byId
  };
};

export default connect(mapStateToProps, { start, getById })(Exercises);