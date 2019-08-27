import React from 'react';
import { StyleSheet, Text, View, CheckBox, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchExercises, showCategory, closeExercise, paginate, getExercise, searchExercise } from '../../store/actions';
import { AntDesign } from 'react-native-vector-icons';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchForName: '',
    }
  }

  componentDidMount = () => {
    this.props.fetchExercises();

    setTimeout(() => this.props.showCategory('Chest'), 1000);// That we dont see all exercises at the start
  };

  handleChange = (e) => {

    this.setState({
      searchForName: e.target.value,
    });
  };

  searchForName = () => {
  this.props.searchExercise(this.state.searchForName);

  this.setState({
    searchForName: '',
  });
  };

  showCategory = e => {
    this.props.showCategory(e.target.textContent);
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
    exercises: state.exercises,
    singleExercise: state.singleExercise,
    pageNumbers: state.pageNumbers,
  };
};

export default connect(mapStateToProps, { fetchExercises, showCategory, closeExercise, paginate, getExercise, searchExercise })(Exercises);