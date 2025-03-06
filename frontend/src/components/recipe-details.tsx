"use client";

import { IRecipe } from "@/lib/definitions";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RecipeDetails = ({ recipe }: { recipe: IRecipe }) => {
  const router = useRouter();

  return (
    <>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={200}
        height={200}
        priority
        className="w-full md:w-[200px] rounded-[30px]"
      />
      <h1 className="text-2xl font-bold text-center mt-8 text-gray-900">
        {recipe.strMeal}
      </h1>
      <p
        className="text-blue-600 hover:text-blue-800 hover:underline text-center cursor-pointer"
        onClick={() => router.push(`/recipes?country=${recipe.strArea}`)}
      >
        {recipe.strArea}
      </p>
      <p className="mt-4 text-justify text-gray-800">
        {recipe.strInstructions}
      </p>
    </>
  );
};

export default RecipeDetails;
