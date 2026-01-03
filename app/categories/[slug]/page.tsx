import Places from "@/components/Places";
import { createClient } from "@/lib/supabase/server";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const supabase = await createClient();
    const {slug} = await params;
    console.log(slug);
    console.log("fetchhh")
    const { data: places } = await supabase
        .rpc("places_by_category", { tag_slug: slug });
    console.log(places);
    return (
        <Places places={places} />
    );
}
