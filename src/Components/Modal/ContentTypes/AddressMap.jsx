import React, { useState, useEffect } from 'react'
import { YMaps, Map, Placemark, ObjectManager } from 'react-yandex-map'
import { getLocationByAddress } from '../../../Api'
import { userStore } from '../../../Store/UserStore';
import Loader from '../../Pages/ProductPage/Loader/Loader';
import './AddressMap.css'
import MapSidebar from './MapSidebar/MapSidebar';
import MapSearchbar from './MapSearchbar/MapSearchbar';

const AddressMap = () => {

  const [coords, setCoords] = useState()

  useEffect(() => {
    Promise.all(userStore.getAddressesLocation).then((values) => {
      const parsedValues = values.map(value =>
        value.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()
      );
      setCoords(parsedValues)
    }

    );
  }, [])




  if (coords === undefined) {
    return <Loader />
  }

  return (
    <div className='modalContentType'>
      <div className="MapContent">
        <MapSidebar />
        <MapSearchbar />
        <YMaps className='mapContainer'>

          <Map className='mapInner'
            defaultState={{

              center: [55.75, 37.57],
              zoom: 9,
              controls: ['zoomControl']
            }}
            modules={['control.ZoomControl']}>

            {
              coords.map(coord =>
                <Placemark
                  modules={['geoObject.addon.balloon']}
                  defaultGeometry={coord}
                  properties={{
                    iconContent: 'iconContent',
                    baloonContent: 'baloonContent',
                    hintContent: 'hintContent'
                  }}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: 'src/Placemark.svg',
                    iconOffset:[-10, 10],
                    controls: []
                  }}
                />
              )
            }

          </Map>
        </YMaps>

      </div>
    </div>
  )
}

export default AddressMap