import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';




const BookContent = ({ navigation, route }) => {

    return (

       
<WebView
            style={styles.container}
            source={{ uri: "https://staronline.com.ng/100bi.pdf" }}
        />
       
      
    )
}

export default BookContent

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
})
