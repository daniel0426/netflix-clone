import Image from 'next/image';
import { thumbnailBaseUrl } from '../constants/movie';
import { Movie } from '../types';

interface ThumbnailProps {
  movie: Movie;
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`${thumbnailBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
