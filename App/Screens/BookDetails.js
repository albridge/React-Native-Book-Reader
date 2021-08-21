import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Button, TouchableWithoutFeedback } from 'react-native';
import books from '../models/books';

import MyAudio from "./MyAudio"

const BookDetails = ({ navigation, route }) => {
    let item = route.params.item

    const read = (id) => {
        navigation.navigate('BookContent', { bookId: id })
    }

    const toAbout = (id) => {
        navigation.navigate('About', { songId: id })
    }

    const reado = () => {
        navigation.navigate('About')
    }


    const toReview = (id) => {
        navigation.navigate('Reviews',{ bookId: id })
    }
    console.log(item.photo)
    return (
        <View>

            <ScrollView style={styles.container}>
                {/* <Button title="About" onPress={() => toAbout(item.id)} /> */}
                <Button title="read page" onPress={() => reado()} />
                <Text style={styles.snippet}>
                    {books[item.id - 1].snippet}
                </Text>
                <View style={styles.row}>
                    <Text style={styles.publish}>Author: {books[item.id - 1].author}</Text>
                    <Text style={styles.publish}> {books[item.id - 1].published}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => read(item.id-1)}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={books[item.id - 1].photo} />
                    </View>
                </TouchableWithoutFeedback>
                <Button title="Rate Book" onPress={()=>toReview(item.id)} />

                <Text style={styles.rating}>{books[item.id - 1].rating} <Text style={styles.stars}>****</Text></Text>
                <Text style={styles.review}>{books[item.id - 1].review}</Text>



                <MyAudio songId={item.id} />


            </ScrollView>

        </View>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    Title: {
        backgroundColor: "#FF7733",
        padding: 10,
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    },
    image: {
        width: 250,
        height: 220,
        marginTop: 20,
        // borderRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30

    },
    imageContainer: {
        alignItems: "flex-end",

    },
    snippet: {
        fontSize: 23,
        padding: 10,
        fontWeight: "bold"

    },
    publish: {
        fontSize: 16,
        color: "grey",
        paddingLeft: 10,
        flex: .5,
        // textAlign: "right"
    },
    row: {
        flexDirection: "row",
    },
    rating: {
        fontWeight: "bold",
        fontSize: 28,
        padding: 10,
        color: "grey"
    },
    review: {
        fontSize: 20,
        padding: 10
    },
    stars: {
        color: "#ff9633"
    }
})