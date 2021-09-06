
import React,{Component} from 'react';
import AgeVal from './App/components/ageVal/ageValidator';

import {StyleSheet,
   TouchableOpacity,
    Text,
     View,
      Image,
      TextInput} from 'react-native';


const provincias =[
  {
    id:1,
    name: 'Arequipa',
  },{
    id:2,
    name: 'Puno',
  },{
    id:3,
    name: 'Cuzco',
  },
]




export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      textResult: '',
      count: 0,
    }
  }

changeTextInput = text => {
  console.log(text);
  this.setState({textValue: text});
};
onPress = () =>{
  this.setState({
    count: this.state.count + 1,
  })
};
onPressAGE = () =>{
  if((this.state.textValue)>=18){
    this.setState({
      textResult: 'Es mayor de edad',
    })
  }else{
    this.setState({
      textResult: 'Es menor de edad',
    })
  }
};

  render(){
    return(
      <View style={styles.container}>


        <View style={styles.text}>
          <Text >Ingrese su edad</Text>
          </View>

        <TextInput style={{height:40,borderColor:'gray',backgroundColor:'lightgray',borderWidth:1}} 
        onChangeText={text => this.changeTextInput(text)} 
        value={this.state.textValue}/>
       <AgeVal
       onPressAGE={this.onPressAGE}/>

       <View style={styles.text}>
       <Text >{this.state.textResult}</Text>
       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize:40,
    justifyContent: 'center',
    alignItems:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  text:{
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
  },
  button:{
    top: 10,
    alignItems:'center',
    backgroundColor:'#bb3535',
    padding:10,
  },
  countContainer :{
    alignItems:'center',
    padding:10,
  },
  countText:{
    color:'#FF00FF',
  }
});