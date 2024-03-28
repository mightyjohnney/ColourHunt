import React, {useRef, useEffect} from "react";
import { TouchableOpacity } from 'react-native';
import { Text } from "react-native";
import {Animated, Image, View} from 'react-native';

const Welcome=({navigation})=>{

    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);

    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    return (
        <>
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#21353b"
        }}>

        <Animated.View // Special animatable View
            style={{
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            <Image  source={require('../assets/logos.png')} style={{width:200, height:200, alignSelf:'center'}} />
            <View style={{marginBottom:20, marginTop:20}}>
                <Text style={{textAlign:'center',color:"#fff", fontSize:30, marginBottom:20, marginTop:20}}>ColorPicker</Text>
                <Text style={{color:"#fff", alignSelf:'center'}}>Collection of beautiful color palettes</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('navigate')} style={{borderRadius:30,alignSelf:'center', marginTop:50, width:300, height:40, backgroundColor:'#16f0a0'}}>
                <Text style={{alignSelf:"center",color:"#fff", padding:6}}>Continue</Text>
            </TouchableOpacity>
            </Animated.View>

        </View>
        </>
    )
}

export default Welcome;