import {InfoWindow} from 'react-google-maps';
import React, {Component} from 'react';

class MyInfoBox extends Component {
    render(){
        let { address } = this.props;
        return(
            <InfoWindow position={this.props.position} onCloseClick={this.props.onCloseClick}>
            {address}
            </InfoWindow>
        )
    }
}
export default MyInfoBox;