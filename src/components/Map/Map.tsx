'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from '@/constants/environment';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Popup.scss';
import { MAP_MARKERS } from '@/constants/mapMarkers';
import styles from './Map.module.scss';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null!);
  const map = useRef<MapboxMap>(null!);
  const [lng] = useState(24.829086);
  const [lat] = useState(46.9820637);
  const [zoom] = useState(3);

  const placeMarkers = () => {
    if (!map.current) {
      return;
    }

    MAP_MARKERS.forEach((marker) =>
      new mapboxgl.Marker()
        .setLngLat([marker.longitude, marker.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${marker.title}</h3>`,
          ),
        )
        .addTo(map.current),
    );
  };

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.current.addControl(nav, 'bottom-right');

    placeMarkers();
  }, [lat, lng, zoom]);

  return (
    <div className={styles.mapContainer}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
};
