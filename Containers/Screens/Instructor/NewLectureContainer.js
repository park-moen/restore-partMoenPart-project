import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import SelectButton from '../../common/SelectButton';
import TextInputContainer from '../../common/TextInputContainer';
import ImagePicker from '../../common/ImagePicker';

import BottomButtons from '../../common/BottomButtons';

export default function NewLectureContainer({ navigation }) {
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [association, setAssociation] = useState('');
  const [certificate, setCertificate] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const [lectureTitle, setLectureTitle] = useState('');
  const [lectureContent, setLectureContent] = useState('');

  const [image, setImage] = useState('');

  const areaList = [
    '서울',
    '경기',
    '인천',
    '부산',
    '경상, 대구, 울산',
    '대전, 충청',
    '강원',
    '광주,전라,제주',
    '온라인',
  ];

  const categoryList = ['프리다이빙', '스쿠버 다이빙'];

  const associationList = ['AIDA', 'PADI', 'SSI'];

  const certificateList = ['level1', 'level2', 'level3', 'level4'];

  // 인원수 1부터 시작
  const personNumber = Array.from({ length: 50 }, (v, i) => i + 1);

  // 상태 모음 (다음 화면으로 전달 목적)
  const data = {
    area,
    category,
    association,
    certificate,
    max,
    lectureTitle,
    lectureContent,
    image,
  };

  const onLeftButton = () => {
    navigation.goBack();
  };
  const onRightButton = () => {
    navigation.navigate('LectureFeeAndEquipments', {
      data,
      image,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient colors={['lightgray', 'gray']} style={{flex:1}}> */}
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <SelectButton
          placeholder="수업이 진행되는 지역을 선택하세요."
          title="수업 지역"
          data={areaList}
          choice={area}
          setChoice={setArea}
          style={{ marginBottom: 10 }}
        />
        <SelectButton
          placeholder="수업 종류를 선택하세요."
          title="수업 카테고리"
          data={categoryList}
          choice={category}
          setChoice={setCategory}
          style={{ marginBottom: 10 }}
        />
        <SelectButton
          placeholder="자격 단체명을 선택하세요."
          title="자격 단체명"
          data={associationList}
          choice={association}
          setChoice={setAssociation}
          style={{ marginBottom: 10 }}
        />
        <SelectButton
          placeholder="자격증 종류를 선택하세요."
          title="자격증 종류"
          data={certificateList}
          choice={certificate}
          setChoice={setCertificate}
          style={{ marginBottom: 10 }}
        />

        <View style={{ flexDirection: 'row' }}>
          <SelectButton
            placeholder="수업 최소 인원"
            title="수업 최소 인원"
            data={personNumber}
            choice={min}
            setChoice={setMin}
            style={{ marginBottom: 10, flex: 1, marginRight: 10 }}
          />
          <SelectButton
            placeholder="수업 최대 인원"
            title="수업 최대 인원"
            hideTitle={false}
            data={personNumber}
            choice={max}
            setChoice={setMax}
            style={{ marginBottom: 10, flex: 1 }}
          />
        </View>

        <TextInputContainer
          onTextChange={setLectureTitle}
          title="수업 제목"
          placeholder="수업제목을 입력하세요."
          style={{ flex: 1, marginBottom: 10 }}
        />
        <ImagePicker
          title="강의 커버 이미지"
          images={image}
          setImages={setImage}
        />
        <TextInputContainer
          onTextChange={setLectureContent}
          title="수업 내용"
          placeholder="수업내용을 입력하세요."
          style={{ flex: 1, marginBottom: 10 }}
          multiline={true}
        />
      </ScrollView>

      <BottomButtons
        TextLeft="이전"
        TextRight="다음"
        onPressLeft={onLeftButton}
        onPressRight={onRightButton}
      />
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
