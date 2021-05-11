import React from 'react';
import NaverMapView, { Marker } from 'react-native-nmap';

export default function NaverMap({
  center = { latitude: 37.564362, longitude: 126.977011 },
  baseLocationChange = () => {},
  picker = { latitude: 0, longitude: 0 },
  pickerChange = () => {},
}) {
  const onMapClick = e => {
    pickerChange({ latitude: e.latitude, longitude: e.longitude }); // 피커 표시
  };

  return (
    <NaverMapView
      style={{ flex: 1 }}
      showsMyLocationButton={true}
      center={{ ...center, zoom: 16 }}
      //  onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
      //  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={onMapClick}
    >
      {/* <Marker coordinate={P0} pinColor="blue" onClick={() => console.warn('onClick! p0')}/> */}
      <Marker
        coordinate={picker}
        pinColor="blue"
        onClick={() => console.warn('onClick! p1')}
      />
    </NaverMapView>
  );
}
