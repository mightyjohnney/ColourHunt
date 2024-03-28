import React, { useEffect, useState } from "react";
import {ActivityIndicator, StyleSheet, View,ScrollView, Text, TouchableOpacity} from 'react-native';
import axios from "axios";
import hexRgb from 'hex-rgb';
import { GetColorName } from 'hex-color-to-color-name';
import moment from "moment"; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ColorPallet=({ route, navigation })=>{
      /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  const [getData, setGetData]=useState([]);
  const [showSpinner, setShowSpinner]=useState(false);
  const [tags, setTags]=useState([]);
  const [likes, setLikes] = useState();
  const [collection, setCollection] = useState([]);
  const [favo,setfavo]=useState();

  
  useEffect(()=>{

    const getColorData=async()=>{

        try {
            setShowSpinner(true);
            let {data} = await axios.get(`https://colorhunt2.onrender.com/color/getcolor/${itemId}`);
            setTimeout(()=>{
                setGetData(data);
                setTags(data.tags);
                setLikes(data.likes);
            },1000)
            
            setShowSpinner(false);
            
        } catch (error) {
            console.log(error)
            
        }
       

    }

    const getFavoData = async () => {

        try {
          const jsonValue = await AsyncStorage.getItem('@favo');
    
          if(jsonValue===null){
            //return again data to local storage
            return [];
            }
            else{
            //else reaturn empty data
                return JSON.parse(jsonValue);
        }
        } catch(e) {
          // error reading value
          console.log(e);
        }
      }

      const setdatatolocal=async()=>{
        let cc=await getFavoData();
        setfavo(cc);
      }

      
    
    getColorData();
    setdatatolocal();


  },[])




    const storeData = async (value) => {
        try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@favo', jsonValue)
        } catch (e) {
        // saving error
        }
    }

    const unlikeColor=async()=>{

        try {
          await axios.put(`https://colorhunt2.onrender.com/color/unlike/${getData._id}`);
          let items=JSON.parse(await AsyncStorage.getItem("@favo"));
          items = items.filter((data, id)=>
            data._id!==getData._id
          )

          setfavo(data=>data.filter((val, id)=>{
            return val._id!==getData._id;
          }))
          storeData(items); //saving add in local storage
          setLikes(likes-1);
    
          
        } catch (error) {
          console.log(error);
        }
      }




const likeColor=async()=>{
    try {
      await axios.put(`https://colorhunt2.onrender.com/color/like/${getData._id}`);
      const getColor = await axios.get(`https://colorhunt2.onrender.com/color/getcolor/${getData._id}`);
      const adds=[...favo,getColor.data] //taking previous data of favo and adding new data of color
      setfavo(adds); //adding it to favos
      storeData(adds); //saving add in local storage
      setLikes(likes+1);

    } catch (error) {
      console.log(error);
    }
  }
  
  
    return (
        <>

                {showSpinner?(
                    <>
                        <View style={{...styles.spinnercontainer}}>
                            <ActivityIndicator size="small" color="#0000ff" />
                        </View>
                    </>
                ):(
                    <>
                    </>
                )}
        <ScrollView>
                

               

            {getData && !showSpinner?(
                <>
                    <View style={styles.cardview}>
                        <TouchableOpacity  style={{backgroundColor:getData.color1?getData.color1:'grey',...styles.card1}}/>
                        <TouchableOpacity  style={{backgroundColor:getData.color2?getData.color2:'grey',...styles.card2}}/>
                        <TouchableOpacity  style={{backgroundColor:getData.color3?getData.color3:'grey',...styles.card3}}/>
                        <TouchableOpacity  style={{backgroundColor:getData.color4?getData.color4:'grey',...styles.card4}}/>

                        <View style={{justifyContent:'space-evenly', flexDirection:"row"}}>
                            {favo?(
                                <>

                                    {favo.some(item => item._id === getData._id)?(
                                        <>

                                            <TouchableOpacity onPress={()=>unlikeColor()} style={{marginRight:30, marginTop:10}}>
                                                {/* cards-heart-outline */}
                                                <Icon name="cards-heart" size={20} color="#900" /> 
                                                <Text>{likes?likes:0} likes</Text>
                                            </TouchableOpacity>

                                        </>
                                    ):(
                                        <>

                                            <TouchableOpacity onPress={()=>likeColor()} style={{marginRight:30, marginTop:10}}>
                                                {/* cards-heart-outline */}
                                                <Icon name="cards-heart-outline" size={20} color="#900" /> 
                                                <Text>{likes?likes:0} likes</Text>
                                            </TouchableOpacity>
                                           
                                        </>
                                    )}

                                </>
                            ):(
                                <>
                                    <TouchableOpacity onPress={()=>likeColor()} style={{marginRight:30, marginTop:10}}>
                                        {/* cards-heart-outline */}
                                        <Icon name="cards-heart-outline" size={20} color="#900" /> 
                                        <Text>{likes?likes:0} likes</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            <Text style={{alignSelf:'flex-end', marginLeft:30, marginTop:10}}>{moment(getData.date).fromNow(true)} ago</Text>
                            
                        </View>
                        
                        <View style={{justifyContent:"space-evenly", margin: 10, flexDirection:"row"}}>
                            <View style={{padding:20}}>
                                <TouchableOpacity  style={{...styles.smallCircle,backgroundColor:getData.color1?getData.color1:'grey'}}/>
                                <Text style={styles.textName}>{getData.color1}</Text>
                                {getData.color1?(
                                    <>
                                    <Text style={styles.textName}>{GetColorName(getData.color1)}</Text>
                                    <Text style={styles.textName}>{hexRgb(getData.color1, {format: 'css'})}</Text>
                                    </>
                                ):(
                                    <></>
                                )}
                                
                            </View>

                            <View style={{padding:20}}>
                                <TouchableOpacity  style={{...styles.smallCircle,backgroundColor:getData.color2?getData.color2:'grey'}}/>

                                <Text style={styles.textName}>{getData.color2}</Text>
                                {getData.color2?(
                                    <>
                                    <Text style={styles.textName}>{GetColorName(getData.color2)}</Text>
                                    <Text style={styles.textName}>{hexRgb(getData.color2, {format: 'css'})}</Text>
                                    </>
                                ):(
                                    <></>
                                )}


                            </View>

                            <View style={{padding:20}}>
                            <TouchableOpacity  style={{...styles.smallCircle,backgroundColor:getData.color3?getData.color3:'grey'}}/>

                                <Text style={styles.textName} >{getData.color3}</Text>
                                {getData.color3?(
                                    <>
                                    <Text style={styles.textName}>{GetColorName(getData.color3)}</Text>
                                    <Text style={styles.textName}>{hexRgb(getData.color3, {format: 'css'})}</Text>
                                    </>
                                ):(
                                    <></>
                                )}
                                {/* <Text>{GetColorName(getData.color3)}</Text> */}

                            </View>

                            <View style={{padding:20}}>
                            <TouchableOpacity  style={{...styles.smallCircle,backgroundColor:getData.color4?getData.color4:'grey'}}/>

                                <Text style={styles.textName}>{getData.color4}</Text>
                                {getData.color4?(
                                    <>
                                    <Text style={styles.textName}>{GetColorName(getData.color4)}</Text>
                                    <Text style={styles.textName}>{hexRgb(getData.color4, {format: 'css'})}</Text>
                                    </>
                                ):(
                                    <></>
                                )}

                            
                            </View>
                            

                        </View>
                        <Text style={{fontSize:11, fontWeight:"bold"}}>Tags</Text>
                        <View style={{flexDirection:'row'}}>
                            {tags?(
                                <>
                                     {tags.map((data, idx)=>{
                                    return(
                                        <>
                                        <Text key={idx} style={{margin:10, fontSize:10}}>{data.value}</Text>

                                        </>
                                    )
                                })}
                                </>
                            ):(
                                <>
                                <Text>No Tags</Text>
                                </>
                            )}
                               

                                </View>
                    </View>


                </>
            ):(
               <>
               
               </>
            )}

        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
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
        flex:1,
        alignItems:'center',
        margin:10
      },
      card1:{
        width:300,
        height:90,
        borderColor:'black',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
      card2:{
        width:300,
        height:80,
      },
      card3:{
        width:300,
        height:70,
      },
      card4:{
        width:300,
        height:60,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
      smallCircle:{
        width:30,
        height:30,
        alignSelf:'center',
        padding:10,
        borderRadius:50
      },
      textName:{
        margin:10,
        fontSize:10,
        alignSelf:'center'
      },
      tagsName:{
       fontSize:10
      }
  });
export default ColorPallet;