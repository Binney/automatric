import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function CategoriesPage() {
  const supabase = await createClient();
  const { data: categories } = await supabase.from("tags").select();
  console.log(categories);
  
  return (
    <div>
      <h1>Categories</h1>
      {categories?.map((category) => (
        <Link key={category.id} className="border rounded-lg p-4 mb-4" href={`/categories/${category.slug}`}>
          <h2 className="text-lg font-semibold">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
}
