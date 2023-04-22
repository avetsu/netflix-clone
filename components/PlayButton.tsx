import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white px-2 rounded-md py-1 md:py-2 md:px2 w-auto text-xs lg:text-lg font font-semibold flex flex-row items-center hover:bg-neutral-300 transition cursor-pointer"
    >
      <BsFillPlayFill size={25} />
      Play
    </div>
  );
};

export default PlayButton;
