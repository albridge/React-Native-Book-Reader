import React from "react"
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native'
import { UserContext } from "../UserContext"
import { useContext,  useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogDetails from "../components/LogDetails";

const About = () => {
    // const [user,setUser] = useContext(UserContext);
    

    const [username,setUsername] = useState('');
    // let id = route.params.songId
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

      useEffect(() => {
        getData();
        // console.log(now)
      }, []);

       // reading object

       const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
           jsonValue != null ? JSON.parse(jsonValue) : null;
          setUsername(JSON.parse(jsonValue).username);
        // console.log(JSON.parse(jsonValue).username);
        } catch(e) {
         console.log(e)
        }
      }

      
    return (
        <ScrollView style={styles.container}> 
             
<Text style={styles.text}>{username} is a software developer w
ith 5+ years of experience majoring in php frameworks, Laravel 
and Yii2 and React native and Js. Letw get started</Text>


<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        </ScrollView>
    )
}

export default About

const styles=StyleSheet.create({
  container:{
    margin:10
  },
  text:{
    fontSize:20
  }
})
