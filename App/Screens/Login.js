import React from 'react';
import {useState, useContext} from 'react'
import { UserContext } from '../UserContext';
import {ImageBackground, TouchableOpacity, View, Text, StyleSheet, TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [user,setUser] = useContext(UserContext);
    const [user,setUser] = useState();

    // const storeData = async (value) => {
    //     try {
    //       const jsonValue = JSON.stringify(value)
    //       await AsyncStorage.setItem('@user', jsonValue)
    //     } catch (e) {
    //       // saving error
    //     }
    //   }

     

    const toLogin = () =>{
          navigation.navigate('Register')
      }

    const doHome = () =>{
        navigation.navigate('Home')
    }

      
      const tryLogin =  async () =>{        
    
     let   logDetails={email:email,password:password}
              
    const res = await fetch('http://192.168.43.139:80/reader/dologin.php', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(logDetails),
});
const data = await res.json();    
//    console.log(data)
if(data.id >0)
{        
setUser({username:data.email,id:data.id})
// storeData({username:data.email,id:data.id})

try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('user', jsonValue)
    // setUser({username:user.username,id:user.id})
  } catch (e) {
   console.log(e);
  }
navigation.navigate('About')


}     
    
      } 

    return (
        <ImageBackground style={styles.background} source={require("../../assets/backgrounds/img1.jpg")}>
        <View style={styles.holder}>
            

            <View style={styles.logView}>
            <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)}   placeholder="Enter Email" />
            </View>
            <View style={styles.logView}>
            <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)}  placeholder="Enter Password" />
            </View>
            <View style={styles.button}>
            <Button color="#000"  title="Login" onPress={tryLogin} />
            </View>
            <TouchableOpacity onPress={toLogin}>
               <Text style={styles.login}>Register</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={doHome}>
               <Text style={styles.login}>Home</Text>
               </TouchableOpacity>
            
            

        </View>
        </ImageBackground>
    )
}

export default Login


const styles=StyleSheet.create({
    container:{

    },
    head:{
        fontSize:20,
        textAlign:"center",
        marginTop:20
    },
    logView:{
        backgroundColor:"#220F05",
        width:"95%",       
        borderRadius:20,       
        top:0,
        alignSelf:"center",
        marginBottom:20,
        borderWidth:5,
        // borderColor:"#BC961E",
        padding:10,
        opacity:.7
    },
    input:{
        alignSelf:"center",       
        borderBottomColor:"#fff",
        borderBottomWidth:1,
        padding:10,
        width:"100%",
        fontSize:20  ,
        backgroundColor:"#fff",
        // marginBottom:10,
        borderRadius:10     
    },
    background: {
        flex: 1,       
        resizeMode: "cover",        
        // alignItems:"center"

    },
    button:{
        marginTop:0,
        width:200,
        alignSelf:"center",
        borderRadius:20
    },
    login:{
        color:"#fff",
        textAlign:"center",
        marginTop:20,
        fontSize:20
    },
    holder:{
       marginTop:"60%",
    }
})


// npm i bcrypt

// const bcrypt = require('bcrypt');
// async function hashIt(password){
//   const salt = await bcrypt.genSalt(6);
//   const hashed = await bcrypt.hash(password, salt);
// }
// hashIt(password);
// // compare the password user entered with hashed pass.
// async function compareIt(password){
//   const validPassword = await bcrypt.compare(password, hashedPassword);
// }
// compareIt(password);
