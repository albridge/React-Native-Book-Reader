// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookList from "../Screens/BookList";

import { MainStackNavigator, ContactStackNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#ff9633",
            },
            // headerTintColor: "white",
            headerBackTitle: "Back",

        }}>

            <Tab.Screen options={{ headerShown: false, tabBarVisible: false }} name="Back" component={MainStackNavigator} />
            <Tab.Screen options={{ headerShown: false }} name="contact" component={ContactStackNavigator} />
            <Tab.Screen name="BookList" component={BookList} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
