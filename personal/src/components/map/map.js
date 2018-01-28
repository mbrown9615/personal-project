import React, { Component } from 'react';
import  { Map, InfoWindow, GoogleApiWrapper, GoogleMapReact } from 'google-maps-react';
import './map.css';
import Nav from '../nav/nav';


export class MapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }

    render() {
        const style = {
            width: '400px',
            height: '400px'
        }
        return (
            <div className="map-main">
                <Nav />
                <div className="map-cont">
                <Map google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}
                    zoom={8}>


                    <InfoWindow onClose={this.onInfoWindowClose} >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
                </div>
            </div>
        )
    }
}

class MapWrapper extends Component {
    render() {
        const style = {
            width: '400px',
            height: '400px'
        }
        console.log("hoaiscn")
        const props = this.props;
        const { google } = this.props;
        console.log(props)
        return (
            // <Map google={google}
            //     className={'map'}
            //     visible={false}>
            //     <MapComp {...props} />
            // </Map>
            <GoogleMapReact
            style={style}
            className='GoogleMap'
            center={[this.state.lat, this.state.lng]}
            defaultZoom={8}
            mapTypeId={'HYBRID'}
            layerTypes={['TrafficLayer', 'TransitLayer']}
            bootstrapURLKeys={{
              language: 'en'
            }}
          >
            {/* {GoogleMapsMarkers} */}
          </GoogleMapReact>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapWrapper)