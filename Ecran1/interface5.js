import React from "react";
import { StyleSheet, View ,Text, Image,TextInput, ScrollView} from "react-native";
import logo from '../assets/logo.jpg'
import choux from '../assets/choux2.jpg'
import laid from '../assets/lait.png'
import viande from  '../assets/viande.png'
import pomme from '../assets/pomme.png'
import menu from '../assets/trait.png'
import pois from '../assets/pois.jpg'
import panier from '../assets/panierFruits.jpg'
import coeur from '../assets/coeur.png'
import achat from '../assets/achat.png'

const interface5=({navigation})=>{
    return(
        <ScrollView vertical>
            <View>
                <Text style={{color:'#a8a8a8', fontSize:10}}>
                    Your Location
                </Text>
            </View>
            <View>
                <Text style={{fontSize:20}}>3892 Olen Thomas Drive, Ny</Text>
            </View>
            <View>
                {<Image source={logo} style={{height:50,width:50, marginLeft:'20em', marginTop:'-3em', borderRadius:30}}/>}
                <View>
                    <View style={{marginTop:'2em', marginLeft:'1em',backgroundColor:'#ffffff', borderRadius:30, width:250, height:30}}>
                    <TextInput placeholder="🔎 Search foods graceries 🎙️" style={{color:'#eaeaea'}}  />
                    </View>
                </View>
                <View>
                {<Image source={menu} style={{width:30, height:30, left:'19em', marginTop:'-2em', backgroundColor:'#1ca56f', borderRadius:50}}/>}
                </View>
            </View>
            <View style={{marginTop:'1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'1em'}}>Categorie</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center',alignContent:'center', columnGap:30}}>
                {<Image source={choux}style={{height:50, width:50, borderRadius:30, left:5}}/>}
                {<Image source={laid}style={{height:50, width:50, borderRadius:30, left:5}}/>}
                {<Image source={viande}style={{height:50, width:50, borderRadius:30, left:5}}/>}
                {<Image source={pomme}style={{height:50, width:50, borderRadius:30, left:5}}/>}
                {<Image source={pois}style={{height:50, width:50, borderRadius:30, left:5}}/>}
            </View>
            <View style={{marginTop:'1em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'1em'}}>Deals</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={{marginTop:'2em', marginLeft:'2em', backgroundColor:'#dff4eb', height:100, width:'20em', borderRadius:30}}>
                <Text style={{fontWeight:'bold', fontSize:20, marginTop:'1em'}}>50% OFF</Text>
                <Text style={{fontWeight:'bold', fontSize:20}}>on Grocery combo packs</Text>
                <View style={{backgroundColor:'#fff', width:50, borderRadius:30, marginLeft:20}}>
                <Text style={{fontWeight:'bold', fontSize:10, color:'#000000'}}>Shop now</Text>
                </View>
                {<Image source={panier} style={{height:70, width:70, marginLeft:'15em', marginTop:'-4.9em'}}/>}
            </View>
            <View style={{marginTop:'1em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'1em'}}>Popular Items</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'Romain', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={{marginTop:20, marginLeft:15, backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={pomme}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={{marginTop:'-8.7em', marginLeft:'10em', backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={viande}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={{marginTop:'-8.7em', marginLeft:'20em', backgroundColor:'#fff', width:120, height:140}}>
                {<Image source={pois}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:30}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
        </ScrollView>
    )
}
export default interface5;