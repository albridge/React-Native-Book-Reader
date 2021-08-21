import React  from 'react'
import Home from '../Screens/Home'
import {Text, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LogDetails = ({navigation}) => {
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
       
           <View>
               <Text>{username}</Text>
           </View>
       
    )
}

export default LogDetails
