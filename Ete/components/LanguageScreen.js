// Aboutscreen.js
import React, {useEffect, useState} from "react";
import {ImageBackground, View, Text, StyleSheet} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../Button"
import DownButton from "../DownButton"
import {db} from "../FirebaseConfig";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

export default function LanguageScreen({navigation, route}) {
    const [LanguageHeard, setLanguageHeard] = useState("");
    const [LanguageWritten, setLanguageWritten] = useState("");
    const uid = route.params.uid;

    useEffect(() => {
        const userRef = db.ref("users").orderByChild("uid").equalTo(uid);
        const listener = userRef.on("value", (snapshot) => {
            const userData = snapshot.val();
            const userId = Object.keys(userData)[0];
            setLanguageHeard(userData[userId].LanguageHeard);
            setLanguageWritten(userData[userId].LanguageWritten);
        });
        return () => userRef.off("value", listener);
    }, [uid]);
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Main", { uid: uid })} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language", { uid: uid })} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings", { uid: uid })} />
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