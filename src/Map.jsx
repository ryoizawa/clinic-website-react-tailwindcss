import React from "react";

const Map = () => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.__googleMapsCallback.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  return <div>Map</div>;
};

export default Map;
