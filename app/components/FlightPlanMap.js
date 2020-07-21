import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
  border: "1px solid lightgray",
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

function FlightPlanMap({ plan }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDF5vz5qzYYx22uBXUqINSM2PNZMqsF6kw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={plan.path[0]}
        zoom={16}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {plan.path.map((position) => {
          return (
            <Marker
              position={position}
              key={`${position.lat}-${position.lng}`}
            />
          );
        })}
        <Polyline options={options} path={plan.path} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(FlightPlanMap);
