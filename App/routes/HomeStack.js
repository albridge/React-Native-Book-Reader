import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookList from '../BookList';
import React from 'react';

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Booklist" component={BookList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

