import { createClient } from "@/lib/supabase/server";

export default async function Places() {
  const supabase = await createClient();
  const { data: places } = await supabase.from("places").select();

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
