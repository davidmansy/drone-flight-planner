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

function FlightPlanMap({ initPath, updatePath }) {
  const [lastSavedPath, setLastSavedPath] = React.useState(initPath);
  const [path, setPath] = React.useState(initPath);
  const [disabledResetButton, setDisabledResetButton] = React.useState(true);
  const [disabledSaveButton, setDisabledSaveButton] = React.useState(true);

  React.useEffect(() => {
    setPath(initPath);
    setLastSavedPath(initPath);
  }, [initPath]);

  const addPositionToPath = (e) => {
    setPath((prevPath) => [
      ...prevPath,
      { lat: e.latLng.lat(), lng: e.latLng.lng() },
    ]);
    setDisabledResetButton(false);
    setDisabledSaveButton(false);
  };

  const resetPath = () => {
    setPath(lastSavedPath);
    setDisabledResetButton(true);
    setDisabledSaveButton(true);
  };

  const savePath = () => {
    setLastSavedPath(path);
    updatePath(path);
    setDisabledResetButton(true);
    setDisabledSaveButton(true);
  };

  return (
    <React.Fragment>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={path[0]}
          zoom={16}
          clickableIcons={false}
          onClick={addPositionToPath}
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
      <div className="map-buttons-container">
        <button onClick={resetPath} disabled={disabledResetButton}>
          Reset
        </button>
        <button onClick={savePath} disabled={disabledSaveButton}>
          Save
        </button>
      </div>
    </React.Fragment>
  );
}

export default React.memo(FlightPlanMap);
