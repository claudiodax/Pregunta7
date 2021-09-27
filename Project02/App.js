import * as React from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,TextInput, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OurFlatList from './App/components/ourFlatList/OurFlatList';
import Detalles from './App/components/Detalles/DetallesLIst';
import Login from './App/components/Login/Login';


const Stack = createNativeStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
            <Stack.Navigator>
              
                        <Stack.Screen          
                        name="Login"          
                        component={Login}          
                        options={{ title: 'Login' }}        
                        />  

                        <Stack.Screen          
                        name="List"          
                        component={OurFlatList}          
                        options={{ title: 'Lista' }}        
                        />

                        <Stack.Screen          
                        name="Detalles"          
                        component={Detalles}          
                        options={{ title: 'Detalles' }}        
                        />

                        

            </Stack.Navigator>    
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  imagen:{
    width:78,
    height:60,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8
},
  lista:{
    borderRadius:15,
  },
  contendorLista:{
    flex:1,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'flex-start',
    margin:15,
  },
  itemLista:{
    marginLeft:10,
    fontSize:15,
  },
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
    marginTop:10,
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