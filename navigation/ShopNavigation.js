import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UniversityScreen, {screenOptions as UniversityOpt } from '../screens/shop/UniversityScreen';
import UniversityListScreen, {screenOptions as UniversityListOpt } from '../screens/shop/UniversityListScreen';

import AuthScreen, {screenOptions as AuthOpt} from '../screens/user/AuthScreen';

import UserProductScreen, {screenOptions as UserPrdOpt} from '../screens/user/UserProducts';
import EditProductScreen, {screenOptions as EditPrdOpt} from '../screens/user/EditProducts';


import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';



const defaultNavOptions = {
    headerStyle : {
        backgroundColor: Platform.OS=== 'android' ? Colors.primary :''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}
 
///// stack 
const UniversityStack = createStackNavigator();

export const UniversityNavigator = () => {
  return (
    <UniversityStack.Navigator
      screenOptions={defaultNavOptions}
    >
      <UniversityStack.Screen  
        name="UniversityScreen"
        component={UniversityScreen}
        options={UniversityOpt}
      />
      <UniversityStack.Screen
        name="UniversityListScreen"
        component={UniversityListScreen}
        options={UniversityListOpt}
      />
    </UniversityStack.Navigator>
  );
}




///// stack

const AdminStack = createStackNavigator();

export const AdminNavigator = () => {
    return (
      <AdminStack.Navigator 
      screenOptions={defaultNavOptions}>
        <AdminStack.Screen
          name="User"
          component={UserProductScreen}
          options={UserPrdOpt}
        />
        <AdminStack.Screen
          name="Edit"
          component={EditProductScreen}
          options={EditPrdOpt}
        />
      </AdminStack.Navigator>
    );
}


////// stack
const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
    return (
      <AuthStack.Navigator 
        screenOptions={defaultNavOptions}>
        <AuthStack.Screen
          name="Auth"
          component={AuthScreen}
          options={AuthOpt}
        />
      </AuthStack.Navigator>
    );
}

const UniversityTabNavigator = createBottomTabNavigator();

export const UygulamaNavigator = () => {

  return (
    <UniversityTabNavigator.Navigator>
      <UniversityTabNavigator.Screen
        name="Universiteler"
        component={UniversityNavigator}
      />
      <UniversityTabNavigator.Screen
        name="Keşfet"
        component={AuthNavigator}
      />
      <UniversityTabNavigator.Screen
        name="Hesabım"
        component={AdminNavigator}
      />
    </UniversityTabNavigator.Navigator>
  );
}

