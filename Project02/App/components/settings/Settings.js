import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,
    View,Image,TextInput,FlatList, Button} from 'react-native';

const Settings=[
    {
    id:1,
    title:"Cuenta",
    img:"http://cdn.onlinewebfonts.com/svg/img_335286.png",
    },
    {
    id:2,
    title:"Notificaciones",
    img:"https://cdn4.iconfinder.com/data/icons/web-pack/64/bell-512.png",
    },
    {
    id:3,
    title:"Apariencia",
    img:"https://image.flaticon.com/icons/png/512/65/65000.png",
    },
    {
    id:4,
    title:"Privacidad y Seguridad",
    img:"https://image.flaticon.com/icons/png/512/61/61457.png",
    },
    {
    id:5,
    title:"Soporte y Ayuda",
    img:"https://cdn0.iconfinder.com/data/icons/computer-hardware-13/128/Headphones-512.png",
    },
    {
    id:6,
    title:"Acerca de",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png",
    },
];
const arrow = {img:'https://cdn4.iconfinder.com/data/icons/user-interface-131/32/right_arrow-512.png'}
export default function Configuracion({ navigation }) {
    var TextValue = "Buscar";
    return (
        <View style={{width:'100%',height:'100%'}}>
            <TextInput style={{height:40,width:'80%',borderColor:'gray',backgroundColor:'lightgray',borderWidth:1,marginVertical:60,alignSelf:'center'}} />
            <FlatList
                data={Settings}
                renderItem = { ({item}) => 
                <View>
                    <TouchableOpacity onPress={() => alert(item.title)} style={styles.contendorItem}>
                    <Image source={{uri: item.img}} style={styles.imagen}/>
                    <Text style={styles.TextoCon}>{item.title}</Text>
                    <Image source={{uri: arrow.img}} style={styles.imagenright}/>
                    </TouchableOpacity>
                    <View style={{height:2,width:'80%',alignSelf:'center',backgroundColor:'lightgray'}}/>
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
        width:30,
        height:30,
    },
    imagenright:{
        position:'absolute',
        left:310,
        width:30,
        height:30,
        alignSelf:'flex-end',
    },
    imagenConEscalado:{
        resizeMode:'contain',
        width:100,
        height:100,
        margin:5
    },
    contendorItem:{
        flexDirection:'row',
        left:80,
        marginVertical:10,
    },
    TextoCon:{
        left:15,
        alignSelf:'center',
        fontSize:25,
    },
    container:{
    flex: 1,
    marginTop:20,
    },
});