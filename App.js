import 'react-native-gesture-handler';
import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboradingScreen from './src/screens/OnboradingScreen';
import HomeScreen from './src/screens/Homescreen';
import LoginScreen  from './src/screens/LoginScreen';
import SplashScreen  from './src/screens/SplashScreen';
import { AsyncStorage } from 'react-native';
import { StackActions } from 'react-navigation';

const Stack=createStackNavigator();


// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



const App=()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="OnboradingScreen" component={OnboradingScreen}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      {/* <Stack.Screen name="SplshScreen" component={SplashScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
