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
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Home")} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language")} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings")} />
                </View>
                <CircleButton label="Tap To Hear" onPress={onTapToHear} />
                <Text style={styles.midText1}>Tap to</Text>
                <Text style={styles.midText2}>Hear</Text>
                <TextInput style={styles.textBox} value={displayText} multiline={true}/>
            </ImageBackground>
        </View>
    );
}

//export default function HomeScreen({ navigation }) {
//    const [displayText, setDisplayText] = useState('');
//
//    const onTapToHear = async () => {
//        try {
//                $.ajax({
//                    type: 'POST',
//                    url: '/Users/omrigoldberg/Desktop/ETE-reactNative/Ete/assets/main.py'
//                })
//            console.log("hello world");
//                <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
//                <py-env>
//                  - paths:
//                    - /Users/omrigoldberg/Desktop/ETE-reactNative/Ete/assets/example.py
//                </py-env>
//                <py-script>
//                    from example import generate_random_number
//                    pyscript.write('lucky', generate_random_number())
//                </py-script>
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    const clearDisplayText = () => {
//        setTimeout(() => {
//          setDisplayText('');
//        }, 4000);
//    };
//
//    return (
//        <View style={styles.container}>
//            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
//                <View style={styles.headerContainer}>
//                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Home")} />
//                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language")} />
//                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings")} />
//                </View>
//                <CircleButton label="Tap To Hear" onPress={onTapToHear} />
//                <Text style={styles.midText1}>Tap to</Text>
//                <Text style={styles.midText2}>Hear</Text>
//                <TextInput style={styles.textBox} value={displayText} multiline={true}/>
//            </ImageBackground>
//        </View>
//    );
//}

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