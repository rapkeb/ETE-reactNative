import React, { useState } from "react";
import axios from 'axios';
import {ImageBackground, View, Text, StyleSheet, Alert, TextInput} from "react-native";
import Button from "../Button"
import CircleButton from "../CircleButton";
//import {PythonShell} from 'python-shell';
//import $ from 'jquery-ajax';
//import RNFS from 'react-native-fs';
//import { usePython } from 'react-py'
import {auth,db} from "../FirebaseConfig";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

//const { spawn } = require('child_process');

export default function HomeScreen({ navigation }) {

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const handleSignup = async () => {
        try {
            await auth.createUserWithEmailAndPassword(emailText, passwordText);
            await auth.signInWithEmailAndPassword(emailText, passwordText);
            const user = auth.currentUser;

            // Check if the email already exists in the database
            const emailSnapshot = await db.ref('users').orderByChild('email').equalTo(user.email).once('value');
            if (emailSnapshot.exists()) {
                Alert.alert('Email already exists');
                return;
            }

            // Check if the uid already exists in the database
            const uidSnapshot = await db.ref('users').orderByChild('uid').equalTo(user.uid).once('value');
            if (uidSnapshot.exists()) {
                Alert.alert('UID already exists');
                return;
            }
            // Add the user to the database
            await db.ref('users').push({
                uid: user.uid,
                email: user.email,
                LanguageHeard:"English",
                LanguageWritten:"English",
                WorkingMode:"Home",
                TextSize:12,
                TextStyle:"Italic",
                TextColor:"White",
                TextLocation:"Center"
                // add other properties here
            });
            navigation.navigate("Main",{ uid: user.uid });
            // Clear the email and password input values
            setEmailText('');
            setPasswordText('');
        } catch (error) {
            console.log(error.message);
            Alert.alert(error.message);
            setPasswordText('');
        }
    };

    const handlelogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(emailText, passwordText);
            const user = auth.currentUser;
            Alert.alert("Sign in successfully!!")
            console.log("user successfully signed in "+user.email);
            navigation.navigate("Main",{ uid: user.uid });
            setEmailText('');
            setPasswordText('');
        } catch (error) {
            console.log(error.message);
            Alert.alert(error.message)
            setPasswordText('');
        }
    };
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
                    <Button theme="primary" label="Sign In" onPress={handlelogin} />
                    <Button theme="primary" label="Sign Up" onPress={handleSignup} />
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