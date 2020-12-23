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
                        initialCenter={{lat: 9.761927, lng: 79.95244}}
                    > 
                        <Marker position={{lat: 9.761927, lng: 79.95244}}/>
                    </ Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqLAo8nANCufj0Di7H5M1ebhYGiPjUhOY"
})(Maps)
