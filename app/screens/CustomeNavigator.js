import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Create from "./Create";
import ColorPallet from "./ColorPallet";
import New from "./New";
import Popular from "./Popular";
import Favourite from "./Favourite";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const CreateNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="create">
          <Stack.Screen name="create" component={Create} options={{ headerShown: false }}/>
         <Stack.Screen name="ColorPallet" options={{headerTitleStyle: {color:'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor:'#79daed', 
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30},
        headerTintColor: '#446970',}}  component={ColorPallet} />
      </Stack.Navigator>
    );
  }

const NewNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="new">
        <Stack.Screen name="new" component={New} options={{ headerShown: false }}/>
      <Stack.Screen name="ColorPallet" options={{headerTitleStyle: {color:'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor:'#79daed', 
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30},
      headerTintColor: '#446970',}}  component={ColorPallet} />
    </Stack.Navigator>
  );
}

const PopularNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="populars">
        <Stack.Screen name="populars" component={Popular} options={{ headerShown: false }}/>
      <Stack.Screen name="ColorPallet" options={{headerTitleStyle: {color:'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor:'#79daed', 
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30},
      headerTintColor: '#446970',}}  component={ColorPallet} />
    </Stack.Navigator>
  );
}

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="populars">
        <Stack.Screen name="populars" component={Favourite} options={{ headerShown: false }}/>
      <Stack.Screen name="ColorPallet" options={{headerTitleStyle: {color:'white'},
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor:'#79daed', 
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30},
      headerTintColor: '#446970',}}  component={ColorPallet} />
    </Stack.Navigator>
  );
}
  
  
export { CreateNavigator, NewNavigator, PopularNavigator, FavoriteNavigator}; // Stack-Navigator for Screen 2 Tab