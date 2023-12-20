import React  from "react";
import { StyleSheet, View, Image, ScrollView ,Text} from "react-native";  
import prev from '../assets/prev_80px.png';
import info from '../assets/info_16px.png';
import dow from '../assets/download.png'
import choux from '../assets/choux.png'
import carotte from '../assets/carotte.png'
const interface6 =(navigation)=>{

    return(
      <ScrollView>
            <View>
                <View>
                    {<Image source={prev} 
                    style={{height:30, width:30, left:3}}/>}
                </View>
                <View style={{ flexDirection:'row', display:'flex', marginLeft:'20em', gap:7, marginTop:'-2em'}}>
                    {<Image source={dow} style={{height:20, width:20}}/>}
                    {<Image source={info} style={{width:20,height:20 }}/>}
                </View>
                <View style={{height:200,width:300, marginTop:'5em', marginLeft:'2em', backgroundColor:'#d1e4de'}}>
                    {<Image source={choux} style={{height:100,width:100, marginTop:'4em', marginLeft:'5.5em'}}/>}
                </View>
            </View>
            <View style={{backgroundColor:'none', borderRadius:8, borderColor:'green', marginTop:15, marginLeft:30, borderWidth:2, width:100}}>
              <Text style={{color:'green', fontFamily:'Romain',fontWeight:'bold', left:10}}>Vegetables</Text>
            </View>
            <View>
                <Text style={{fontSize:15, fontWeight:'bold',left:33}}>Broccoli</Text>
                <Text style={{fontWeight:'bold', left:33, fontSize:10, color:'#a3a3ac'}}>approx 100 gm</Text>
            </View>
            <View style={{left:'22em', top:'-2em', display:'flex',flexDirection:'row'}}>
              <Text style={{right:'1em', color:'green', fontWeight:'bold', borderColor:'green', borderWidth:2, borderRadius:10 , width:20,height:20,justifyContent:'center', 
              alignContent:'center', display:'flex',}}>-</Text><Text style={{fontWeight:'bold',right:10}}>1</Text><Text style={{left:-5, color:'green', fontWeight:'bold', borderColor:'green', borderWidth:2, borderRadius:30, width:20,height:20,justifyContent:'center', alignContent:'center', display:'flex'}}>+</Text> 
            </View>
            <View style={{left:20}}>
            {<Image source={carotte} style={{height:30, width:30, backgroundColor:'#d1e4de'}}/>}
            <Text style={{left:'3em', top:'-2.5em', fontWeight:'bold'}}>Agrifarm Inc</Text>
            <Text style={{left:'4em', top:'-3em', fontWeight:'bold', color:'#a3a3ac', fontSize:10}}>F5RJ+FJF,Chairtakol</Text>
            </View>
            <View>
                <Text style={{left:10, fontWeight:'bold'}}>Description</Text>
            </View>
            <View style={{left:10, top:10}}>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Explicabo debitis consectetur exercitationem unde, 
                fugiat animi! Quasi ipsum praesentium eveniet, alias nisi ut
                 laboriosam ipsa non, deserunt quas beatae adipisci excepturi?<Text style={{ color:'green'}}>Read more</Text>
                </Text>
            </View>
            <View style={{ left:'10em',borderWidth:2, borderColor:'green', top:'5em', width:190, height:30}}>
                <Text style={{color:'green', top:'-8', left:10}}>Add to cart $1.50</Text>
            </View>
      </ScrollView>
     
    )
}
export default interface6;