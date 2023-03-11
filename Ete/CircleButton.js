import {View, Pressable, StyleSheet, Text} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CircleButton({ onPress, label }) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <FontAwesome
                    name="microphone"
                    size={30}
                    color="#074145"
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#074145',
        borderRadius: 50,
        padding: 5,
        marginTop: '15%',
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
    },
});