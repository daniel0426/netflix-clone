import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { DocumentData } from 'firebase/firestore';
import { useState, useRef } from 'react';
import { Movie } from '../types';
import Thumbnail from './Thumbnail';

interface RowProps {
  title: string;
  movies: Movie[] | DocumentData[];
}

function Row({ title, movies }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="h-40 space-y-1 md:space-y-2">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-white/90 from-red-600/90 w-56 cursor-pointer text-md font-semibold  transition duration-200 md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 trasition hover:scale-125 group-hover:opacity-100 
          ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        />
        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center space-x-1.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-4 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 trasition hover:scale-120 group-hover:opacity-100`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Row;
