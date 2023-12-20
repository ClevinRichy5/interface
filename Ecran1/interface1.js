import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,Image, ScrollView,Button} from 'react-native';
import orange from '../assets/orange.png';
import menu from '../assets/logo.jpg';
import resin from '../assets/raisain.png';
import boutique from '../assets/boutique.png'
import boutique2 from '../assets/boutique2.png'
import home from '../assets/home.png';


const Interface1 = ({navigation}) => {
  return (
    <ScrollView vertical>
    <View style={{backgroundColor:'#ffffff'}}>
      <View>
        <View style={style.header}>
          {<Image source={menu} style={{width: 50, height: 50, borderRadius:22,marginLeft:320}}/>}
        </View>
        <View style={style.header}>
          {<Image source={home} style={{width: 50, height: 50, borderRadius:22,marginRight:320, marginTop:'-7em'}}/>}
        </View>
      </View>
      <View>
        <Text style={style.title}>Discover Seasonal</Text>
        <View>
          <Text style={style.title}>Fruits and Vegetables</Text>
        </View>
      </View>
      <ScrollView horizontal>
      <View style={style.list} >
        <Text style={style.select}>Orange</Text>
        <Text style={{fontSize:22,  fontFamily:'Verdana'}}>Grape</Text>
        <Text style={{fontSize:22,  fontFamily:'Verdana'}}>pineapple</Text>
        <Text style={{fontSize:22,  fontFamily:'Verdana'}}>straven</Text>
      </View>
      </ScrollView>
      <ScrollView horizontal>
      <View style={style.cadres}>
        <View style={style.cadre}>
          { <Image source={orange} style={{width:150, height:120}}/> }
          <Text style={{ color: '#bb8b89', fontSize:20,fontWeight:'bold',  fontFamily:'Verdana'}}>Orange     <Text style={{fontSize:20,color:'#a6814a',fontWeight:'bold'}}>$10</Text></Text>
          <View style={style.button}>
          <Text style={{ color: '#fff',  fontFamily:'Verdana',alignContent:'center', justifyContent:'center', display:'flex'}}>ADD</Text>
          </View>
        </View>
        <View style={style.cadre2I}>
        <Image source={resin} style={{width:80,height:100}}/>
        <Text style={{  fontFamily:'Verdana', color: '#bb8b89', fontSize:20,fontWeight:'bold'}}>Grape     <Text style={{fontSize:20,color:'#a6814a',fontWeight:'bold'}}>$10</Text></Text>
        <View style={style.button2}>
        <Text style={{ color: '#fff',  fontFamily:'Verdana',alignContent:'center', justifyContent:'center', display:'flex'}}>ADD</Text>
        </View>
      </View>
      </View>
      </ScrollView>
      <ScrollView horizontal>

     
      <View>
      <View>
        <Text style={{fontFamily:'Verdana', fontSize:20}}>Nearby Shop</Text>
      </View>
      <View style={style.div1}>
      <View style={style.div}>
      <View>
        {<Image source={boutique2} style={{width:50, height:50,marginRight:200}} /> }
       <View style={style.footer}>
        <View>
          <Text style={{marginLeft:100, marginTop:'-4em'}}>Xender Shop</Text>
          <View>
            <Text style={{marginLeft:100}}>20396 Toltrica Street</Text>
          </View>
          <View>
            <Text style={{marginLeft:100}}>9A.M  7P.M</Text>
          </View>
        </View>
       </View>
      </View>
      </View>
      </View>
      <View style={style.div3}>
      <View style={style.div}>
      <View>
        { <Image source={boutique} style={{width:50, height:50,marginRight:200}} />}
       <View style={style.footer}>
        <View>
          <Text style={{marginLeft:100, marginTop:'-4em'}}>Xender Shop</Text>
          <View>
            <Text style={{marginLeft:100}}>20396 Toltrica Street</Text>
          </View>
          <View>
            <Text style={{marginLeft:100}}>9A.M  7P.M</Text>
          </View>
     
        </View>
       </View>
      </View>
      </View>
      </View>
      </View>
      </ScrollView>
  </View>
  </ScrollView>
  )
}
const style=StyleSheet.create({
 title:{
  fontSize:20,
  fontFamily:'Verdana'
 },
 list:{
  display:'flex',
 flexDirection:'row',
  justifyContent:'space-between',
  paddingTop:20,
 paddingBottom:20,
  marginBottom:20,
  gap:20,
  padding:5,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight:'-1em'


 },
 select:{
  backgroundColor: '#fddbdc',
  padding:5,
  borderRadius: 20,
  fontSize: 18 ,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bb8b89',
  fontFamily:'Verdana'
 },
 fruit:{
  fontSize: 22
 },
 container:{
  flex: 1,
  padding: 15,
  fontFamily: 'adventure'
 },
 header:{
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 30
 },
 cadres:{
  display:'flex',
  flexDirection:'row',
  columnGap:20,
  marginBottom:30,
 },
 cadre:{
  width: 200,
  height: 250,
  backgroundColor: '#fce9c8',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
 },
 button:{
  width: 100,
  backgroundColor: '#f49e09',
  padding: 5,
  borderRadius: 9999,
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent:'center',
  alignContent:'center',
 },
 cadre2:{
  display:'flex',
  flexDirection:'row',
 

 },
 cadre2I:{
  width: 200,
  height: 250,
  backgroundColor: '#d9defe',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
 },
 button2:{
  width: 100,
  backgroundColor: '#3244aa',
  padding: 5,
  borderRadius: 9999,
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent:'center',
  alignContent:'center',
 },
 div:{
  borderColor:  '#fce9c8',
  width:290,
  height:90,
  justifyContent:'center',
  alignContent:'center',
  padding:5,
  borderRadius:15,
  borderWidth:1,
  columnGap:10,
  display:'flex',
  flexDirection:'row'

 },
 div1:{
  display:'flex',
  flexDirection:'row',
  gap:20,
  marginTop:30
 },
  footer:{
    flexDirection:'column',
    marginRight:'15',
   fontSize:3,
   padding:10
 },
 div3:{
    marginLeft:'20em',
    marginTop:'-5.7em',
 }
});

export default Interface1;
