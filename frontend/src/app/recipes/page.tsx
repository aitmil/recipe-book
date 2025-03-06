"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";
import RecipeCard from "@/components/recipe-card";
import { IRecipe } from "@/lib/definitions";
import { fetchRecipes } from "@/lib/api";

export default function RecipesPage() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || undefined;
  const ingredient = searchParams.get("ingredient") || undefined;
  const category = searchParams.get("category") || undefined;

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchRecipes({ country, ingredient, category });
        setRecipes(data);
      } catch {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [country, ingredient, category]);

  if (error) {
    return <Error error={error} />;
  }

  return loading ? (
    <Loader size="20" />
  ) : (
    <Section>
      <Container>
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Recipes
          {(country && ` | ${country}`) ||
            (ingredient && ` | ${ingredient}`) ||
            (category && ` | ${category}`)}
        </h1>
        <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
