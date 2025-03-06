import { BeatLoader } from "react-spinners";

interface LoaderProps {
  size?: string;
}

export const Loader = ({ size = "80" }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader size={size} color="#2d3748" />
    </div>
  );
};
