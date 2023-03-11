import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function DownButton({ label, onPress }) {
    if (label ==="Save") {
        return (
            <View
                style={[styles.saveButtonContainer, { borderWidth: 1, borderColor: "#074145", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <Text style={[styles.buttonLabel]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    else  {
        return (
            <View
                style={[styles.cancelButtonContainer, { borderWidth: 1, borderColor: "#074145", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button]}
                    onPress={onPress}
                >
                    <Text style={[styles.buttonLabel]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    saveButtonContainer: {
        width: '26%',
        height: 50,
        marginHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        marginLeft: '16%',
        backgroundColor: '#17a',
    },
    cancelButtonContainer: {
        width: '26%',
        height: 50,
        marginHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        marginLeft: '16%',
        backgroundColor: '#557',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 18,
    },
});