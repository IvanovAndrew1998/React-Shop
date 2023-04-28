import React from 'react'

import { useEffect, useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import axios from 'axios';
import { getAddressByLocation } from '../../../Api';

const GeoTag = () => {
    const [city, setSity] = useState('Витебск');
 

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                // const locationData = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json&accept-language=ruRU`)
                // console.log(locationData.data.address.city);
                // const cityData = await provider.search({query: `${pos.coords.latitude} ${pos.coords.longitude}`});
                // console.log('городской округ Йошкар-Ола');
                const locationData = (await getAddressByLocation(pos.coords.latitude, pos.coords.longitude)).data
                // console.log(locationData.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails)
                setSity(locationData.response.GeoObjectCollection.featureMember[0].GeoObject.name)
            }
        );
    }
    
    useEffect(
        getCurrentPosition
        ,
        []
    );

    return (
        <div className="flexdown-left">
            <img src="src/location.svg" alt="" />
            <p>{city}</p>
        </div>
    )
}

export default GeoTag