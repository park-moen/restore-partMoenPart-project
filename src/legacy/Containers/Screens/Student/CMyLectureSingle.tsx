import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MyList } from '@/src/legacy/lib/redux/reducers/studentMyListReducer';
import TagList, { Tag } from '@legacy_components/common/Tags';
import { IconButton } from '@legacy_cCommon/Button';
import NMapModal from '@legacy_cCommon/NMapModal';

import { studentMyLectureDetailAPI } from '@/src/legacy/lib/api/Lecture';

type Props = {
  lectureInfo: MyList;
};

export default function CMyLectureSingle({ lectureInfo }: Props): ReactElement {
  const [isMore, setIsMore] = useState(false);
  const [detailInfo, setDetailInfo] = useState({
    description: '',
    equipmentNameList: [],
    reservationScheduleList: [],
  });

  const {
    dateOfReservation,
    isMultipleCourse,
    lectureTitle,
    reservationId,
    totalCost,
  } = lectureInfo;

  type ReservationDetail = {
    description: string;
    equipmentNameList: string[];
    reservationScheduleList: Object[];
  };
  const onMorePressed = async () => {
    const newIsMore = !isMore;
    setIsMore(newIsMore);
    if (newIsMore) {
      const res = await studentMyLectureDetailAPI(reservationId);
      const {
        description,
        equipmentNameList,
        reservationScheduleList,
      }: any = res;

      setDetailInfo({
        description,
        equipmentNameList,
        reservationScheduleList,
      });
      console.log('Detail: ', res);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={onMorePressed}>
        <Text style={styles.title}>{lectureTitle}</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <IconButton
            name={isMore ? 'caret-up-circle' : 'caret-down-circle'}
            size={30}
            onPress={onMorePressed}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.tagContainer}>
        <Tag
          tagName={isMultipleCourse ? '다회차 강의' : '단회차 강의'}
          containerStyle={isMultipleCourse ? styles.pinkTag : styles.blueTag}
        />
        <Text style={styles.price}>{`₩${totalCost}`}</Text>
        {isMore ? null : (
          <View style={{ alignSelf: 'flex-end', flex: 1 }}>
            <Text style={styles.dateText}>{dateOfReservation}</Text>
          </View>
        )}
      </View>
      {isMore ? (
        <View style={styles.moreContainer}>
          <Text style={styles.subTitle}>일정</Text>
          <Schedules schedules={detailInfo.reservationScheduleList} />
          {detailInfo.equipmentNameList.length !== 0 && (
            <>
              <Text style={styles.subTitle}>대여장비</Text>
              <TagList
                tags={detailInfo.equipmentNameList}
                containerStyle={{ padding: 5 }}
              />
            </>
          )}
          {detailInfo.description.length !== 0 && (
            <Text style={styles.description}>{detailInfo.description}</Text>
          )}
        </View>
      ) : null}
    </View>
  );
}

const Schedules = ({ schedules }: any) => {
  const result: ReactElement[] = [];
  schedules.forEach((singleDay: any, i: number) => {
    const {
      date,
      location,
      time,
    }: {
      date: any;
      location: { address: string; latitude: number; longitude: number };
      time: any;
    } = singleDay;
    const [mapVisible, setMapVisible] = useState(false);
    const gps = { latitude: location.latitude, longitude: location.longitude };
    const onMapView = () => {
      setMapVisible(true);
    };
    const onMapExit = () => {
      setMapVisible(false);
    };
    result.push(
      <View
        key={i}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}
      >
        <Text style={{ flex: 1 }}>{date}</Text>
        <Text style={{ flex: 1 }}>{time}</Text>
        <Text style={{ flex: 1 }}>{location.address}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mapButton} onPress={onMapView}>
            <Text>지도보기</Text>
          </TouchableOpacity>
        </View>
        <NMapModal
          picker={gps}
          visible={mapVisible}
          onPressExit={onMapExit}
          title={'test'}
        />
      </View>,
    );
  });
  const test = {
    date: '2021-04-13',
    location: {
      address: '잠실수영장',
      latitude: 37.57600250757227,
      longitude: 126.97230987261912,
    },
    time: '02:30:00',
  };
  console.log('schedules', schedules);
  return result;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  moreContainer: { paddingTop: 10, marginTop: 15, borderTopWidth: 1 },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '600',
    padding: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  pinkTag: { backgroundColor: 'deeppink' },
  blueTag: { backgroundColor: '#0095FF' },
  price: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    fontSize: 16,
  },
  dateText: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
  description: {
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 8,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: '#D7D8D8',
    overflow: 'hidden',
  },
  buttonContainer: {
    height: 35,
    alignItems: 'flex-end',
    flex: 1,
  },
  mapButton: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 7,
    padding: 8,
    backgroundColor: '#3CC83B',
    alignItems: 'center',
  },
});
