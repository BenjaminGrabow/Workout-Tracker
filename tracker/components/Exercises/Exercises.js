import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, CheckBox, Image, Button, TextInput } from 'react-native';
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

  componentDidMount() {
    this.props.fetchExercises();
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
    const muscles = ['Chest', 'Forearms', 'Quadriceps', "Middle Back", 
    'Lats', 'Lower Back', 'Neck', 'Hamstrings',
    'Calves', 'Triceps', 'Traps', 'Shoulders', 'Abdominals',
    'Glutes', 'Biceps', "Adductors", "Abductors"];

     if (this.props.singleExercise) {
       const singleExercise = this.props.singleExercise[0];
      return (
        <View>
<AntDesign onPress={() => this.props.closeExercise()} name="closecircle" size={50} color="black" />
           <Text>{singleExercise.exercise_name}</Text>
           <Text>{singleExercise.description}</Text>
           <Text>{singleExercise.difficulty}</Text>
           <Text>{singleExercise.type}</Text>
           <Text>{singleExercise.muscle}</Text>
           <Text>{singleExercise.equipment}</Text>


        </View>
      )
    }

    
    // SINGLE-EXERCISE VIEW
    
//           <img src={singleExercise.picture_one} alt="" />
//           <img src={singleExercise.picture_two} alt="" />
//           <video width="320" height="240" controls>
//   <source src={singleExercise.video} type="video/mp4" />
// Your browser does not support the video tag.

    return ( 
      <View className="exercise-library">
      <View className="categories">
        {muscles
        .map((category, index) =>
         <Button  key={index} onPress={this.showCategory} title={category} />)}
      </View>
      
      <TextInput
    style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
        placeholder="Search Exercise"
        onChangeText={(searchExercise) => this.handleChange(searchExercise)}
        value={this.state.searchForName}
        underlineColorAndroid="transparent"
        // Making the Text Input Text Hidden.
        secureTextEntry={true}
      />
<Button onPress={this.searchForName} title="Search"/>

      {this.props.exercises ? (this.props.exercises.map((exercise, index) => {
        return <View key={index}>
          <Text
            onPress={() => this.props.getExercise(exercise.id)}>{exercise.exercise_name}</Text>
          <Button title="Add" />
          {/* // add onClick for adding exercise to workout  */}
        </View>
      })) : null}

      {this.props.pageNumbers ? (this.props.pageNumbers.map((num, index) => {
        return <Button key={index}
          onPress={() => this.props.paginate(num)}
          title={num} />
      })) : null}
    </View>
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