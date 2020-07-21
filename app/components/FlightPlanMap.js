import React from "react";
import FlightPlanGoogleMap from "./FlightPlanGoogleMap";

function FlightPlanMap({ initialPath, savePath }) {
  const [lastSavedPath, setLastSavedPath] = React.useState(initialPath);
  const [path, setPath] = React.useState(initialPath);
  const [disabledButtons, setDisabledButtons] = React.useState(true);

  React.useEffect(() => {
    setPath(initialPath);
    setLastSavedPath(initialPath);
  }, [initialPath]);

  const addPositionToPath = (e) => {
    setPath((prevPath) => [
      ...prevPath,
      { lat: e.latLng.lat(), lng: e.latLng.lng() },
    ]);
    setDisabledButtons(false);
  };

  const handleResetPath = () => {
    setPath(lastSavedPath);
    setDisabledButtons(true);
  };

  const handleSavePath = () => {
    setLastSavedPath(path);
    savePath(path);
    setDisabledButtons(true);
  };

  return (
    <React.Fragment>
      <FlightPlanGoogleMap path={path} addPositionToPath={addPositionToPath} />
      <div className="map-buttons-container">
        <button onClick={handleResetPath} disabled={disabledButtons}>
          Reset
        </button>
        <button onClick={handleSavePath} disabled={disabledButtons}>
          Save
        </button>
      </div>
    </React.Fragment>
  );
}

export default FlightPlanMap;
