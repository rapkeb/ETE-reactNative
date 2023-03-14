import React, { useState } from "react";
import axios from 'axios';
import {ImageBackground, View, Text, StyleSheet, Alert} from "react-native";
import Button from "../Button"
import CircleButton from "../CircleButton";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

const onTapToHear = () => {
    // we will implement this later
        axios.get('http://127.0.0.1:5000/weather', {
//        axios.get('http://192.168.68.57:5000/weather', {
          params: {
            location: 'San Francisco'
          }
        })
        .then(response => {
//           console.log(response.data);
            Alert.alert(response.data);
           // handle response data here
         })
        .catch(error => {
          console.log(error);
        });
};

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Home")} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language")} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings")} />
                </View>
                <CircleButton label="Tap To Hear" onPress={onTapToHear} />
                <Text style={styles.midText1}>Tap to</Text>
                <Text style={styles.midText2}>Hear</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    headerContainer: {
        flex: 1 / 5,
        alignItems: 'center',
        flexDirection: "row",
    },
    midText1: {
        color: '#fff',
        marginTop: 10,
        fontSize:23,
        textAlign: 'center',
    },
    midText2: {
        color: '#fff',
        marginTop: -3,
        fontSize:25,
        paddingLeft: 3,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});