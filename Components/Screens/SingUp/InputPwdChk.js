
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export default function InputPwdChk({ data, textConrifmPasswordChange, updateChkSecure }) {
    return (
        <>
            {/* 패스워드 확인란 */}
            <Text style={styles.text_footer}>패스워드 확인</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#000" size={20} />
                <TextInput style={styles.textInput}
                    placeholder="Confirm Your Password"
                    autoCapitalize="none"
                    secureTextEntry={data.chk_secure} //텍스트 보이냐 숨기냐가 secureTextEntry state로 결정됨
                    onChangeText={(chk_pw) => textConrifmPasswordChange(chk_pw)} //입력값이 password state에 반영됨.
                />

                {/* 눈 아이콘 클릭 마다 패스워드 보일지 숨길지 토글 */}
                <TouchableOpacity onPress={updateChkSecure}>
                    {data.chk_secure ?
                        <Feather name="eye-off" color="gray" size={20} />
                        : <Feather name="eye" color="gray" size={20} />}
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    text_footer: {
        color: '#000',
        fontSize: 18
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
