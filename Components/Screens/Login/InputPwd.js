import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

export default function InputPwd({data, handlePasswordChange, updateSecureTextEntry}) {
    return (
        <>
            {/* 패스워드 입력란 */}
            <Text style={[styles.sectionName, { marginTop: 35 }]}>패스워드</Text>
            <View style={styles.inputContainer}>
                <Feather name="lock" color="#000" size={20} />
                <TextInput style={styles.textInput}
                    placeholder="Your Password"
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry} //텍스트 보이냐 숨기냐가 secureTextEntry state로 결정됨
                    onChangeText={(pw) => handlePasswordChange(pw)} //입력값이 password state에 반영됨.
                />

                {/* 눈 아이콘 클릭 마다 패스워드 보일지 숨길지 토글 */}
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                        <Feather name="eye-off" color="gray" size={20} />
                        : <Feather name="eye" color="gray" size={20} />}
                </TouchableOpacity>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    sectionName: {
        color: "#000",
        fontSize: 18
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: "#000",
    },
});
