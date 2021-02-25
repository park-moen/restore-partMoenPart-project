import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native-animatable';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TextInputContainer from '../../../Containers/common/TextInputContainer';
import {
  NMapGeocodingAPI,
  NMapClientID,
  NMapClientSecret,
} from '../../../config/strings';

const SearchedButtonList = ({
  addresses = [],
  navigation,
  onPress = () => {},
}) => {
  const result = [];

  // console.log('test', addresses);
  addresses.forEach((element, index) => {
    console.log('인덱스 : ', index, ' 값 :  ', element.roadAddress);
    console.log('인덱스 : ', index, ' 값 :  ', element.jibunAddress);
    console.log('인덱스 : ', index, ' 값 :  ', element.englishAddress);
    console.log('인덱스 : ', index, ' 값 :  ', element.x, element.y);

    result.push(
      <TouchableOpacity
        style={styles.searchedSingle}
        onPress={() =>
          onPress({
            longitude: parseFloat(element.x),
            latitude: parseFloat(element.y),
          })
        }
      >
        <View style={styles.locationIcon}>
          <Ionicons name="location-sharp" size={28} />
        </View>
        <View>
          <Text style={styles.roadText}>도로명 : {element.roadAddress}</Text>
          <Text style={styles.jibunText}>지번 : {element.jibunAddress}</Text>
          {/* <Text style={styles.englishText}>Singil-dong, Yeongdeungpo-gu, Seoul, Republic of Korea</Text> */}
        </View>
      </TouchableOpacity>,
    );
    /*
        인덱스 :  0  값 :   서울특별시 영등포구 신길동
        인덱스 :  0  값 :   서울특별시 영등포구 신길동
        인덱스 :  0  값 :   Singil-dong, Yeongdeungpo-gu, Seoul, Republic of Korea
        인덱스 :  0  값 :   126.9214285 37.5112667
        */
  });

  return result;
};

export default function NMapSearch({ navigation, route }) {
  const [input, setInput] = useState('');
  const [addresses, setAddresses] = useState([]);

  const onSearch = async () => {
    console.log('검색 버튼 누름');
    const result = await axios.get(NMapGeocodingAPI, {
      headers: {
        'X-NCP-APIGW-API-KEY-ID': NMapClientID,
        'X-NCP-APIGW-API-KEY': NMapClientSecret,
      },
      params: {
        query: input,
      },
    });
    // console.log("NMap API result : ", result.data);
    const addresses = result.data.addresses; //검색된 주소 오브젝트 배열
    setAddresses(addresses);
    console.log('addresses : ', addresses);
  };

  const onSearchedItemPress = ({ longitude, latitude }) => {
    navigation.goBack();
    route.params.baseLocationChange({
      longitude: longitude,
      latitude: latitude,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.searchBarContainer}>
        <TextInputContainer
          hideTitle={true}
          style={styles.searchContainer}
          input={input}
          setInput={setInput}
          placeholder="도로명, 지번, 영문 주소를 입력하세요."
        />
        <View style={styles.searchBarButton}>
          <Button title="찾기" onPress={onSearch} />
        </View>
      </View>
      <View style={styles.searchedContainer}>
        <SearchedButtonList
          addresses={addresses}
          navigation={navigation}
          onPress={onSearchedItemPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
  },
  searchContainer: {
    padding: 10,
    flex: 1,
  },
  searchBarButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchedContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  searchedSingle: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  locationIcon: {
    paddingRight: 10,
    justifyContent: 'center',
  },
  roadText: {
    fontSize: 17,
  },
  jibunText: {
    fontSize: 17,
  },
  englishText: {
    fontSize: 15,
  },
});
