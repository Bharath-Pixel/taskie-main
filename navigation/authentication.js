
import { createStackNavigator } from 'react-navigation';
import Signup from '../screens/auth/Signup';

const AppNavigator = createStackNavigator({
  Login: { screen: Signup },
  // other screens in your app
}, {
  initialRouteName: 'Login', // set login screen as initial route
});

export default AppNavigator;