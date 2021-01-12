import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


export default function LectureNew() {

    const [country, setCountry] = useState('uk');

    return (
        <SafeAreaView style={styles.container}>
            <DropDownPicker
                items={[
                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                ]}
                defaultValue={country}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => {
                    setCountry(item.value);
                    console.log("선택된 아이템 : ", item.value);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
})