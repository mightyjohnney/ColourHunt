import React from "react";
import { Text,ScrollView, StyleSheet, Image } from "react-native";

const About=()=>{
    return (
        <>
        <ScrollView style={style.container}>
            <Image  source={require('../assets/logos.png')} style={{width:200, height:200, alignSelf:'center'}} />
            <Text style={style.main_heading}>Color Picker</Text>
            <Text style={style.headings}>About</Text>
            <Text style={style.texts}>Color Picker is an open collection of beautiful color palettes, created by 
                Shreyas Mohite. Color Picker started as a personal small project 
                built to share trendy color combinations between a group of designer friends. 
                The collection scaled up and now being used daily as a handy resources by thousands of 
                people all over the world. 
                Color Picker was created with the goal of celebrating the beauty of colors, 
                and to serve as a go-to resource for color inspiration.</Text>
            
            <Text style={style.headings}>Who creates the color palettes?</Text>
            <Text style={style.texts}>You, the users, are the ones who create the palettes using 
            Color Picker’s palette creator. The collection is open, and everyone can create and submit 
            their own color combination. That’s how we keep Color Picker diverse, colorful, social and inspiring. 
            Each palette is a public property and not owned by a specific creator, nor by Color Picker.</Text>

            <Text style={style.headings}>Which palettes get featured?</Text>
            <Text style={style.texts}>Color Picker is open, but is also curated. 
            It means that all the palettes are hand-picked by Color Picker’s curators. 
            Each submission of a color palette is being reviewed to make sure it fits the collection’s goals. Each day, 
            the very best submission is being picked up and will be visible on the homepage in the day after.</Text>

            <Text style={style.headings}>Made by Shreyas Mohite</Text>
            <Text style={style.texts}>Color Picker was founded by Shreyas Mohite, 
            web developer from India who is passioned about colors. 
            Color Picker is created since 2021 with the goal of sharing that passion with the world, 
            and provide a handy resource for designers and artists.</Text>
        </ScrollView>
        </>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        textAlign:'center',
    },
    main_heading:{
        textAlign:'center',
        fontSize:24,
        marginBottom:50

    },
    headings:{
        fontSize:18, 
        textAlign:'center'
    },
    texts:{
        marginBottom:20,
        marginLeft:40,
        fontSize:13,
        marginRight:40
    }
})
export default About;