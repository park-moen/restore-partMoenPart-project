import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

export default function InputEmail({ data, textEmailChange }) {
    return (
        <>
            {/* 이메일 입력란 */}
            <Text style={styles.text_footer}> 이메일</Text >
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#000" size={20} />
                <TextInput style={styles.textInput}
                    placeholder="Your Email"
                    autoCapitalize="none"
                    onChangeText={(email) => textEmailChange(email)} //입력값이 email state에 반영됨.
                />

                {/* 입력값이 있을 경우에만 체크 마크 띄우도록 */}
                {data.chk_email ?
                    <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="#000" size={20} />
                    </Animatable.View>
                    : null}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    text_footer: {
        color: '#000',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom:20,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000',
    },
});
