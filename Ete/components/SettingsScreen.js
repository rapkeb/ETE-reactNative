// Aboutscreen.js
import React, { useState } from "react";
import {ImageBackground, View, Text, StyleSheet} from "react-native";
import Button from "../Button"
import {Picker} from "@react-native-picker/picker";
import DownButton from "../DownButton";

const BackgroundImage = require('../assets/BackgroundImage.jpg');

export default function SettingsScreen({navigation}) {
    const [WorkingMode, setWorkingMode] = useState("Home");
    const [TextSize, setTextSize] = useState("12");
    const [TextStyle, setTextStyle] = useState("Italic");
    const [TextColor, setTextColor] = useState("White");
    const [TextLocation, setTextLocation] = useState("Center");
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerContainer}>
                    <Button theme="primary" label="Home" onPress={() => navigation.navigate("Home")} />
                    <Button theme="primary" label="Language" onPress={() => navigation.navigate("Language")} />
                    <Button theme="primary" label="Settings" onPress={() => navigation.navigate("Settings")} />
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