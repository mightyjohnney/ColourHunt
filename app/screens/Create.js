import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { Button, Dialog, Portal } from 'react-native-paper';
import { TagSelect } from 'react-native-tag-select';
import { ScrollView } from 'react-native';
import moment from "moment"; 
import axios from 'axios';

const Create = ({navigation}) => {


  const [color1, setColor1] = useState('#a5a2a2');
  const [color2, setColor2] = useState('#c2c2c2');
  const [color3, setColor3] = useState('#9c9c9c');
  const [color4, setColor4] = useState('#61594e');
  const [showButton, setShowButton]=useState(true);
  const [visible, setVisible] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);

  let ls=[]


  const hideDialog = () => setVisible(false);


  const [color1display, setColor1dispaly]=useState(false);
  const [color2display, setColor2dispaly]=useState(false);
  const [color3display, setColor3dispaly]=useState(false);
  const [color4display, setColor4dispaly]=useState(false);
  const [selectedOption, setSelectedOption]=useState([]);


  const display1=()=>{
    setColor1dispaly(!color1display);
    setColor2dispaly(false);
    setColor3dispaly(false);
    setColor4dispaly(false);
  }

  const data = [
    { id: 1, label: 'mild', value: 'mild' },
    { id: 2, label: 'night', value: 'night' },
    { id: 3, label: 'nature', value: 'nature' },
    { id: 4, label: 'earth', value: 'earth' },
    { id: 5, label: 'light', value: 'light' },
    { id: 6, label: 'summer', value: 'summer' },
    { id: 7, label: 'food', value: 'food' },
    { id: 8, label: 'warm', value: 'warm' },
    { id: 9, label: 'spring', value: 'spring' },
    { id: 10, label: 'winter', value: 'winter' },
    { id: 11, label: 'wedding', value: 'wedding' },
    { id: 12, label: 'halloween', value: 'halloween' },
    { id: 13, label: 'happy', value: 'happy' },
    
    
  ];

  const display2=()=>{
    setColor1dispaly(false);
    setColor2dispaly(!color2display);
    setColor3dispaly(false);
    setColor4dispaly(false);

  }

  const display3=()=>{
    setColor1dispaly(false);
    setColor2dispaly(false);
    setColor3dispaly(!color3display);
    setColor4dispaly(false);

  }

  const display4=()=>{
    setColor1dispaly(false);
    setColor2dispaly(false);
    setColor3dispaly(false);
    setColor4dispaly(!color4display);

  }

  useEffect(()=>{

    const showButtonVisible=()=>{
      if(color1!=="#a5a2a2" && color2!=="#c2c2c2" && color3!=="#9c9c9c" && color4!=="#61594e"){
        setShowButton(false);
      }

    }
    showButtonVisible();

  })


  const addData=async()=>{

    if (ls.length==0){
      setVisibleTag(true)
      
    }


    try {

      const create = await axios.post("https://colorhunt2.onrender.com/color/add",{
        "color1":color1,
        "color2":color2,
        "color3":color3,
        "color4":color4,
        "tags":ls,
        "date":moment().format()

      });

      navigation.navigate('ColorPallet', {
        itemId: `${create.data._id}`,
        otherParam: 'anything you want here',
      })
      setColor1('#a5a2a2');
      setColor2('#c2c2c2');
      setColor3('#9c9c9c');
      setColor4('#61594e');
      setShowButton(true);

      
    } catch (error) {
      console.log(error);
    }

  }




  

  return (
    <>
    <ScrollView>


    <Portal>
      <Dialog visible={visibleTag} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Please Add Tags</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">You can choose upto 5 tags, Please make sure to add relatable tags</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisibleTag(false)}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Tags Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">You can choose upto 5 tags, Please make sure to add relatable tags</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

    <View>
        <Text style={styles.heading}> Create Your Palettes</Text>
    </View>
      <View style={styles.cardview}>
        <TouchableOpacity onPress={display1}  style={{backgroundColor:color1?color1:'grey',...styles.card1}}/>
        <TouchableOpacity  onPress={display2} style={{backgroundColor:color2?color2:'grey',...styles.card2}}/>
        <TouchableOpacity onPress={display3}  style={{backgroundColor:color3?color3:'grey',...styles.card3}}/>
        <TouchableOpacity onPress={display4}  style={{backgroundColor:color4?color4:'grey',...styles.card4}}/>
        <Button
        disabled={showButton?true:false}
         style={styles.touchbutton} 
         onPress={addData}
         icon="navigation-variant">
          Submit
        </Button>
        <View style={styles.container}>
            <Text style={styles.labelText}>Add Tags:</Text>
            <TagSelect
              data={data}
              max={5}
              ref={(tag) => {
                this.tag = tag;
              }}
              onMaxError={() => {
                setVisible(true);
              }}
              
              onItemPress={(item) => {
                ls.push(item);
                }}
            />
          </View>
      </View>

      {/* color 1 */}

      <View style={{display:color1display?'flex':'none',...styles.sectionContainer}}>
        <ColorPicker
          color={color1}
          onColorChange={(color) => setColor1(color)}
          thumbSize={10}
          sliderSize={20}
          noSnap={false}
          row={false}
        />
      </View>

      {/* color 2 */}
      <View style={{display:color2display?'flex':'none',...styles.sectionContainer}}>
        <ColorPicker
          color={color2}
          onColorChange={(color2) => setColor2(color2)}
          thumbSize={10}
          sliderSize={20}
          noSnap={false}
          row={false}
        />
      </View>

      {/* color 3 */}
      <View style={{display:color3display?'flex':'none',...styles.sectionContainer}}>
        <ColorPicker
          color={color3}
          onColorChange={(color) => setColor3(color)}
          thumbSize={10}
          sliderSize={20}
          
          noSnap={false}
          row={false}
        />
      </View>

      {/* color 4 */}
      <View style={{display:color4display?'flex':'none',...styles.sectionContainer}}>
        <ColorPicker
          color={color4}
          onColorChange={(color) => setColor4(color)}
          thumbSize={10}
          sliderSize={20}
          noSnap={false}
          row={false}
        />
      </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    position:'absolute',
    width:400,
    marginTop: 0,
    bottom:10,
    paddingHorizontal: 50,
  },
  title:{
    textAlign:'center'

  },
  heading:{
    textAlign:'center', 
    marginTop:20, 
    fontSize:18
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
  touchbutton:{
    margin:20,
    width:150,
    backgroundColor:"#452d2d"
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 50,
    marginLeft: 15,
  },
  buttonContainer: {
    padding: 15,
  },
  buttonInner: {
    marginBottom: 15,
  },
  labelText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333'
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  }

});
export default Create;