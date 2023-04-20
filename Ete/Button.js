import React from 'react';
import { View, Pressable, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button({ label, theme, onPress }) {


    //const MyButton = ({ theme, label, onPress }) => {
        const { height } = Dimensions.get('window');
        console.log(height);
        if (theme === "primary" && label ==="Settings") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: '#074145', borderRadius: 20, top: height * 0.01 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <FontAwesome name='cogs' size={18} color='#074145' style={styles.buttonIcon} />
                            <Text style={[styles.buttonLabel]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            );
        }
        else if (theme === "primary" && label ==="Home") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: '#074145', borderRadius: 20, top: height * 0.01 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <FontAwesome name='home' size={18} color='#074145' style={styles.buttonIcon} />
                            <Text style={[styles.buttonLabel]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            );
        }
        else if (theme === "primary" && label ==="Language") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: '#074145', borderRadius: 20, top: height * 0.03 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <FontAwesome name='globe' size={18} color='#074145' style={styles.buttonIcon} />
                            <Text style={[styles.buttonLabel]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            );
        }
        else if (theme === "primary" && label ==="Sign In") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonCenter, { borderWidth: 3, borderColor: "#074145", borderRadius: 20, top: height * 0.01 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            );
        }
        else if (theme === "primary" && label ==="Sign Up") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonCenter, { borderWidth: 3, borderColor: "#074145", borderRadius: 20, top: height * 0.01 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            );
        }
        else if (theme === "primary" && label ==="Log Out") {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={[styles.buttonCenter, { borderWidth: 3,width: '50%', alignSelf: 'center', borderColor: "#074145", borderRadius: 20, bottom: height * 0.05 }]}>
                        <Pressable style={[styles.button]} onPress={onPress}>
                            <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
                /*<View
                    style={[styles.buttonCenter, { borderWidth: 3, , borderColor: "#074145", borderRadius: 100, marginBottom:-60 ,marginTop: 5}]}
                >
                    <Pressable
                        style={[styles.button]}
                        onPress={onPress}
                    >
                        <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                    </Pressable>
                </View>*/
            );
        }
        //return null;
    //};

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCenter: {
        position: 'absolute',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 5,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 18,
    },
    buttonLabelCenter: {
        color: '#fff',
        fontSize: 20,
    },

});