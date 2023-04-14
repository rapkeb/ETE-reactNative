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

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.screen}>
                    <Text style={[styles.text, {marginTop: 170}]}>Email Address</Text>
                    <TextInput style={styles.textBox}
                        placeholder="enter email address here"
                        onChangeText={text => setEmailText(text)}
                        value={emailText}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"

                    />
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.textBox}
                        placeholder="enter password here"
                        onChangeText={text => setPasswordText(text)}
                        value={passwordText}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}

                    />
                </View>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Sign In" onPress={() => navigation.navigate("Main")} />
                    <Button theme="primary" label="Sign Up" onPress={() => navigation.navigate("Main")} />
                </View>
            </ImageBackground>
        </View>
    );
    /* TODO: change on press to connect to data base, check if data correct,
    generate response and upload main page if all good*/
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 15,
    },
    textBox: {
        fontSize: 20,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: "80%",
    },
    headerContainer: {
        flex: 1 / 5,
        alignItems: 'center',
        flexDirection: "row",
    },
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
});