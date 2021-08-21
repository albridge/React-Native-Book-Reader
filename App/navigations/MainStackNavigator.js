// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import About from "../Screens/About";
import BookDetails from "../Screens/BookDetails";
import BookList from "../Screens/BookList";

const Stack = createStackNavigator();

// ./navigation/StackNavigator.js

const MainStackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff9633",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",

            }}
        >

            {/* navigation.setOptions({ tabBarVisible: false }) */}
            <Stack.Screen options={{ title: 'Login', headerShown: false }} name="Home" component={Home} />
            {/* <Stack.Screen name="About" component={About} /> */}
            <Stack.Screen name="BookDetails" component={BookDetails} />
            <Stack.Screen name="BookList" component={BookList} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#ff9633",
            },
            // headerTintColor: "white",
            headerBackTitle: "Back",
        }}>
            <Stack.Screen name="About" component={About} />

        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };