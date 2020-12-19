import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

export class Maps extends React.Component{
    render(){
        const mapStyles = {
            width: '80vw',
            height: '75%',
            position: 'relative'
        }

        const mapContainer = {
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center'
        
        }
        
        return (<div className="map">
            <h2 className="map-title">Located</h2>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        containerStyle={mapContainer}
                        initialCenter={{lat: 9.761927, lng: 79.95244}}
                    > 
                        <Marker position={{lat: 9.761927, lng: 79.95244}}/>
                    </ Map>
        </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqLAo8nANCufj0Di7H5M1ebhYGiPjUhOY"
})(Maps)
