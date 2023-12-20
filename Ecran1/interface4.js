import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import panier from '../assets/plastic.jpg'
const interface4 = (navigation) => {
    return (
        <View>
            <View>
                <View style={{ backgroundColor: '#e6f1ed', height: '20em' }}>
                    {<Image source={panier} style={{ width: 200, height: 300, justifyContent: 'center', alignContent: 'center', marginTop: '0.0em', marginLeft: '6em' }} />}
                </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', height: '50em', borderRadius: 60 }}>
                <View style>
                    <Text style={{ fontSize: 30, fontFamily: 'Times New Roman', marginLeft: '2em', marginTop: 50, fontWeight: 'bold' }}>Order Groceries</Text>
                    <Text style={{ fontSize: 30, fontFamily: 'Times New Roman', marginLeft: '2em', fontWeight: 'bold' }}>and Get delivered</Text>
                    <Text style={{ fontSize: 30, fontFamily: 'Times New Roman', marginLeft: '2em', fontWeight: 'bold' }}>In few minutes</Text>
                </View>
                <View style={{ marginTop: '1em', borderRadius: 20, marginLeft: '5em', borderWidth: 2, borderColor: '#00ff99', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                                width: 100,
                                backgroundColor: '#',
                                padding: 5,
                                borderRadius: 9999,
                                fontSize: 15,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignContent: 'center',
                                color: '#30bb84',
                                textShadowColor: 'black',
                                fontWeight: 'bold'

                    }}>
                        Get Started
                        
                    </Text>
                </View>
            </View>

        </View>
    )
}
export default interface4;