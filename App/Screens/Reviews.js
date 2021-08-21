import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, RefreshControl, FlatList} from 'react-native';
import { useState, useEffect, useRef, useContext } from 'react'

import books from '../models/books';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyRating from '../components/MyRating';






const Reviews = ({navigation, route}) => {
  
  const noFill = require("../../assets/icons/noFill.png")
  const fill = require("../../assets/icons/fill.png")
  const [rating,setRating] = useState([
     
          {star:noFill, key:1},
          {star:noFill, key:2},
          {star:noFill, key:3},
          {star:noFill, key:4},
          {star:noFill, key:5},      
  ])    

  const [ratingValue,setRatingValue] = useState(0)

  const setStars = (val) =>{
      let newKeys=[];           
      rating.map((set)=>    
         
          newKeys.push(set.key<=val ? {...set,star:fill} :  {...set,star:noFill})
      
      )       
      setRating(newKeys);
     setRatingValue(val)
     
  } 

  
          



  let newRating =[];
  for(let a=0; a<5; a++)
  {
      
      newRating.push(
          <TouchableWithoutFeedback onPress={()=>setStars(rating[a].key)} key={rating[a].key}>
          <Image style={styles.star} source={rating[a].star} />
          </TouchableWithoutFeedback>
      )
         
  }

let id = route.params.bookId;
    const [reviews,setReviews] = useState([])
    const [myReview,setMyReview] = useState('')
    // const [user,setUser] = useContext(UserContext);
    const [user,setUser] = useState([]);

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user')
         jsonValue != null ? JSON.parse(jsonValue) : null;
        setUser(JSON.parse(jsonValue));
       
      // console.log(JSON.parse(jsonValue));
      } catch(e) {
       console.log(e)
      }
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);


    let rendered = useRef(false);
    useEffect(()=>
    {          
        getReviews(id)  
              if(rendered.current===true){  
        // sendReview(myReview);    
    }else{
              rendered.current=true;
            }     
  },[id,myReview]
  );

  useEffect(()=>{
getData(user);
  },[user])

    const getReviews =  async (id) =>{       
            let value = {did:id}    
       const res = await fetch('http://192.168.43.139:80/reader/reviews.php', {
     method: 'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(value),
   });
   const data = await res.json();    
    //   console.log(data.result)  
      setReviews(data.result) 
       
         } 

         const saveReview = () =>{
        //  console.log('rating value is',ratingValue); return;
        if(ratingValue<1){
          alert('Select a rating');
          return;
        }
            let singleReview = {review:myReview,book_id:id,rating:ratingValue,user:user.id}
            if(myReview.length>0){
            sendReview(singleReview)
            }
         }

         // save review

         const sendReview =  async (singleReview) =>{       
             
                 
                //  console.log(myReview); return;
            const res = await fetch('http://192.168.43.139:80/reader/savereview.php', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(singleReview),
        });
        const data = await res.json();    
        //    console.log([data]) ;
        setReviews([data,...reviews]);
            
        
    
              } 
              

     

    return (
      <ScrollView style={styles.container}>
        
              
           
        {/* <MyRating /> */}
        <View>
        <View style={styles.myStars}>  
        {newRating}                      
        </View>
        <Text style={styles.myStarsText}>Rated: {ratingValue}</Text> 
        </View> 
           
          
            <Image style={styles.image} source={books[id-1].photo} />
            <View>
            
            <Text>{user.username}</Text>
                <TextInput style={styles.input} placeholder="Post review" onChangeText={(text)=>setMyReview(text)} />
                <Button title="Add Review" onPress={saveReview} />
                
            </View>

            <Text style={styles.rHead}>Reviews</Text>
            <View>
                {reviews && 
                reviews.map((rev)=>
                    <View key={rev.id}>
                        <Text style={styles.review}>{rev.review}</Text>
                    </View>
                )
                }
            </View>

           


            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
       

        {/* <FlatList
                    // numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={reviews}
                    renderItem={({ item }) => (
                        
                                                  
                <Text style={styles.review}>{item.review}</Text>
                           
                        
                    )}
                /> */}

        </ScrollView>
    )
}

export default Reviews

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:50
    },
    input:{
        alignSelf:"center",       
        borderBottomColor:"#fff",
        borderBottomWidth:1,
        padding:10,
        width:"100%",
        fontSize:20  ,
        backgroundColor:"#fff",
        marginBottom:10        
    },
    image:{
        alignSelf:"center",
        marginTop:20,
        marginBottom:20,
        borderRadius:10,
        width:200,
        height:270
    },
    review:{
        padding:10,
        backgroundColor:"#FAE0BC",
        marginBottom:5
    },
    rHead:{
        padding:10,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"

    },
    star:{           
      width:40,
      height:40
  },
  myStars:{
      flexDirection:"row", 
      justifyContent:"center"  
    
  },
  myStarsText:{
      flexDirection:"row", 
      justifyContent:"center" ,
      textAlign:"center" ,
      fontSize:20,
      fontWeight:"bold"
    
  }
})
