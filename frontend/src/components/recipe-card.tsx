"use client";

import { IRecipe } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: IRecipe }) {
  return (
    <li className="mb-4 pb-1 md:pb-2 sm:mb-0 border border-gray-200 rounded-[10px] md:rounded-[20px] shadow-md hover:scale-[98%] transition-transform duration-300">
      <Link href="recipes/[id]" as={`/recipes/${recipe.idMeal}`}>
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={200}
          height={100}
          priority
          className="w-full rounded-t-[20px]"
        />

        <h2 className="px-1 text-lg text-center font-semibold mt-1 w-[150px] md:w-full truncate text-gray-800">
          {recipe.strMeal}
        </h2>
        <p className="px-1 mt-1 text-center text-sm text-gray-600">
          {recipe.strArea}
        </p>
      </Link>
    </li>
  );
}
