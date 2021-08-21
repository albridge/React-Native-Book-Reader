import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import books from '../models/books';


export default function MyAudio({ songId }) {
    const [sound, setSound] = React.useState();

    console.log(songId)
    let song;
    if (songId === undefined) {
        song = require("../../assets/sounds/Jada.mp3")
    } else {
        song = books[songId - 1].song;
    }

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            song
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Button title="Play Audio Book" onPress={playSound} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 5
    }
})