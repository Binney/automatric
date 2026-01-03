"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

export default function PlaceMap({
  centreLat = 51,
  centreLon = 0,
  pins,
}: {
  centreLat?: number;
  centreLon?: number;
  pins?: { key: string; location: google.maps.LatLngLiteral }[];
}) {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY || ""}
      onLoad={() => console.log("done!")}
    >
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: centreLat, lng: centreLon }}
        mapId={"DEMO_MAP_ID"}
      >
        {pins && pins.map((pin) => (
          <AdvancedMarker key={pin.key} position={pin.location}>
            <Pin
                key={pin.key}
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
