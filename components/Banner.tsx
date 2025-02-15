import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Movie } from '../types';
import { baseUrl } from '../constants/movie';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

interface BannerProps {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: BannerProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl mb-4">
        {movie?.overview}
      </p>

      <div className="flex space-x-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-3 w-3 text-black md:h-5 md:w-5" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70 "
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-7 md:w-7" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
