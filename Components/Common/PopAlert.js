import { Alert } from 'react-native';

export default function PopAlert({
    title = "Alert Test Title",
    message = "Alert Test Message",
    onPressOK = () => console.log("Cancel Pressed"),
    onPressCancel = () => console.log("OK Pressed") }) {

    return (
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    onPress: onPressCancel,
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: onPressOK
                }
            ],
            { cancelable: false }
        )
    );
}