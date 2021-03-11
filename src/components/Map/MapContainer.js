import React from 'react'
import Maps from './Maps'

const MapContainer = () => {
    return (
        <div className="map" id='map'>
            <h2 className="map-title">Located</h2>
            <h3 className='map-address'>Address: 333 Lake Havasu Ave, Lake Havasu City, AZ 86403</h3>
            <Maps />
        </div>
    )
}

export default MapContainer
