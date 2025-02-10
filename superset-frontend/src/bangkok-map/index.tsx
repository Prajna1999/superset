// superset-frontend/src/map-app/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import MapView from './pages/MapView';

const container = document.getElementById('map-root');
if (container) {
    const root = createRoot(container);
    root.render(<MapView />);
}