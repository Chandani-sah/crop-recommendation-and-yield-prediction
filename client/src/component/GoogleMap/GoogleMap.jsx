import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.5937,
      lng: 78.9629,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={20.5937} lng={78.9629} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
