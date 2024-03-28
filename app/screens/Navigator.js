import * as React from 'react';
import { Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import About from './About';
import { CreateNavigator, NewNavigator, PopularNavigator, FavoriteNavigator } from './CustomeNavigator';


const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
  




  return (
    <Tab.Navigator
      initialRouteName="New"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'transparent' }}
    >
      <Tab.Screen
        name="New"
        component={NewNavigator}
        options={{
          tabBarLabel: 'New',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="moon-new" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={PopularNavigator}
        options={{
          tabBarLabel: 'Polular',
          tabBarIcon: ({ color }) => (
            <Feather name="droplet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateNavigator}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="favorites"
        component={FavoriteNavigator}
        options={{
          tabBarLabel: 'favorites',
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;