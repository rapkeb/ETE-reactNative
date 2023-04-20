// Aboutscreen.js
import React, {useEffect, useState} from "react";
import {ImageBackground, View, Text, StyleSheet, Alert} from "react-native";
import Button from "../Button"
import {Picker} from "@react-native-picker/picker";
import DownButton from "../DownButton";
import {db} from "../FirebaseConfig";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

export default function SettingsScreen({navigation, route}) {
    const [WorkingMode, setWorkingMode] = useState("");
    const [TextSize, setTextSize] = useState(null);
    const [TextStyle, setTextStyle] = useState("");
    const [TextColor, setTextColor] = useState("");
    const [TextLocation, setTextLocation] = useState("");
    const uid = route.params.uid;

    useEffect(() => {
        const userRef = db.ref("users").orderByChild("uid").equalTo(uid);
        const listener = userRef.on("value", (snapshot) => {
            const userData = snapshot.val();
            const userId = Object.keys(userData)[0];
            setWorkingMode(userData[userId].WorkingMode);
            setTextSize(userData[userId].TextSize);
            setTextStyle(userData[userId].TextStyle);
            setTextColor(userData[userId].TextColor);
            setTextLocation(userData[userId].TextLocation);

        });
        return () => userRef.off("value", listener);
    }, [uid]);

    const onSave = async () => {
        try {
            const uid = route.params.uid;
            const userRef = db.ref("users");
            const snapshot = await userRef.orderByChild("uid").equalTo(uid).once("value");

            if (snapshot.exists()) {
                const userKey = Object.keys(snapshot.val())[0];
                await userRef.child(userKey).update({
                    WorkingMode: WorkingMode,
                    TextSize: TextSize,
                    TextStyle: TextStyle,
                    TextColor: TextColor,
                    TextLocation: TextLocation
                });
            }
            Alert.alert("saved")
        } catch (error) {
            console.log(error.message);
        }
    };

    const onCancel = async () => {
        try {
            const uid = route.params.uid;
            const userRef = db.ref('users');
            await userRef.orderByChild('uid').equalTo(uid).once('value', (snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const userId = Object.keys(userData)[0];
                    setWorkingMode(userData[userId].WorkingMode);
                    setTextSize(userData[userId].TextSize);
                    setTextStyle(userData[userId].TextStyle);
                    setTextColor(userData[userId].TextColor);
                    setTextLocation(userData[userId].TextLocation);
                } else {
                    console.log('User not found');
                }
            });
            Alert.alert("The changes have been saved")
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Main",  { uid: uid })} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language",  { uid: uid })} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings",  { uid: uid })} />
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Working mode</Text>
                    <Picker
                        selectedValue={WorkingMode}
                        onValueChange={(value, index) => setWorkingMode(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Home" value="Home" />
                        <Picker.Item label="Outside" value="Outside" />
                    </Picker>
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Text size</Text>
                    <Picker
                        selectedValue={TextSize}
                        onValueChange={(value, index) => setTextSize(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="12" value="12" />
                        <Picker.Item label="16" value="16" />
                    </Picker>
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Text style</Text>
                    <Picker
                        selectedValue={TextStyle}
                        onValueChange={(value, index) => setTextStyle(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Italic" value="Italic" />
                        <Picker.Item label="Ariel" value="Ariel" />
                    </Picker>
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Text color</Text>
                    <Picker
                        selectedValue={TextColor}
                        onValueChange={(value, index) => setTextColor(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="White" value="White" />
                        <Picker.Item label="Black" value="Black" />
                    </Picker>
                </View>
                <View style={styles.screen}>
                    <Text style={styles.text}>Text location</Text>
                    <Picker
                        selectedValue={TextLocation}
                        onValueChange={(value, index) => setTextLocation(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Center" value="Center" />
                        <Picker.Item label="Bottom" value="Bottom" />
                    </Picker>
                </View>
                <View style={styles.footerContainer}>
                    <DownButton label="Save" onPress={onSave}/>
                    <DownButton label="Cancel" onPress={onCancel}/>
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
        marginTop: 25,
        flexDirection: "row",
        marginLeft: '3%',
    },
    text: {
        fontSize: 25,
        color: '#fff',
        marginRight: 10,
    },
    picker: {
        width: 200,
        padding: 10,
        borderWidth: 2,
        borderColor: '#074145',
        borderRadius: 10,
        marginRight: 15,
    },
});