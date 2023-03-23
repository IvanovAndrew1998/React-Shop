import React from 'react'

import { useEffect, useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import axios from 'axios';

const GeoTag = () => {
    const [city, setSity] = useState('Витебск');
    const provider = new OpenStreetMapProvider();

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const locationData = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json&accept-language=ruRU`)
                // console.log(locationData.data.address.city);
                // const cityData = await provider.search({query: `${pos.coords.latitude} ${pos.coords.longitude}`});
                // console.log('городской округ Йошкар-Ола');

                setSity(locationData.data.address.city.match(/[A-ZА-Я].+/)[0])
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