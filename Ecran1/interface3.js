import React from "react";  
import { StyleSheet,View ,Image,Text, Button, ScrollView} from "react-native";
import image1 from '../assets/prev_80px.png';
import image2 from '../assets/sac.png';
import orange from '../assets/orange.png';
import resin from '../assets/raisain.png';
import apple from '../assets/apple.png';
import cacawet from '../assets/cacawete.png';
import poubelle from '../assets/poubelle2.png';
const interface3 =({navigation})=>{
     return(
       <ScrollView vertical>
       <View>
       <View style={{backgroundColor:'#ffffff', height:'50em'}}>
           
           <View>
               {<Image source={image1} style={{height:50, width:50}}/>}
           </View>
           <View>
           {<Image source={image2} style={{height:50, width:50, left:'20em', marginTop:'-3.5em'}}/>}
           </View>
           <View style={{marginTop:20,fontSize:20}}>
               <Text>My</Text>
               <Text style={{marginTop:10, fontSize:20}}>Order</Text>
           </View>
           <View>
           <View>
               {<Image source={orange} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em', fontFamily:'Times New Roman', fontSize:19}}>1 x<Text style={{left:10, fontFamily:'Times New Roman'}}> Orange</Text><Text style={{display:'flex', marginLeft:31, fontFamily:'Times New Roman'}}>$10</Text></Text>
               {<Image source={poubelle} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
           </View>
           </View>
        
           <View>
           {<Image source={resin} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em' ,fontFamily:'Times New Roman',fontSize:19}}>1 x<Text style={{left:10, fontFamily:'Times New Roman',fontSize:19}}> Strawberry</Text><Text style={{display:'flex', marginLeft:31, fontFamily:'Times New Roman', fontSize:19}}>$12</Text></Text>
               {<Image source={poubelle} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
           </View>
           
           <View>
           {<Image source={apple} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em', fontFamily:'Times New Roman',fontSize:19}}>1 x<Text style={{left:10, fontFamily:'Times New Roman', fontSize:19}}> Green Apple</Text><Text style={{display:'flex', marginLeft:31, fontFamily:'Times New Roman',fontSize:19}}>$13</Text></Text>
               {<Image source={poubelle} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
           </View>
        
           <View>
           {<Image source={cacawet} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em', fontFamily:'Times New Roman', fontSize:19}}>1 x<Text style={{left:10,fontSize:19}}> Grape</Text><Text style={{display:'flex', marginLeft:31, fontSize:19}}>$12</Text></Text>
               {<Image source={poubelle} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
               <View>
               <View  style={{height:'100em', marginTop:'2em'}}>
                   <Text style={{ fontFamily:'Times New Roman'}}>Total Price<Text style={{marginLeft:'20em', fontFamily:'Times New Roman'}}>$50</Text></Text>
                   <View  style={{marginTop:'5em',width:100, height:30, marginLeft:'9em',backgroundColor:'#ff9999', borderRadius:60,}}>
                   <Button title="Payment"></Button>
                   </View>
                  
               </View>
               <View>
               </View>
                   
           </View>
           </View>  
   </View>

       </View>
       </ScrollView>
     )
}
export default interface3;
