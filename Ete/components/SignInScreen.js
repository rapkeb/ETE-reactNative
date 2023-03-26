// Aboutscreen.js
import React, { useState } from "react";
import {ImageBackground, View, Text, StyleSheet} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../Button"
import DownButton from "../DownButton"

const BackgroundImage = require('../assets/BackgroundImage.jpg');

export default function LanguageScreen({navigation}) {
    const [LanguageHeard, setLanguageHeard] = useState("English");
    const [LanguageWritten, setLanguageWritten] = useState("English");
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Home")} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language")} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings")} />
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Language Heard</Text>
                    <Picker
                        selectedValue={LanguageHeard}
                        onValueChange={(value, index) => setLanguageHeard(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Hebrew" value="Hebrew" />
                        <Picker.Item label="Spanish" value="Spanish" />
                    </Picker>
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Language Written</Text>
                    <Picker
                        selectedValue={LanguageWritten}
                        onValueChange={(value, index) => setLanguageWritten(value)}
                        style={styles.picker}
                    >
                        <Picker.Item style={styles.pickerItem} label="English" value="English" />
                        <Picker.Item label="Hebrew" value="Hebrew" />
                        <Picker.Item label="Spanish" value="Spanish" />
                    </Picker>
                </View>
                <View style={styles.footerContainer}>
                    <DownButton label="Save" />
                    <DownButton label="Cancel" />
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
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
    },
    screen: {
        alignItems: 'center',
        marginTop: 30,
    },
    text: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 15,
    },
    picker: {
        width: 400,
        padding: 10,
        borderWidth: 2,
        borderColor: '#074145',
        borderRadius: 10,
    },
});