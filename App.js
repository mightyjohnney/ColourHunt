import * as React from 'react';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import Navigator from './app/screens/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './app/screens/Welcome';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'black',
  },
};

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
          <StatusBar/>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="navigate" component={Navigator} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>      
    </PaperProvider>

  );
}