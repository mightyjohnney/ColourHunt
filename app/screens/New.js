import React, { useState, useEffect, useCallback } from "react";
import { ActivityIndicator,View, TouchableOpacity, ScrollView, StyleSheet,RefreshControl } from "react-native";
import axios from "axios";

const New=({navigation})=>{

    const [newData, setNewData]=useState([]);
    const [showSpinner, setShowSpinner]=useState(false);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(()=>{

        const getNewData=async()=>{
            setShowSpinner(true);
            const {data} = await axios.get("https://colorhunt2.onrender.com/color/getallrecentcolors/100/0");
            setTimeout(()=>{
                setNewData(data[0].results);

            },1000)
            
            setShowSpinner(false);
        }

        getNewData();

    },[])

    const navigateToScreen=(id)=>{

        navigation.navigate('ColorPallet', {
            itemId: `${id}`,
            otherParam: 'anything you want here',
        })

    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        const getNewData=async()=>{
            setShowSpinner(true);
            const {data} = await axios.get("https://colorhunt2.onrender.com/color/getallrecentcolors/100/0");
            setTimeout(()=>{
                setNewData(data[0].results);

            },1000)
            
            setShowSpinner(false);
        }
  
        setTimeout(() => {
          setRefreshing(false);
          getNewData();
        }, 2000);
      }, []);





    return (
        <>
          {showSpinner?(
                    <>
                        <View style={{...styles.spinnercontainer, ...styles.horizontal}}>
                            <ActivityIndicator size="small" color="#0000ff" />
                        </View>
                    </>
                ):(
                    <>
                    </>
                )}
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", alignContent: "center",}}
         refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        
            {newData.map((post, index) => (
                <>
                   <View key={index} style={styles.cardview}>
                        <TouchableOpacity onPress={()=> navigateToScreen(post._id)}  style={{backgroundColor:post.color1,...styles.card1}}/>
                        <TouchableOpacity onPress={()=> navigateToScreen(post._id)}   style={{backgroundColor:post.color2,...styles.card2}}/>
                        <TouchableOpacity onPress={()=> navigateToScreen(post._id)}   style={{backgroundColor:post.color3,...styles.card3}}/>
                        <TouchableOpacity onPress={()=> navigateToScreen(post._id)}   style={{backgroundColor:post.color4,...styles.card4}}/>
                    </View>
                   
                </>
            ))}
        </ScrollView>

        </>
    )
}

const styles=StyleSheet.create({
    spinnercontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      },
      horizontal: {
        flexDirection: 'row',
        alignSelf:'center',
        padding: 10,
      },
    cardview:{
        alignItems:'center',
        margin:10
      },
      card1:{
        width:185,
        height:70,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
      card2:{
        width:185,
        height:60,
      },
      card3:{
        width:185,
        height:50,
      },
      card4:{
        width:185,
        height:40,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
})

export default New;