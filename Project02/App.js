
import React,{Component} from 'react';

import {StyleSheet,
   TouchableOpacity,
    Text,
     View,
      Image,
      TextInput} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    }
  }

changeTextInput = text => {
  this.setState({textValue: text});
};
onPress = () =>{
  this.setState({
    count: this.state.count + 1,
  })
};

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>ATARI GAMES</Text>
          </View>

          <Image source={require('./img/Atari.png')} style={{width:460}}></Image>
        <TextInput style={{height:40,borderColor:'lightgray',backgroundColor:'lightgray',borderWidth:1}} 
        onChangeText={text => this.changeTextInput(text)} 
        value={this.state.textValue}/>
        <TextInput style={{height:40,borderColor:'gray',backgroundColor:'gray',borderWidth:1,marginVertical:5}} 
        onChangeText={text => this.changeTextInput(text)} 
        value={this.state.textValue}/>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Login</Text>
        </TouchableOpacity>
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
    backgroundColor: 'black',
  },
  text:{
    alignItems:'center',
    padding: 10,
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