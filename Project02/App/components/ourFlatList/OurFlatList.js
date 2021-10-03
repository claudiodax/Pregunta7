import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,
    View,Image,TextInput,FlatList, Button} from 'react-native';

const Carros=[
    {
      id:1,
      title: 'Carro rojo clasico',
      detalles:'',
      img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01-750x460.jpg',
      
      informacion:{
        Marca:	'Subaru',
        Modelo: 	'Outback',
        Generación: 	'Outback VI',
        Modificación : 	'Wilderness 2.4 (260 CV) AWD Lineartronic',
        AñoProducción: 	'Septiembre, 2021 años',
        ArquitecturaPotencia: 	'Motor de combustión interna',
        Carrocería:	'Ranchera',
        NumPlazas: 	5,
        NumPuertas: 	5 ,
        },
    },
    {
      id:2,
      title: 'Carro rojo deportivo',
      img: 'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
      informacion:{
        Marca:	'Subaru',
        Modelo: 	'Outback',
        Generación: 	'Outback VI',
        Modificación : 	'Wilderness 2.4 (260 CV) AWD Lineartronic',
        AñoProducción: 	'Septiembre, 2021 años',
        ArquitecturaPotencia: 	'Motor de combustión interna',
        Carrocería:	'Ranchera',
        NumPlazas: 	5,
        NumPuertas: 	5 ,
        },
    },
    {
      id:3,
      title: 'Carro rojo familiar',
      img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg',
      informacion:{
        Marca:	'Subaru',
        Modelo: 	'Outback',
        Generación: 	'Outback VI',
        Modificación : 	'Wilderness 2.4 (260 CV) AWD Lineartronic',
        AñoProducción: 	'Septiembre, 2021 años',
        ArquitecturaPotencia: 	'Motor de combustión interna',
        Carrocería:	'Ranchera',
        NumPlazas: 	5,
        NumPuertas: 	5 ,
        },
    },
    {
      id:4,
      title: 'Carro mistico',
      img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_b65480612b9249c0885a3ec88c5641e1.jpg',
      informacion:{
        Marca:	'Subaru',
        Modelo: 	'Outback',
        Generación: 	'Outback VI',
        Modificación : 	'Wilderness 2.4 (260 CV) AWD Lineartronic',
        AñoProducción: 	'Septiembre, 2021 años',
        ArquitecturaPotencia: 	'Motor de combustión interna',
        Carrocería:	'Ranchera',
        NumPlazas: 	5,
        NumPuertas: 	5 ,
        },
    },
];

export default function OurFlatList({ navigation }) {
    return (
        <View>
            <FlatList
                data={Carros}
                renderItem = { ({item}) => 
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Detalles',{item: item})} style={styles.contendorItem}>
                        <Image source={{uri: item.img}} style={styles.imagen}/>
                        <View style={styles.TextoCon}>
                        <Text style={styles.Texto}>{item.title}</Text>
                        <Text style={styles.SubTexto}>{item.informacion.Marca}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            }
                keyExtractor={item => item.id}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    imagenConte:{
        flex:1,        
    },
    imagen:{
        flex:1,
        width:100,
        height:100,
    },
    imagenConEscalado:{
        resizeMode:'contain',
        width:100,
        height:100,
        margin:5
    },
    contendorItem:{
        flexDirection:'row',
        backgroundColor: 'lightblue',
        marginVertical:3,
        flex:1,
        alignSelf:'center',
        width:'98%',
    },
    TextoCon:{
        flex:4,
        alignSelf:'center',
        fontSize:20,
    },
    Texto:{
        left:5,
        fontSize:20,
    },
    SubTexto:{
        left:5,
        fontSize:15,
    },
    container:{
    flex: 1,
    marginTop:20,
    },
});