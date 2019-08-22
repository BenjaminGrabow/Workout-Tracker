import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { start, showExercise, closeExercise } from '../../store/actions';
import { AntDesign } from 'react-native-vector-icons';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  componentDidMount = () => {
    this.props.start();
  };

  render() { 
     if (this.props.singleExercise) {
      return (
        <View>
<AntDesign onPress={() => this.props.closeExercise()} name="closecircle" size={50} color="black" />
           <Text>{this.props.singleExercise[0].exercise}</Text>
           <Text>{this.props.singleExercise[0].description}</Text>
          {/* <img src={this.props.singleExercise[0].gif} alt="alt"/>  */}
        </View>
      )
    }
    return ( 
         this.props.exercise ? (this.props.exercise.map((exer, index) => {
        return <View
        key={index}>
          <Text
            onPress={() => this.props.showExercise(exer.id)}>{exer.exercise}</Text>
        </View>
      })) : null
     );
  }
}
 
const mapStateToProps = state => {
  return {
    exercise: state.exercise,
    singleExercise: state.singleExercise
  };
};

export default connect(mapStateToProps, { start, showExercise, closeExercise })(Exercises);