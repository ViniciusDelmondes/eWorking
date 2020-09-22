import { StatusBar } from 'expo-status-bar';
import React from 'react';

import StackNavigation from './src/routes/StackNavigation'

import {AppLoading} from 'expo'

import {Poppins_400Regular, useFonts} from '@expo-google-fonts/poppins'

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if(!fontsLoaded){
     return <AppLoading/>
  } else {
      return (
        <>
          <StackNavigation/>
          <StatusBar style="light" />
        </>
  )};
}

