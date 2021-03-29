import React from 'react';
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
import {Searchbar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TagList from 'Components/common/Tags';
import { CCardLecture } from 'Containers/Screens/Student/LectureListContainer';

const sampleImg = require('../../../asset/lecture1.jpg');
const heartIcon = require('../../../asset/heart-mind.png');

export const PCardLecture = ({
  lecture,
  onPressLecture,
  heart,
  onPressHeart,
}) => {
  const {imageURL, id, title, groupName, certificateKind, price} = lecture;
  const representativeImage = imageURL[0];

  return (
    <View style={cardStyles.cardContainer}>
      <TouchableOpacity onPress={onPressLecture} >
        <View style={cardStyles.imageContainer}>
          <Image
            source={{ uri: representativeImage }} // source={sampleImg} // 샘플이미지
            style={cardStyles.image}
          />
          <View style={heart ? cardStyles.heartOn : cardStyles.heartOff}>
            <TouchableOpacity onPress={onPressHeart}>
              <Image source={heartIcon} style={cardStyles.heartImage} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={cardStyles.title}>{title}</Text>
        <TagList tags={[groupName, certificateKind]} />
        <View style={cardStyles.scheduleContainer}>
          <Text style={cardStyles.scheduleText}>12.19</Text>
          <Text style={cardStyles.scheduleText}>잠실수영장</Text>
        </View>
        <Text style={cardStyles.price}>{`₩${price}`}</Text>
      </TouchableOpacity>
    </View>
  );
};
const cardStyles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 215,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
  },
  imageContainer: {
    width: 160,
    height: 110,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heartImage: { width: 30, height: 30 },
  heartOn: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'red',
  },
  heartOff: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'grey',
  },
  title: { fontSize: 17, padding: 5 },
  scheduleContainer: { flexDirection: 'row', marginTop: 3 },
  scheduleText: { padding: 2, marginLeft: 5, color: 'gray' },
  price: {
    padding: 3,
    marginLeft: 5,
    fontSize: 18,
    color: '#0035A0',
    fontWeight: '600',
  },
});

export default function PLectureList({
  lectures,
  searchText,
  onSearchInput,
  onPressLecture,
}) {
  const array = [];

  for (let i = 0; i < lectures.length; i += 1) {
    array.push(
      <CCardLecture key={i} lecture={lectures[i]} onPressLecture={onPressLecture} />,
    );
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* 서치바 */}
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="검색"
          onChangeText={onSearchInput}
          value={searchText}
        />
      </View>


      {/* 상품 리스트 출력 */}
      <ScrollView style={styles.heightScroll}>
        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              {array}
            </ScrollView>
          ) : null}
        </View>

        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              {array}
            </ScrollView>
          ) : null}
        </View>

        {/* 현재 모집중인 강의 */}
        <View style={styles.saleContainer}>
          <Text style={styles.saleTitle}>현재 모집중인 강의</Text>
          {lectures.length !== 0 ? (
            <ScrollView horizontal style={styles.listContainer}>
              {array}
            </ScrollView>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { backgroundColor: 'white', flex: 1 },
  searchBarContainer: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#00BCD4',
  },
  heightScroll: { height: '100%' },
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
});
