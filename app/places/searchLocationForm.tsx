'use client';

import { useState } from 'react';

export default function SearchMyLocationForm({firstLat, firstLon}: {firstLat?: string | null; firstLon? : string | null}) {
    const [ latitude, setLatitude ] = useState(firstLat || '');
    const [ longitude, setLongitude ] = useState(firstLon || '');

    function submitForm(e: React.FormEvent<HTMLFormElement> | undefined = undefined) {
        if (e) {
            e.preventDefault();
        }
        window.location.href = `/places?lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}`;
    }

    const handleUseLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude.toString();
                const lon = position.coords.longitude.toString();
                setLatitude(lat);
                setLongitude(lon);
                window.location.href = `/places?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
            });
        }
    };

    return <form
        onSubmit={submitForm}
        className="flex gap-2"
      >
        <button
          type="button"
          onClick={handleUseLocation}>Use my location</button>
          {latitude}, {longitude}

        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          step="any"
          defaultValue={firstLat || ""}
          className="border rounded px-3 py-2"
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
        <input
          type="number"
          name="lon"
          placeholder="Longitude"
          step="any"
          defaultValue={firstLon || ""}
          className="border rounded px-3 py-2"
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>
}