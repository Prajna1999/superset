// superset-frontend/src/map-app/components/Map/index.tsx
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SupersetClient } from '@superset-ui/core';

// Fix Leaflet's default icon path issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map: React.FC = () => {
    const [geoJsonData, setGeoJsonData] = useState<any>(null);

    useEffect(() => {
        // Fetch GeoJSON data
        SupersetClient.get({ endpoint: '/api/v1/map/geojson' })
            .then(({ json }) => {
                setGeoJsonData(json);
            })
            .catch(console.error);
    }, []);

    return (
        <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                attribution='© OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoJsonData && (
                <GeoJSON
                    data={geoJsonData}
                    style={{
                        color: '#3388ff',
                        weight: 2,
                        fillOpacity: 0.2
                    }}
                />
            )}
        </MapContainer>
    );
};

export default Map;