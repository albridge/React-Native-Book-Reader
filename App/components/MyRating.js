import React from 'react'
import {View, Image, StyleSheet, TouchableWithoutFeedback,Text} from 'react-native'
import {useState} from 'react';



const MyRating = () => {

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
    
   
    
    return (
        <View>
        <View style={styles.myStars}>  
        {newRating}                      
        </View>
        <Text style={styles.myStarsText}>{ratingValue}</Text> 
        </View> 
    )
}

export default MyRating

const styles=StyleSheet.create({
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
        textAlign:"center" 
      
    }
})