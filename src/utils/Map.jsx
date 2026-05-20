import { GoogleMap, Mark, useLoadScript } from "@react-google-maps/api";
import "../styles/Map.css";

function Map(
  center = {lat: 6.841446 ,lng: 80.003519},
  zoom = 10
) {
    const apiKey = "AIzaSyBnhHptZl7Vz0XOOU5loKFKAAHukcNc6KM"
    const {isLoaded} = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: apiKey,
    });

    return(
        <div>
            {!isLoaded ? (
                <h2>Loading...</h2>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={{lat: 6.841446 ,lng: 80.003519}}
                    zoom={10}/>
            )}
        </div>
    )
}

export default Map;