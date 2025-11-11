import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import "./map.css";

function  Map() {
    const center = { lat: 51.5074, lng: -0.1278 }; // London coordinates
    const [selected, setSelected] = React.useState(null);

    return (
        <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyCJEuqCZ7R2PD83MJePUrDXGrbdQTd3nd4">
                <GoogleMap
                mapContainerClassName="map"
                center={center}
                zoom={14}
                >
            <Marker
                position={center}
                onClick={() => setSelected(center)}
            />

            {selected && (
                <InfoWindow
                    position={center}
                    onCloseClick={() => setSelected(null)}
                >
                <div className="info-window">
                    <h3>McDonald’s <span>South London</span></h3>
                    <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
                    <p><strong>Phone:</strong> +934443-43</p>
                    <a href="http://mcdonalds.uk/" target="_blank" rel="noreferrer">
                    http://mcdonalds.uk/
                </a>
                </div>
            </InfoWindow>
        )}
        </GoogleMap>
    </LoadScript>

      {/* Floating Info Card */}
    <div className="info-card">
        <h2>McDonald’s <span>South London</span></h2>
        <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p><strong>Phone number:</strong> +934443-43</p>
        <p><strong>Website:</strong> <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a></p>
    </div>
    </div>
);
};

export default Map;
