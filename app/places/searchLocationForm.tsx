'use client';

import { useRef } from 'react';

export default function SearchMyLocationForm({firstLat, firstLon}: {firstLat?: string | null; firstLon? : string | null}) {
    const latInputRef = useRef<HTMLInputElement>(null);
    const lonInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleUseLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                if (latInputRef.current && lonInputRef.current) {
                    latInputRef.current.value = latitude.toString();
                    lonInputRef.current.value = longitude.toString();
                    formRef.current?.requestSubmit();
                }
            });
        }
    };

    return <form
        ref={formRef}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formData = new FormData(e.currentTarget);
        //   const lat = formData.get("lat");
        //   const lon = formData.get("lon");
        //   window.location.href = `?lat=${lat}&lon=${lon}`;
        // }}
        className="flex gap-2"
      >
        <button
          type="button"
          onClick={handleUseLocation}>Use my location</button>

        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          step="any"
          defaultValue={firstLat || ""}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          name="lon"
          placeholder="Longitude"
          step="any"
          defaultValue={firstLon || ""}
          className="border rounded px-3 py-2"
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