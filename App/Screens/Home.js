import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';



const Home = ({ navigation }) => {

    const handleClick = () => {
        navigation.navigate('BookList')

    }

    const bDetails = () => {
        navigation.navigate('About')
    }

    const Login = () => {
        navigation.navigate('Login')
    }
    return (
        <ImageBackground style={styles.background} source={require("../../assets/backgrounds/img1.jpg")}>
            <View style={styles.homeHead}>
                <Image style={styles.logo} source={require("../../assets/logo/logo5.png")} />
                <Text style={styles.title}>Book Reader</Text>
            </View>
            <TouchableHighlight style={styles.touch} onPress={handleClick}>
                <View style={styles.startBut}><Text style={styles.butText}>Start Reading</Text></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touch} onPress={Login}>
                <View style={styles.regBut}><Text style={styles.butText}>Login</Text></View>
            </TouchableHighlight>
        </ImageBackground>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        resizeMode: "cover",
        alignItems: 'center',
        // justifyContent: "center"

    },
    startBut: {
        backgroundColor: '#fc5c65',
        width: '100%',
        padding: 10,
        textAlign: "center",

    },
    regBut: {
        backgroundColor: '#4ecdc4',
        width: '100%',
        padding: 10,


    },
    butText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 18,
        // fontFamily: "Arial",
    },
    logo: {
        width: 100,
        height: 100,

    },
    homeHead: {
        position: "absolute",
        top: 250,
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold"
    },
    touch: {
        width: "100%"
    }
});

