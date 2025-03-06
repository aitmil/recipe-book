"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";
import Sidebar from "@/components/sidebar";
import RecipeDetails from "@/components/recipe-details";
import IngredientsList from "@/components/ingridients-list";
import { fetchRecipeById } from "@/lib/api";
import { IRecipe } from "@/lib/definitions";

export default function RecipeInfoPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarLoading, setSidebarLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadRecipe = async () => {
      setLoading(true);
      setError(null);
      setSidebarLoading(true);

      try {
        const data = await fetchRecipeById(id as string);
        setRecipe(data);
      } catch {
        setError("Failed to fetch recipe");
      } finally {
        setLoading(false);
        setSidebarLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  if (error) {
    return <Error error={error} />;
  }

  return loading ? (
    <Loader size="20" />
  ) : (
    <>
      <Sidebar
        category={sidebarLoading ? "Loading..." : recipe?.strCategory || ""}
      />

      <section className="md:mr-60 xl:mr-80 2xl:mr-[450px] px-4 md:px-8 lg:px-10 xl:px-14 pt-10 md:pt-14 xl:pt-[78px] pb-12 md:pb-16 xl:pb-[100px]">
        {recipe && (
          <>
            <RecipeDetails recipe={recipe} />
            <IngredientsList recipe={recipe} />
          </>
        )}
      </section>
    </>
  );
}
