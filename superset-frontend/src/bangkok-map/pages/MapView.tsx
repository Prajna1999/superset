// superset-frontend/src/map-app/pages/MapView.tsx
import React from 'react';
import Map from '../components/Map';

const MapView: React.FC = () => {
    return (
        <div className="map-container">
            <Map />
        </div>
    );
};

export default MapView;