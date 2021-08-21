// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookDetails from "../Screens/BookDetails";
import BookList from "../Screens/BookList";
import { TopTabNavigatorMe } from "./TabNavigatorMe";
import { BottomTabNavigatorMe } from "./TabNavigatorMe";
import Home from "../Screens/Home";
import About from "../Screens/About";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// ./navigation/StackNavigator.js
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const BottomTabNavigatorMet = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}
            {/* <Tab.Screen name="About" component={About} /> */}

            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="BookList" component={BookList} />

        </Tab.Navigator>
    );
};


const MainStackNavigatorMe = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="Bottom" component={BottomTabNavigatorMet} />
            
            {/* <Stack.Screen options={{ headerShown: false }} name="Homee" component={Home} /> */}


            {/* <Stack.Screen options={{ headerShown: false }} name="Top" component={TopTabNavigatorMe} /> */}

            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="BookDetails" component={BookDetails} />




        </Stack.Navigator>
    );
};





export { MainStackNavigatorMe };




