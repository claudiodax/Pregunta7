import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,TextInput,FlatList, Button} from 'react-native';



export default function Detalles({ route, navigation }) {
    const { item } = route.params;
    return (
        <View>
            <Text style={styles.title}>{item.title}</Text>
            <View   style={styles.container}>
                <Image source={{uri: item.img}} style={{height:200, width:300,alignSelf:'center'}}/>
            
            <Text>Marca: {item.informacion.Marca}</Text>
            <Text>Modelo: {item.informacion.Modelo}</Text>
            <Text>Generación: {item.informacion.Generación}</Text>
            <Text>Modificación: {item.informacion.Modificación}</Text>
            <Text>AñoProducción: {item.informacion.AñoProducción}</Text>
            <Text>Arquitectura de la unidad de potencia : {item.informacion.ArquitecturaPotencia}</Text>
            <Text>Tipo de carrocería: {item.informacion.Carrocería}</Text>
            <Text>Numero de plazas: {item.informacion.NumPlazas}</Text>
            <Text>Numero de puertas: {item.informacion.NumPuertas}</Text>
            </View>


            <Button
                title="Volver"
                onPress={() => navigation.navigate('List')}
            />
        </View>
        
    );
}


const styles = StyleSheet.create({
    item:{
        backgroundColor:'orange',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
    title:{
        color:'black',
        fontSize:32,
        alignSelf:'center',
    },
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
      container: {
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
      },
});