import React, { useState } from "react";
import axios from 'axios';
import {ImageBackground, View, Text, StyleSheet, Alert, TextInput} from "react-native";
import Button from "../Button"
import CircleButton from "../CircleButton";
//import {PythonShell} from 'python-shell';
//import $ from 'jquery-ajax';
//import RNFS from 'react-native-fs';
//import { usePython } from 'react-py'

const BackgroundImage = require('../assets/BackgroundImage.jpg');

//const { spawn } = require('child_process');

export default function HomeScreen({ navigation }) {
    const [displayText, setDisplayText] = useState('');

    const onTapToHear = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/weather');
            setDisplayText(response.data);
            clearDisplayText();
        } catch (error) {
            console.error(error);
        }
    };

    const clearDisplayText = () => {
        setTimeout(() => {
          setDisplayText('');
        }, 4000);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Sign In" onPress={() => navigation.navigate("Main")} />
                    <Button theme="primary" label="Sign Up" onPress={() => navigation.navigate("Main")} />
                </View>
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
    textBox: {
      marginTop: 50,
      marginLeft: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      width: '90%',
      height: 200,
      backgroundColor: '#fff',
      textAlignVertical: 'top',
    },
});