import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/auth/Signup';
import RegisterPage from '../screens/auth/Register';
import Tabs from './tabs';
import {COLORS, ROUTES} from '../constants';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        defaultNavigationOptions: {
            gesturesEnabled: false
          }
    }} initialRouteName={ROUTES.LOGIN}>
      {/* <Stack.Screen
        name={ROUTES.LOGIN}
        component={Signup}
        options={{headerShown: false}}
        
      /> */}
      {/* <Stack.Screen name={"RegisterScreen"} component={RegisterPage} /> */}
      <Stack.Screen
        name={"HomepageScreen"}
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;