import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
    if (theme === "primary" && label ==="Settings") {
        return (
            <View
                style={[styles.buttonContainer, { borderWidth: 1, borderColor: "#074145", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="cogs"
                        size={18}
                        color="#074145"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "primary" && label ==="Home") {
        return (
            <View
                style={[styles.buttonContainer, { borderWidth: 1, borderColor: "#074145", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="home"
                        size={18}
                        color="#074145"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "primary" && label ==="Language") {
        return (
            <View
                style={[styles.buttonContainer, { borderWidth: 1, borderColor: "#074145", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="globe"
                        size={18}
                        color="#074145"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "primary" && label ==="Sign In") {
        return (
            <View
                style={[styles.buttonCenter, { borderWidth: 3, marginHorizontal: '10%', borderColor: "#074145", borderRadius: 20, marginTop: 100, }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "primary" && label ==="Sign Up") {
        return (
            <View
                style={[styles.buttonCenter, { borderWidth: 3, marginHorizontal: '-8%', borderColor: "#074145", borderRadius: 20, marginTop: 100, }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else if (theme === "primary" && label ==="Log Out") {
        return (
            <View
                style={[styles.buttonCenter, { borderWidth: 3, marginHorizontal: '28%', borderColor: "#074145", borderRadius: 100, marginBottom:-60 ,marginTop: 5}]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <Text style={[styles.buttonLabelCenter]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
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
        width: '30%',
        height: 50,
        marginHorizontal: '1.5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCenter: {
        width: '40%',
        height: 50,
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