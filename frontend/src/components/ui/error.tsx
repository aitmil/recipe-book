import Link from "next/link";

export const Error = ({ error }: { error: string }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-[calc(100vw-200px)]">
      <p className="text-3xl text-gray-800">{error}</p>
      <div className="flex gap-2 text-2xl font-medium">
        <p>Back to </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          all recipes
        </Link>
      </div>
    </div>
  );
};
