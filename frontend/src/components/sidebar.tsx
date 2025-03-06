"use client";

import { fetchRecipes } from "@/lib/api";
import { IRecipe } from "@/lib/definitions";
import { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";
import { Loader } from "./ui/loader";

export default function Sidebar({ category }: { category?: string }) {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchRecipes({ category });
        setRecipes(data);
      } catch {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [category]);

  if (error) return <p>{error}</p>;

  return (
    <aside className="max-md:relative max-md:w-full max-md:h-auto max-md:flex max-md:flex-row md:fixed md:top-0 md:right-0 md:w-60 xl:w-80 2xl:w-[450px] md:h-screen md:flex md:flex-col z-40 bg-gray-200">
      <div className="flex flex-col md:h-full overflow-y-auto p-4">
        <h2 className="text-lg font-bold text-gray-600">
          Category: {category}
        </h2>
        {loading ? (
          <Loader size="10" />
        ) : (
          <ul className="mt-4 flex max-md:flex-row md:flex-col overflow-auto gap-4 scrollbar-hide">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
