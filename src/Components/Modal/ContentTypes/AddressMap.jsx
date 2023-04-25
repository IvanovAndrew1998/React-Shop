import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-map'

const AddressMap = () => {
  return (
    <div className='modalContentType'>

      <YMaps>
        <Map defaultState={{
          center: [55.75, 37.57],
          zoom: 9,
          controls: ['zoomControl']
        }} modules={['control.ZoomControl']}>
          <Placemark modules={['geoObject.addon.balloon']} defaultGeometry={[55.75, 37.57]} properties={{
            balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
          }} />
        </Map>
      </YMaps>

    </div>
  )
}

export default AddressMap