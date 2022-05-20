import React from 'react';
import {
  Placemark,
  YMaps,
  Map,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

function MyMap() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center mb-5 pb-5">
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: [],
          }}
          width={'80%'}
          height={'70vh'}>
          <ZoomControl options={{ float: 'right' }} />
          <FullscreenControl />
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MyMap;
