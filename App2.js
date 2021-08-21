import 'react-native-gesture-handler';
import * as React from 'react';
import MyStack from './App/MyStack';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './App/navigations/TabNavigator';

const App = () => {
    return (
        <NavigationContainer>
            {/* <BottomTabNavigator /> */}
            <BottomTabNavigator />
        </NavigationContainer>


    );
};

export default App;