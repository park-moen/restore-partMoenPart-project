import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function Buttons({ btnLogin, btnSignup }) {
    return (
        <>
            {/* 버튼 */}
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={btnLogin}
                >
                    <LinearGradient colors={['#000', "#000"]} style={styles.button} >
                        <Text style={[styles.buttonText, { color: '#fff' }]}>로그인</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* 회원가입 버튼 */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={btnSignup}
                >
                    <Text style={[styles.buttonText, { color: "#000" }]}>
                        회원가입
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
