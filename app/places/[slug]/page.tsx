import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const { slug } = await params;
  const { data: place } = await supabase
    .from("places")
    .select()
    .eq("slug", slug)
    .single();
  if (!place) {
    redirect("/places");
  }
  const { name, description } = place;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
