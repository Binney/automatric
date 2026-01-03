import { createClient } from "@/lib/supabase/server";
import { getFirstSearchParam } from "@/lib/utils";
import { SupabaseClient } from "@supabase/supabase-js";
import Places from "@/components/Places";

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
  return await supabase.rpc("all_places");
}

export default async function PlacesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();
  const search = await searchParams;
  const lat = getFirstSearchParam(search, "lat");
  const lon = getFirstSearchParam(search, "lon");
  const { data: places } = await getPlaces(supabase, lat, lon);

  return <Places places={places} lat={lat} lon={lon} />;
}
