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
            justifyContent: 'center',
            alignSelf: 'center',
        
        }
        
        return (
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        containerStyle={mapContainer}
                        initialCenter={{lat: 34.467062425978874, lng: -114.33709755599558}}
                    > 
                        <Marker position={{lat: 34.467062425978874, lng: -114.33709755599558}}/>
                    </ Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqLAo8nANCufj0Di7H5M1ebhYGiPjUhOY"
})(Maps)
