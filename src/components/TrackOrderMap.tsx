// src/components/TrackOrderMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Webpack
const truckIcon = new L.Icon({
    iconUrl: '/truck.png', // You'll need to add a truck icon to your /public folder
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
});

const homeIcon = new L.Icon({
    iconUrl: '/home.png', // You'll need to add a home icon to your /public folder
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

interface MapProps {
    vehiclePosition: [number, number];
    homePosition: [number, number];
    route: [number, number][];
}

const TrackOrderMap: React.FC<MapProps> = ({ vehiclePosition, homePosition, route }) => {
    return (
        <MapContainer center={vehiclePosition} zoom={13} style={{ height: '100%', width: '100%' }} className="rounded-lg">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline positions={route} color="blue" />
            <Marker position={vehiclePosition} icon={truckIcon}>
                <Popup>Delivery Vehicle</Popup>
            </Marker>
            <Marker position={homePosition} icon={homeIcon}>
                <Popup>Your Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default TrackOrderMap;