/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TagList from '@legacy_components/common/Tags';
import { CCardLecture } from '@legacy_cStudent/LectureListContainer';
import CModal from '@legacy_cCommon/CModal';

// const sampleImg = require('@assets/lecture1.jpg');
const heartIcon = require('@assets/heart-mind.png');

export const PCardLecture = ({
  lecture,
  onPressLecture,
  heart,
  onPressHeart,
}) => {
  const { imageURL, id, title, groupName, certificateKind, price } = lecture;
  const representativeImage = imageURL[0];

  return (
    <View style={cardStyles.cardContainer}>
      <TouchableOpacity onPress={() => onPressLecture({ id })}>
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

const EachFilter = ({
  radioProps = [{ label: 'test' }],
  onDateSelect = () => {},
}) => {
  const [selected, setSelected] = useState(0);
  const onPress = num => {
    setSelected(num);
    onDateSelect(num);
  };
  return (
    <View style={stylesEachFilter.container}>
      {radioProps.map((obj, i) => (
        <RadioButton
          labelHorizontal
          key={i}
          style={stylesEachFilter.buttonContainer}
        >
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={selected === i}
            onPress={onPress}
            borderWidth={2}
            buttonInnerColor="#2295FF"
            buttonOuterColor={selected === i ? '#2196f3' : '#000'}
            buttonSize={20}
            buttonOuterSize={23}
            buttonStyle={{}}
            buttonWrapStyle={{}}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal
            onPress={onPress}
            labelStyle={{
              fontSize: 20,
              color: 'black',
            }}
            labelWrapStyle={{}}
          />
        </RadioButton>
      ))}
    </View>
  );
};
const stylesEachFilter = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 20,
    padding: 5,
    borderWidth: 0.3,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
  },
  buttonContainer: { margin: 10 },
});

export default function PLectureList({
  lectures,
  searchText,
  onSearchInput,
  onPressLecture,
  modalOpen,
  modalClose,
  modalVisible,
  updateFilter,
}) {
  const array = [];
  const [selectedFilter, setSelectedFilter] = useState({});
  for (let i = 0; i < lectures.length; i += 1) {
    array.push(
      <CCardLecture
        key={i}
        lecture={lectures[i]}
        onPressLecture={onPressLecture}
      />,
    );
  }

  const region = [
    { label: '서울', value: 0 },
    { label: '경기', value: 1 },
    { label: '인천', value: 2 },
    { label: '부산', value: 3 },
    { label: '경상, 대구, 울산', value: 4 },
    { label: '대전, 충청', value: 5 },
    { label: '강원', value: 6 },
    { label: '광주, 전라, 제주', value: 7 },
    { label: '온라인', value: 8 },
  ];

  const certificateKind = [
    { label: 'level1', value: 0 },
    { label: 'level2', value: 1 },
    { label: 'level3', value: 2 },
    { label: 'level4', value: 3 },
  ];

  const groupName = [
    { label: 'AIDA', value: 0 },
    { label: 'PADI', value: 1 },
    { label: 'SSI', value: 2 },
  ];

  const onRegionSelect = num => {
    const { label } = region[num];
    const newSelectedFilter = Object.assign(selectedFilter, {
      region: label,
    });
    setSelectedFilter(newSelectedFilter);
    console.log('필터현황', selectedFilter);
  };

  const onCertificateKindSelect = num => {
    const { label } = certificateKind[num];
    const newSelectedFilter = Object.assign(selectedFilter, {
      certificateKind: label,
    });
    setSelectedFilter(newSelectedFilter);
    console.log('필터현황', selectedFilter);
  };

  const onGroupNameSelect = num => {
    const { label } = groupName[num];
    const newSelectedFilter = Object.assign(selectedFilter, {
      groupName: label,
    });
    setSelectedFilter(newSelectedFilter);
    console.log('필터현황', selectedFilter);
  };

  const onFilterOk = () => {
    const {
      region,
      costCondition,
      certificateKind,
      groupName,
    } = selectedFilter;
    updateFilter({
      region,
      costCondition,
      certificateKind,
      groupName,
    });
    modalClose();
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* 서치바 */}
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="검색"
          onChangeText={onSearchInput}
          value={searchText}
          style={styles.searchBar}
        />
        <FontAwesome
          name="filter"
          style={{ alignSelf: 'center', padding: 5 }}
          size={25}
          color="blue"
          onPress={modalOpen}
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
      <CModal
        modalClose={modalClose}
        modalVisible={modalVisible}
        title="필터 선택"
        animation="fadeInDown"
      >
        <>
          <Text style={styles.filterTitle}>지역선택</Text>
          {EachFilter({ radioProps: region, onDateSelect: onRegionSelect })}
          <Text style={styles.filterTitle}>자격증 종류</Text>
          {EachFilter({
            radioProps: certificateKind,
            onDateSelect: onCertificateKindSelect,
          })}
          <Text style={styles.filterTitle}>자격 단체</Text>
          {EachFilter({
            radioProps: groupName,
            onDateSelect: onGroupNameSelect,
          })}
        </>
        <TouchableOpacity style={styles.filterOkButton} onPress={onFilterOk}>
          <Text style={styles.filterOkButtonText}>확인</Text>
        </TouchableOpacity>
      </CModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { backgroundColor: 'white', flex: 1 },
  searchBarContainer: {
    width: '100%',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
  },
  heightScroll: { height: '100%' },
  searchBar: {
    height: 40,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F5F8FD',
    padding: 10,
    marginRight: 7,
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
  filterTitle: {
    padding: 5,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 3,
  },
  filterOkButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    padding: 10,
    marginBottom: -10,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    backgroundColor: 'lightblue',
  },
  filterOkButtonText: { fontSize: 17 },
});
