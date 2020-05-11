// import React from 'react'
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };



// function findUsPage() {
	

//     return (
//         <div style={{ width: '80%', margin: '3rem auto' }}>
//             <div style={{ textAlign: 'center' }}>
//                 <h1>Find Us</h1>
//             </div>
//             <br />
//             <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
            
//         </div>
//     )
// }


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAsXFpg_a4g4xgMi8JE_ltpnV-xxktGufY'
// })(findUsPage);

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};
 
class findUsPage extends Component {
  render() {
    return (
        
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsXFpg_a4g4xgMi8JE_ltpnV-xxktGufY'
})(findUsPage);