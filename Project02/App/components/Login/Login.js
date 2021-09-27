
import React,{Component} from 'react';

import {StyleSheet,
   TouchableOpacity,
    Text,
     View,
      Image,
      TextInput,
        Button} from 'react-native';

class Render extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      textValueTwo: '',
      count: 0,
      errOne:'',
      Pass:''
    }
  }

changeTextInput = text => {
  console.log(text);
  this.setState({textValue: text,errOne: ""});
};
changeTextInputTwo = text => {
  console.log(text);
  this.setState({textValueTwo: text,errOne: ""});
};

verification = (user,pass)=>{
  if (user =="admin" && pass == "123"){
    this.props.navigation.navigate('List')
  }else{
    this.setState({errOne: "Algo fue mal"});
  }
}

  render(){
    return(
      <View > 
        <Image style={styles.imagenConEscalado} source={require('./img/Atari.png')} />

          <View style={{alignItems:'center',marginTop:50}}>
          <Text style={{color:'white'}}>Ussername</Text>
          </View>
        <TextInput style={{height:40,borderColor:'gray',backgroundColor:'lightgray',borderWidth:1,width:450,marginVertical:15,alignSelf:'center'}} 
        onChangeText={text => this.changeTextInput(text)} 
        value={this.state.textValue}/>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'white'}} >Password</Text>
          </View>
        <TextInput style={{height:40,borderColor:'gray',backgroundColor:'lightgray',borderWidth:1,marginVertical:15,width:450,alignSelf:'center'}} 
        secureTextEntry={true}
        onChangeText={text => this.changeTextInputTwo(text)} 
        value={this.state.textValueTwo}/>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'red'}} >{this.state.errOne}</Text>
          </View>
        <Button title="Login"
            onPress={()=>this.verification(this.state.textValue,this.state.textValueTwo)}/>
        <TouchableOpacity 
        style={{top:10,alignItems:'center',backgroundColor:'cyan',padding:10,marginHorizontal:30}}
        onPress={()=>this.setState({Pass: "admin,123"})}>
          <Text style={{color:'white'}}>Ver Credenciales</Text>
        </TouchableOpacity>
        <Text style={{color:'cyan',top:10,alignSelf:'center',padding:10,marginHorizontal:30}}>{this.state.Pass}</Text>
      </View>
    );
  }
}
export default function Login({ navigation }) {
    return (
        <View style={{backgroundColor:'black'}}>
            <Render navigation={navigation}/>
        </View>
        
    );
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
  },
  imagenConEscalado:{
    alignSelf:'center',
    width:450,
    margin:5
},
});