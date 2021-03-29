import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TagList from 'Components/common/Tags';
import { LectureListAPIFunc } from 'lib/api/Lecture';

const sampleImg = require('../../../asset/lecture1.jpg');
const heartIcon = require('../../../asset/heart-mind.png');

export default function LectureListContainer({ route, navigation }) {
  const [searchText, setSearchText] = useState('');
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    async function getLectures() {
      const {
        region,
        costCondition,
        certificateKind,
        groupName,
      } = route.params;

      const lectureByRegionResList = await LectureListAPIFunc({
        region,
        costCondition,
        certificateKind,
        groupName,
        page: 0,
        size: 5,
      });

      setLectures(lectureByRegionResList);
    }
    getLectures();
  }, [route.params]);

  const onSearchInput = input => {
    setSearchText(input);
    // // console.log('검색어 : ', input);
  };

  const PrintLectures = () => {
    const array = [];

    for (let i = 0; i < lectures.length; i += 1) {
      // eslint-disable-next-line no-unused-vars
      const imageUri = lectures[i].imageURL[0];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [heart, setHeart] = useState(false);
      array.push(
        <View style={styles.eachProductContainer} key={i}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              // // console.log('강의 누름');
              navigation.navigate('LectureDetail', { id: lectures[i].id });
            }}
          >
            <View
              style={{
                width: 160,
                height: 110,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Image
                source={sampleImg} // source={{ uri: imageUri }} 실제 s3에서 이미지 가져오는 코드
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <View
                style={
                  ({
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    borderRadius: 15,
                    backgroundColor: 'red',
                  },
                  heart
                    ? {
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        borderRadius: 15,
                        backgroundColor: 'red',
                      }
                    : {
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        borderRadius: 15,
                        backgroundColor: 'grey',
                      })
                }
              >
                <TouchableOpacity
                  onPress={() => {
                    setHeart(!heart);
                    // // console.log('찜하기 눌렀다.');
                  }}
                >
                  <Image source={heartIcon} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ fontSize: 17, padding: 5 }}>
              {lectures[i].title}
            </Text>
            <TagList
              tags={[lectures[i].groupName, lectures[i].certificateKind]}
            />
            <View style={{ flexDirection: 'row', marginTop: 3 }}>
              <Text style={{ padding: 2, marginLeft: 5, color: 'gray' }}>
                12.19
              </Text>
              <Text style={{ padding: 2, marginLeft: 5, color: 'gray' }}>
                잠실수영장
              </Text>
            </View>
            <Text
              style={{
                padding: 3,
                marginLeft: 5,
                fontSize: 18,
                color: '#0035A0',
                fontWeight: '600',
              }}
            >
              {`₩${lectures[i].price}`}
            </Text>
          </TouchableOpacity>
        </View>,
      );
    }

    return array;
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {/* 서치바 */}
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="검색하기"
          style={styles.searchBar}
          value={searchText}
          onChangeText={onSearchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* 상품 리스트 출력 */}
      <ScrollView style={{ height: '100%' }}>
        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              <PrintLectures />
            </ScrollView>
          ) : null}
        </View>

        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              <PrintLectures />
            </ScrollView>
          ) : null}
        </View>

        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              <PrintLectures />
            </ScrollView>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#00BCD4',
  },
  searchBar: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#F5F8FD',
    padding: 10,
  },
  searchButton: {
    borderWidth: 1,
    backgroundColor: '#126881',
    borderRadius: 10,
    padding: 5,
  },

  saleContainer: {
    height: 280,
    borderWidth: 0,
    backgroundColor: '#F5F8FD',
  },
  saleTitle: {
    fontSize: 20,
    padding: 10,
  },
  listContainer: {
    borderWidth: 1,
    height: 60,
    width: '100%',
    backgroundColor: 'green',
    padding: 3,
  },

  eachProductContainer: {
    width: 160,
    height: 215,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
  },
});
