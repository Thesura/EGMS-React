import {
  GoogleMap,
  Marker,
  Polygon,
  useLoadScript,
} from "@react-google-maps/api";
import "../styles/Map.css";
import { useContext, useEffect, useState } from "react";
import { FetchRequest } from "../utils/FetchRequest";
import { ActiveContext } from "../App";

function Status() {
  const [active, setActive] = useContext(ActiveContext);

  const [areas, setAreas] = useState();

  useEffect(() => {
    setActive("Status");

    async function fetchAreas() {
      const url = "http://localhost:5000/status/areas";

      try {
        const response = await FetchRequest(url, "GET");
        console.log(response);
        setAreas(response.areas);
      } catch (error) {
        if (error.status === 404) {
          console.log('Resource not found')
        } else if (error.status >= 500) {
          console.log('Server error, try again later')
        } else {
          console.log('Request failed:', error.message)
        }
      }
    }

    fetchAreas();

    
  }, []);

  const libraries = ["geometry"];

  const apiKey = "AIzaSyBnhHptZl7Vz0XOOU5loKFKAAHukcNc6KM";
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries,
  });

  const polyOptGreen = {
    strokeColor: "#097501",
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: "#0c9e02",
    fillOpacity: 0.2,
  };

  const polyOptRed = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
  };

  const polyClick = (area) => {
    return (event) => {
      console.log(area);
    };
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!isLoaded ? (
        <h2>Loading...</h2>
      ) : (
        <GoogleMap
          mapContainerClassName="map-status"
          center={{ lat: 6.841446, lng: 80.003519 }}
          zoom={13}
        >
          {areas &&
            areas.map((area) => {
              const lat = area.lat.split(",");
              const lng = area.lng.split(",");
              const coords = [];
              lat.forEach((lat, index) => {
                coords.push({
                  lat: parseFloat(lat),
                  lng: parseFloat(lng[index]),
                });
              });

              return (
                <Polygon
                  paths={coords}
                  options={area.powered ? polyOptGreen : polyOptRed}
                  onClick={polyClick(area.name)}
                />
              );
            })}
        </GoogleMap>
      )}
    </div>
  );
}

export default Status;
