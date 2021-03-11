import React from 'react'
import Maps from './Maps'

const MapContainer = () => {
    return (
        <div className="map" id='map'>
            <h2 className="map-title">Located</h2>
            <h3 className='map-address'> <a href="https://www.google.com/maps/search/?api=1&amp;query=34.467062425978874,-114.337097555995583&amp;query_place_id=ChIJ34tRWH7t0YARpghAcb9u97g">
                Address: 333 Lake Havasu Ave, Lake Havasu City, AZ 86403</a></h3>
            <Maps />
        </div>
    )
}

export default MapContainer
