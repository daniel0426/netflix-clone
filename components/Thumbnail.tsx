import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { thumbnailBaseUrl } from '../constants/movie';
import { Movie } from '../types';

interface ThumbnailProps {
  movie: Movie | DocumentData;
}

function Thumbnail({ movie }: ThumbnailProps) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
        src={`${thumbnailBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
