import React, { useState, useEffect } from "react";
import axios from 'axios';
import {ImageBackground, View, Text, StyleSheet, Alert, TextInput} from "react-native";
import Button from "../Button"
import CircleButton from "../CircleButton";
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Audio } from 'expo-av';
import DownButton from "../DownButton";
import {auth} from "../FirebaseConfig";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

const URL = 'https://teachablemachine.withgoogle.com/models/7F1mOpyRY/model.json';
const modelWeights = 'https://teachablemachine.withgoogle.com/models/7F1mOpyRY/model.weights.bin'

export default function MainScreen({ navigation, route }) {

    const [displayText, setDisplayText] = useState('');
    const [model, setModel] = useState(null);
    const uid = route.params.uid;
    useEffect(() => {
      const loadModel = async () => {
        try {
            await tf.ready();
            const loadedModel = await tf.loadLayersModel(URL);
            setModel(loadedModel);
          } catch (error) {
            console.error(error);
          }
        };
        loadModel();
      }, []);

      const onTapToHear = async () => {
        try {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          });
          const { status } = await Audio.requestPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Microphone permission not granted');
            return;
          }
          const recording = new Audio.Recording();
          const recordingOptions = {
            ...Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
            ios: {
              extension: '.wav',
              outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
              audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
              sampleRate: 44100,
              numberOfChannels: 1,
              bitRate: 128000,
            },
            android: {
              extension: '.wav',
              audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
              sampleRate: 44100,
              numberOfChannels: 1,
              bitRate: 128000,
              outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            },
          };
          await recording.prepareToRecordAsync(recordingOptions);
          await recording.startAsync();
          setTimeout(async () => {
            await recording.stopAndUnloadAsync();
            const audioData = await recording.getURI();
//            const prediction = await model.predict(audioData);
//            const { sound } = await recording.createNewLoadedSoundAsync();
//            const audioData = await sound.downloadAsync();
//            const prediction = await predict(audioData.uri);
//            setDisplayText(prediction.toString());
          }, 5000);
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

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigation.navigate('Entrance');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Main", { uid: uid })} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language", { uid: uid })} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings", { uid: uid })} />
                </View>
                <CircleButton label="Tap To Hear" onPress={onTapToHear} />
                <Text style={styles.midText1}>Tap to</Text>
                <Text style={styles.midText2}>Hear</Text>
                <TextInput style={styles.textBox} value={displayText} multiline={true}/>
                <View style={styles.footerContainer}>
                    <Button theme="primary" label="Log Out" onPress={handleLogout}/>
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
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        // margin: -70
        marginBottom:-100



    },
});