import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import image from '../assets/hearts_48px.png';
import image3 from '../assets/notif.png';
import image2 from '../assets/prev_80px.png';
import image4 from '../assets/orange.png';

const interface2 = ({ navigation }) => {
    return (
        <ScrollView vertical>
            <View style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <View style={{ backgroundColor: '#ffffcc' }}>
                    <View>
                        {<Image source={image2} style={{ height: 30, width: 50, marginTop: 47 }} />}
                    </View>
                    <View>
                        {<Image source={image3} style={{ height: 50, width: 50, left: '20em', marginTop: '-3em' }} />}
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', left: '6.5em' }}><Text style={{ fontSize: 20, marginTop: '-2em' }}>Product Detail😁</Text></View>
                    <View style={{ margin: 15 }}> <Text style={{ fontSize: 18 }}>Juicy Orange</Text></View>
                    <View style={{ margin: 5 }}><Text style={{ color: '#ff9999' }}> Sweet and juicy</Text></View>

                    <View style={{ margin: 15 }}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum velit dicta quibusdam ipsam modi nulla, assumenda explicabo officiis harum ipsum ullam quos maiores nobis, quis
                            minima ad, perspiciatis blanditiis!</p>
                    </View>
                    <View style={{ marginLeft: 100, backgroundColor: '#ff9999', height: 50, width: 250, borderRadius: 30 }}>
                        <Text style={{ fontSize: 20, color: '#fff', justifyContent: 'center', alignContent: 'center', marginLeft: 50 }}>Find Nearest Store</Text>
                    </View>
                    <View style={{ marginRight: '50em' }}>
                        {<Image source={image} style={{ height: 100, width: 100, marginTop: '-4.2em' }} />}
                    </View>
                </View>
                {<Image source={image4} style={{ width: 150, height: 100, left: 100,marginEnd: 100}} />}
                <ScrollView horizontal>
                    <View>
                  

                        <View style={{ backgroundColor: '#ffffff', height: ',height:700' }}>
                

                            <View>
                                <Text style={{ fontSize: 20 }}>Nutrition Fack</Text>
                            </View>
                            <View style={{ backgroundColor: '#a3a3ac', width: '50em', height: 10, borderRadius: 30, marginTop: 50 }}>
                                <View  style={{ backgroundColor: '#ff9999', width: '10em', height: 10,}} ></View>
                                <Text style={{ fontSize: 15, marginTop: '-2em' }}>Fiber <Text style={{ left: '1em', fontSize: 15 }}>3 g</Text><Text style={{ left: '44em', fontSize: 15 }}>7%</Text></Text>
                            </View>
                            <View style={{ marginTop: '4em', backgroundColor: '#a3a3ac', width: '50em', height: 10, borderRadius: 50 }}>
                            <View  style={{ backgroundColor: '#ff9999', width: '13em', height: 10,}} ></View>
                                <Text style={{ fontSize: 15, marginTop: '-2em' }}>Good <Text style={{ left: '1em', fontSize: 15 }}>Sugar</Text><Text style={{ left: '44em', fontSize: 15 }}></Text><Text style={{ left: '4em' }}>12g</Text><Text style={{ left: '41em' }}>5%</Text></Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>

    )
};

export default interface2;