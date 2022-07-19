import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Movie } from '../types';
import Thumbnail from './Thumbnail';

interface RowProps {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: RowProps) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2 w-screen">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 trasition hover:scale-125 group-hover:opacity-100" />
        <div className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 ">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 trasition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default Row;
