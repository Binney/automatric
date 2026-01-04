import Link from "next/link";
import PlaceMap from "./Map";
import SearchMyLocationForm from "./SearchLocationForm";

export default async function Places({
  places,
  lat,
  lon,
}: {
  places: any[] | null;
  lat?: string;
  lon?: string;
}) {
  const pins = places?.filter((place) => place.lat && place.lon).map((place) => ({
    key: place.id,
    location: { lat: place.lat, lng: place.lon },
  }));

  return (
    <div className="grid gap-4 grid-cols-2">
      <div>
        <SearchMyLocationForm />
        {places?.map((place) => (
          <div key={place.id} className="border rounded-lg p-4">
            <Link href={`/places/${place.slug}`}>
            <h2 className="text-lg font-semibold">{place.name}</h2>
            <p className="text-gray-600">{place.description}</p>
            </Link>
            <a
              href={place.gmaps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
      <PlaceMap
        centreLat={lat ? parseFloat(lat) : undefined}
        centreLon={lon ? parseFloat(lon) : undefined}
        pins={pins}
      />
    </div>
  );
}
