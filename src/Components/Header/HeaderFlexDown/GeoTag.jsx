import React from 'react'

import { useEffect, useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';

const GeoTag = () => {
    const [city, setSity] = useState('Москва');
    const provider = new OpenStreetMapProvider();

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                console.log(pos);
                const cityData = await provider.search({query: `${pos.coords.latitude} ${pos.coords.longitude}`});
                console.log(cityData);
                setSity(cityData[0].label.split(',')[3])
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