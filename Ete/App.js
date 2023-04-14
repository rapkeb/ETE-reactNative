/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useState } from 'react';

import ImageViewer from './ImageViewer';
import Button from './Button';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './CircleButton';
import IconButton from './IconButtons';

const PlaceholderImage = require('./assets/background-image.png');
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function App() {
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.');
        }
    };
    const onReset = () => {
        setShowAppOptions(false);
    };

    const onAddSticker = () => {
        // we will implement this later
    };

    const onSaveImageAsync = async () => {
        // we will implement this later
    };
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        </View>
      {/!*<View style={styles.imageContainer}>
          <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
          />
      </View>*!/}
        {showAppOptions ? (
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset} />
                    <CircleButton onPress={onAddSticker} />
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                </View>
            </View>
        ) : (
          <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
              <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    /!*paddingTop: 58,*!/
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
*/

//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainScreen";
import LanguageScreen from "./components/LanguageScreen";
import SettingsScreen from "./components/SettingsScreen";

import React from 'react';
import {StyleSheet} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Entrance" options={{headerShown:false}} component={HomeScreen} />
            <Stack.Screen name="Main" options={{headerShown:false}} component={MainScreen} />
            <Stack.Screen name="Language" options={{headerShown:false}} component={LanguageScreen} />
            <Stack.Screen name="Settings" options={{headerShown:false}} component={SettingsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
