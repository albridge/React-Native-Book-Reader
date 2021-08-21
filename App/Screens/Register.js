import React from "react"
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import { useState } from "react"
const Register = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const sendData = () =>{
        let details={email:email,password:password}
saveUser(details)
    }


    const saveUser = async (details) => {     
// console.log(details); return
        const res = await fetch('http://192.168.43.139:80/reader/doregister.php', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(details),
        });
        const data = await res.json();    
           
        // if(Number(data)===200)
        // {
           
            alert(data.message);
            // console.log(data.message)
    
        // }   
    
      }


 

      const toLogin = () =>{
          navigation.navigate('Login')
      }

  
    return (
        <View style={styles.container}>
            
           <Text style={styles.header}>Enter Details Below</Text> 

           <View style={styles.formContent}>
           <View style={styles.form}>
               <TextInput
               style={styles.input}
               placeholder="Enter Email"  
               onChangeText={(e)=>setEmail(e)}             
               />
               <TextInput
               style={styles.input}
               placeholder="Enter Password" 
               onChangeText={(e)=>setPassword(e)}                   
               />
               <TextInput
               style={styles.input}
               placeholder="Confirm Password"  
               onChangeText={(e)=>setConfirmPassword(e)}                  
               />
               <Button title="Submit" color="#ff9633" onPress={sendData} />
{/* <TouchableOpacity onPress={toLogin}>
               <Text style={styles.login}>Login</Text>
               </TouchableOpacity> */}
           </View>
           </View>

        </View>
    )
}

export default Register

const styles=StyleSheet.create({
    container:{
        margin:5,        
    },
    header:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
        marginTop:20
    },
    form:{
        width:"90%",
        height:300,
        // backgroundColor:"#DFC14F",
        borderRadius:20
    },
    formContent:{
        flexDirection:"row",
        alignSelf:"center"
    },
    input:{
        alignSelf:"center",       
        borderBottomColor:"#ff9633",
        borderBottomWidth:1,
        padding:10,
        width:"90%"
      
    },
    login:{
marginTop:20,
textAlign:"center",
color:"#22919E",
fontSize:18,
fontWeight:"bold"
    }
})
