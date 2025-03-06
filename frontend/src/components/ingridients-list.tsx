import { IRecipe } from "@/lib/definitions";
import { useRouter } from "next/navigation";

interface IngredientsListProps {
  recipe: IRecipe;
}

export default function IngredientsList({ recipe }: IngredientsListProps) {
  const router = useRouter();

  const ingredients = Object.keys(recipe || {})
    .filter(
      (key): key is keyof IRecipe =>
        key.startsWith("strIngredient") && !!recipe[key as keyof IRecipe]
    )
    .map((key, index) => {
      const measureKey = `strMeasure${index + 1}` as keyof IRecipe;
      return {
        ingredient: recipe[key],
        measurement: recipe[measureKey] || "",
      };
    });

  return (
    <div className="flex mt-4">
      <div>
        <h2 className="text-lg font-semibold mb-[12px] md:ml-5">Ingredients</h2>
        <ul className="md:ml-4 border border-r-0 ">
          {ingredients.map(({ ingredient }, index) => (
            <li
              key={index}
              className="text-blue-600 cursor-pointer capitalize border border-r-0 p-1 md:p-2 hover:underline  hover:text-blue-800 truncate"
              onClick={() => router.push(`/recipes?ingredient=${ingredient}`)}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="mt-[40px] border">
          {ingredients.map(({ measurement }, index) => (
            <li key={index} className="border p-1 md:p-2 truncate">
              {measurement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
