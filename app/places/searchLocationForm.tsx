"use client";

export default function SearchMyLocationForm() {
  const useMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude.toString();
        const lon = position.coords.longitude.toString();
        
        const url = new URL(window.location.href);
        url.searchParams.set('lat', lat);
        url.searchParams.set('lon', lon);
        window.location.href = url.toString();
      });
    }
  };

  return (
    <button type="button" onClick={useMyLocation}>
      Use my location
    </button>
  );
}
