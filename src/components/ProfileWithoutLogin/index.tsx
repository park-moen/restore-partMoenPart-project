import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Entype from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ProfileWithoutLogin = () => {
  const menuList = [
    { id: 'notice', content: '공지사항', navigateTo: 'Notice' },
    { id: 'Q&A', content: '자주 묻는 질문', navigateTo: 'Q&A' },
    { id: 'policy', content: '약관 및 정책', navigateTo: 'Policy' },
  ];
  return (
    <View style={styles.container}>
      {/* 로그인하기 회원가입하기 */}
      <View style={styles.upperContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>로그인하고</Text>
          <Text style={styles.title}>나만의 다이빙 일정을 관리해보세요!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: '#207AB4', borderColor: '#207AB4' },
            ]}
          >
            <Text style={[styles.buttonText, { color: '#FEFEFE' }]}>
              로그인하기
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: '#FFFFFF', borderColor: '#CCD7DF' },
            ]}
          >
            <Text style={[styles.buttonText, { color: '#6A6D70' }]}>
              회원가입하기
            </Text>
          </Pressable>
        </View>
      </View>

      {/* 메뉴 리스트 */}
      <View style={styles.lowerContainer}>
        <FlatList
          data={menuList}
          renderItem={({ item }) => (
            <Pressable
              key={item.id}
              style={styles.menu}
              onPress={() => console.warn(item.navigateTo)}
            >
              <Text style={styles.menuText}>{item.content}</Text>
              <Entype name="chevron-small-right" size={17} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default ProfileWithoutLogin;
