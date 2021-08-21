import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useRef } from 'react';
import books from '../models/books';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Bookmarks = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const [bookmarks, setBookmarks] = useState([])
    

    let visit = 1;

    // const [bookmark1,setBookmarks1] = useState(1);
   

    useEffect(() => {
        getData();
        // console.log('before setting')
        currentUser != null && console.log("present user ", currentUser)
    }, [])


    useEffect(() => {      

            currentUser!=null && getBookmarks(currentUser)  
            // setBookmarks(bookmarks); 
            // currentUser!=null && console.log("this user is ",currentUser)    

     }, [currentUser])






    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            jsonValue != null ? JSON.parse(jsonValue) : null;
            //   setCurrentUser(JSON.parse(jsonValue));
            jsonValue != null && setCurrentUser(JSON.parse(jsonValue))
            // console.log(JSON.parse(jsonValue).username);
            // console.log("curent user ",JSON.parse(jsonValue));
            // getBookmarks(JSON.parse(jsonValue))
        } catch (e) {
            console.log(e)
        }
    }

    const getBookmarks = async (currentUser) => {
        // console.log('inside getBooks', Date.now())
        // let  value={id:currentUser.id}
        // currentUser != null && (use = currentUser)
        let value = { id: currentUser.id }


        const res = await fetch('http://192.168.43.139:80/reader/bookmarks.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value),
        });
        const data = await res.json();
        setBookmarks(data);
        // console.log(data)
    }



       const deleteReview = (id) =>{

        let value={user:currentUser.id,revId:id}

        deleteBookmark(value);
      }

      const deleteBookmark =  async (value) =>{       

        const res = await fetch('http://192.168.43.139:80/reader/deletebookmark.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
     });
     const data = await res.json();         
       setBookmarks(data);
          } 

        //   const  useForceUpdate = ()=>{
        //     const [bookmark1,setBookmarks1] = useState(1);
        //     return () => setBookmarks1(bookmark1=>bookmark1+1)
        //   }

// const forceUpdate = 
// useForceUpdate();
// forceUpdate;
    return (
        <View style={styles.container}>
           
            
            
            <Text style={styles.bookHeader}>My Bookmarks</Text>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={bookmarks}
                renderItem={({ item }) => (

                    <View style={styles.book}>

                        <TouchableHighlight>

                            <Image style={styles.image} source={books[item.book_id - 1].photo} />
                        </TouchableHighlight>
                        <View style={styles.setIcons}>
                            <FontAwesomeIcon onPress={() => deleteReview(item.id)} style={styles.bookmark} name="trash" size={28} />
                        </View>


                    </View>

                )}
            />
        </View>
    )
}

export default Bookmarks

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    image: {
        width: 140,
        height: 180
    },
    book: {
        // backgroundColor: "#FF9F33",
        margin: 5,
        flex: 1,
        // padding: 5,
    },
    bookHeader: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginTop: 20,
        marginBottom: 20
    },
    setIcons: {

        alignContent: "center",
        flex: .5,
        flexDirection: "row",



    },
    bookmark: {
        borderColor: "#fff",
        borderWidth: 1,
        borderTopColor: "#fff",
        borderTopWidth: 1,
        // alignSelf:"center",
        padding: 10,
        // width:"100%",
        color: "#E5972B"

        // color:"#fff"
    },
})
