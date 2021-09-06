
import React,{Component} from 'react';
import Message from './App/components/message/Message';
import Body from './App/components/body/Body';

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

  render(){
    return(
      <View style={styles.container}>

        <Message/>

        <View style={styles.text}>
          <Text >Ingrese su edad</Text>
          </View>

        <TextInput style={{height:40,borderColor:'gray',backgroundColor:'lightgray',borderWidth:1}} 
        onChangeText={text => this.changeTextInput(text)} 
        value={this.state.textValue}/>
       <Body textBody={'Texto en Body'} onBodyPress={this.onPress}/>
       
       {provincias.map( item => (
         <View>
           <Text>{item.name}</Text>
         </View>
       ) )}
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