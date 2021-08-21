// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import About from "../Screens/About";
import BookDetails from "../Screens/BookDetails";
import BookList from "../Screens/BookList";

// import { MainStackNavigator, ContactStackNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const TopTabNavigatorMe = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen name="BookList" component={BookList} />
            <Tab.Screen name="About" component={About} />

        </Tab.Navigator>
    );
};

const BottomTabNavigatorMe = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} /> */}
            <Tab.Screen name="About" component={About} />

            <Tab.Screen name="BookList" component={BookList} />

        </Tab.Navigator>
    );
};

export { BottomTabNavigatorMe, TopTabNavigatorMe };
