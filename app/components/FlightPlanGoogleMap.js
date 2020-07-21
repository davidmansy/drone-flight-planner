import React from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  Polyline,
} from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
  border: "1px solid lightgray",
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 10,
  zIndex: 1,
};

const polyLineOptions = {
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

const API_KEY = process.env.GOOGLE_MAP_API_KEY;

function FlightPlanGoogleMap({ path, addPositionToPath }) {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={path[0]}
        zoom={16}
        clickableIcons={false}
        onClick={(e) => addPositionToPath(e)}
      >
        {path.map((position) => {
          return (
            <Circle
              center={position}
              options={circleOptions}
              key={`${position.lat}-${position.lng}`}
            />
          );
        })}
        <Polyline options={polyLineOptions} path={path} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(FlightPlanGoogleMap);
