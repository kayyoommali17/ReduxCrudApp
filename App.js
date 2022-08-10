import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import Routes from './src/routes';
import store from './src/reducer/store';
export default function App() {
  return (
   <Provider store={store}>
     <Routes/>

   </Provider>
  )
}

const styles = StyleSheet.create({})