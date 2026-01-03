import { createClient } from "@/lib/supabase/server";
import { getFirstSearchParam } from "@/lib/utils";
import { SupabaseClient } from "@supabase/supabase-js";

async function getPlaces(
  supabase: SupabaseClient,
  lat?: string,
  lon?: string
): Promise<{ data: any[] | null; error: any }> {
  if (lat && lon) {
    return await supabase.rpc("nearby_places", {
      lat: parseFloat(lat),
      long: parseFloat(lon),
    });
  }
  return await supabase.from("places").select();
}

export default async function Places({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();
  const search = await searchParams;
  const lat = getFirstSearchParam(search, "lat");
  const lon = getFirstSearchParam(search, "lon");
  const { data: places } = await getPlaces(supabase, lat, lon);

  return (
    <div className="grid gap-4">
      {places?.map((place) => (
        <div key={place.id} className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold">{place.name}</h2>
          <p className="text-gray-600">{place.description}</p>
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
  );
}
