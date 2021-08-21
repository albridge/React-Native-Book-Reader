import 'react-native-gesture-handler';
import * as React from 'react';
import MyStack from './App/MyStack';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './App/Screens/About';
import BookList from './App/Screens/BookList';
import BookDetails from './App/Screens/BookDetails';
import Login from './App/Screens/Login';
import { MainStackNavigatorMe } from './App/navigations/MainStackNavigatorMe';
import {useState} from 'react'
import { UserProvider } from './App/UserContext';
import Register from './App/Screens/Register';
import Reviews from './App/Screens/Reviews';
import BookContent from './App/Screens/BookContent';
import Notifications from './App/Screens/Notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bookmarks from './App/Screens/Bookmarks';
import Logout from './App/Screens/Logout';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Header from './App/Screens/Header';


function HomeDrawer() {
  const Drawer = createDrawerNavigator();
 return (
   
     <Drawer.Navigator initialRouteName="Home">
       {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
       <Drawer.Screen name="Notifications" component={Notifications} />
       <Drawer.Screen name="About" component={About} />
      
     </Drawer.Navigator>
  
 );
}


const Tab = createBottomTabNavigator();
function HomeTabs() {

  return (
   
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color}) => {
        // const icons = {
        //   Home: 'home',
        //   BookList: 'BookList',
        // };
        let iconName;
        if(route.name == 'Book List'){
          iconName='filter';
        }else if(route.name== 'AboutUs'){
          iconName='anchor';        
        }else if(route.name== 'Bookmarks'){
          iconName='bookmark-o';
        }else if(route.name== 'Settings'){
          iconName='gear';
        }else if(route.name== 'Logout'){
          iconName='cloud';
        }
       

  

        return <FontAwesomeIcon  name={iconName} size={20}  />
  
        // return (
        //   <MaterialCommunityIcons
        //     name={icons[route.name]}
        //     color={color}
        //     size={size}
        //   />
        // );
      },
    })}
    // tabBarOptions={{
    //   activeTintColor:"red",
    //   intactiveTintColor:"grey",
    // }}
    >
     
      <Tab.Screen name="Book List" component={BookList}  />     
      <Tab.Screen name="AboutUs" component={About} />
      {/* <Tab.Screen name="Bookmarks" component={Bookmarks} 
        options={{
          headerStyle: {
              backgroundColor: '#ff9633',
          },
      }}
       /> */}
      <Tab.Screen options={{ headerShown: false }} name="Settings" component={HomeDrawer} />
      
     
    </Tab.Navigator>
   
  );
}





const Stack = createStackNavigator();
function App() {
  const [username,setUsername] = useState('');
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
       jsonValue != null ? JSON.parse(jsonValue) : null;
      setUsername(JSON.parse(jsonValue).username);
    // console.log(typeof JSON.parse(jsonValue));
    } catch(e) {
     console.log(e)
    }
  }


  return (
    <UserProvider>
    <NavigationContainer>
     
      <Stack.Navigator>
        
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="BookList" component={HomeTabs} />
        <Stack.Screen options={{ headerShown: false }} name="About" component={HomeTabs} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="BookContent" component={BookContent} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
        
        
        <Stack.Screen name="Register" component={Register}
        options={{
          headerStyle: {
              backgroundColor: '#ff9633',
          },
      }}
       />
       
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer >
    </UserProvider>
  );
}

export default App;