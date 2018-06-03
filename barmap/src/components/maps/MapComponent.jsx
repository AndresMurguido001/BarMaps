import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} /> }
  </GoogleMap>
))


export default MapComponent;
