import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Adddetails from '../screens/Adddetails/Adddetails';
import UpdateDetails from '../screens/UpdateDetails/UpdateDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentAction from '../screens/Comments/CommentAction';



const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AddDetails' component={Adddetails}/>
        <Stack.Screen name='UpdateDetlais' component={UpdateDetails}/>
        <Stack.Screen name='Comments' component={CommentAction}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})