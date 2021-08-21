import React from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableHighlight, TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import 'react-native-gesture-handler';
import books from '../models/books';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import { setStatusBarStyle } from 'expo-status-bar';

const BookList = ({ navigation }) => {

    const [currentUser,setCurrentUser] = useState([])
    const [book,setBooks] = useState([])
    const [text,setText] = useState()
    const bDetails = (item) => {
        navigation.navigate('BookDetails', { item })

    }

    useEffect(() => {
       setBooks(books)
       getData();
    }, [])


    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
           jsonValue != null ? JSON.parse(jsonValue) : null;
      
        setCurrentUser(JSON.parse(jsonValue))
        // console.log(currentUser.username);
        } catch(e) {
         console.log(e)
        }
      }

    const filterBooks = (text) =>{
        // book.filter((bok)=>bok.title)
        let matches = [];
        if(text.length>0)
        {
          matches=book.filter(bok=>{
            const regex = new RegExp(`${text}`,"gi");
            return bok.title.match(regex);
          });
        }else{
            matches=books;
        }
    
        // console.log('matches',matches);
       setBooks(matches);
        setText(text);
    }

    const iconPress = (i) =>{
        let value = {id:i,user:currentUser.id} 
        addBookmark(value);
    }

    const addBookmark =  async (value) =>{       
           
   const res = await fetch('http://192.168.43.139:80/reader/bookmark.php', {
 method: 'POST',
 headers: {
   'Content-type': 'application/json',
 },
 body: JSON.stringify(value),
});
const data = await res.json();    
  alert(data.message)  
  
   
     } 


     const toBookmarks = () =>{
         navigation.navigate('Bookmarks')
     }


    return (

        <View style={styles.container}>
           {/* <Header /> */}
           <TouchableHighlight onPress={toBookmarks}>
           <View style={styles.bStyle}>
               <Text style={styles.bText}>Your Bookmarks</Text>
           </View>
           </TouchableHighlight>

            <View style={styles.iconInput}> 
            <FontAwesomeIcon name="search" size={16} color="#E5972B" />
                <TextInput multiline style={styles.justText}  value={text} placeholder="Search for books" onChangeText={filterBooks} />
            </View>
            <View style={{marginTop:20}}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={book}
                    renderItem={({ item }) => (
                        
                            <View style={styles.book}>
                                <TouchableWithoutFeedback onPress={() => bDetails(item)}>
                                <Image style={styles.image} source={item.photo} />
                                </TouchableWithoutFeedback>
                                <View style={styles.setIcons}>
                                <FontAwesomeIcon onPress={()=>iconPress(item.id)} style={styles.bookmark} name="heart" size={28}  />
                                    </View>

                            </View>
                        
                    )}
                />

            </View>

        </View>

    )
}

export default BookList

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom:100

    },
    book: {
        // backgroundColor: "#FF9F33",
        // margin: 5,
        flex: 1,
        // padding: 5,

    },
    image: {
        width: 140,
        height: 180
    },
    text: {
        color: "#fff",
        textTransform: "capitalize"
    },
    input:{
        alignSelf:"center",       
        // borderBottomColor:"#E5972B",
        // borderBottomWidth:1,
        // borderLeftColor:"#E5972B",
        // borderLeftWidth:1,
        borderColor:"#E5972B",
        borderWidth:1,
        padding:10,
        width:"100%",
        fontSize:20  ,
        backgroundColor:"#fff",
        // marginBottom:10 ,
        borderRadius:10       
    },
    iconInput:{
        alignSelf:"center",      
        padding:10,
        width:"100%",
        // fontSize:20  ,
        backgroundColor:"#fff",
        // marginBottom:10 ,
        borderRadius:10  ,
        flexDirection:"row",  
        alignItems:"center"  ,
          borderColor:"#E5972B",
        borderWidth:1,   
    },
    justText:{
        marginLeft:10,
        // color:"#E5972B"
        
    },
    bookmark:{
        borderColor:"#fff",
        borderWidth:1,
        borderTopColor:"#fff",
        borderTopWidth:1,
        alignSelf:"center",
        padding:10,
        // width:"100%",
        color:"#E5972B"
       
        // color:"#fff"
    },
    setIcons:{
        // alignItems:"center",
        alignContent:"center"
    },
    bStyle:{
   padding:10,
   backgroundColor:"#E5972B",
   borderRadius:10,
   marginBottom:20
    },
    bText:{
        textAlign:"center",
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    }
})
