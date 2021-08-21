import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import BookList from './Screens/BookList'
import BookDetails from './Screens/BookDetails';
import BookContent from './Screens/BookContent';
// import PDFExample from './Screens/pdfLib';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
import About from './Screens/About';


const MyStack = () => {
    return (

        <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Login', headerShown: false }}
            />
            <Stack.Screen name="BookList" component={BookList}
                options={{
                    headerStyle: {
                        backgroundColor: '#ff9633',
                    },
                }}
            />
            <Stack.Screen name="BookDetails" component={BookDetails}
                options={{
                    headerStyle: {
                        backgroundColor: '#ff9633',

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                }}
            />
            {/* <Stack.Screen name="Read" component={BookContent}
                    options={{
                        headerStyle: {
                            backgroundColor: '#ff9633',
                        },
                    }}
                /> */}
            <Stack.Screen name="Reado" component={TabNav}
                options={{
                    headerStyle: {
                        backgroundColor: '#ff9633',
                    },
                }}
            />

        </Stack.Navigator>

    );
};

export default MyStack;


const Tab = createBottomTabNavigator();

function TabNav() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >

            <Tab.Screen name="Read" component={BookContent} />

        </Tab.Navigator>

    );
}