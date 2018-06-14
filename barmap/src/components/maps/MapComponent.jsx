/*global google*/
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import keys from '../../config/keys'
import { connect } from 'react-redux';
import { getCurrentLocation, getCityBars } from '../../actions/locationActions'
import MyInfoBox from './InfoBox';


const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${keys.googleKey}`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withStateHandlers(() => ({
        isOpen: false,
    }),{
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen
        }),       
    }),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => () => {
                let places;
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                console.log(refs.map);
                const request = {
                    location: new google.maps.LatLng(refs.map.props.defaultCenter),
                    radius: 500,
                    type: ['bar']
                };
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        updatePlaces(results);                        
                    }
                })
            },                       
        }
    }),
)((props) => { 
    if (props.places.length > 0){
        props.getBars(props.places)
    }
    return (
        <GoogleMap
            onTilesLoaded={props.fetchPlaces}
            ref={props.onMapMounted}
            defaultZoom={15}
            defaultCenter={props.center}
        >            
            {props.places && props.places.map((place, i) =>                                 
                <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} onClick={props.onMarkerClick}>
                
                </Marker> 
            )}                                    
        </GoogleMap>
    )
})

class MyFancyComponent extends React.PureComponent {
    constructor(){
        super()        
        this.state = {
            bars: []
        }
    }
   

    render() {
        return (
            <MyMapComponent center={this.props.location} onMarkerClick={this.onMarkerClick} getBars={this.props.getCityBars} />            
        )
    }
}
const mapStateToProps = state => ({
  location: state.location.userLocation
})
export default connect(mapStateToProps, { getCurrentLocation, getCityBars })(MyFancyComponent)
