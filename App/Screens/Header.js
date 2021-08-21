import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
const Header = ({route, navigation}) => {
    const logout = () =>{
navigation.navigate('Home')
    }
    return (
        <View style={styles.head}>
            {/* <Text style={styles.text}>Book Reader</Text> */}
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    head: {
        padding: 10,
        // marginTop: 50,
        backgroundColor: "#fc5c65",
    },
    text: {
        color: "#fff"
    }
})