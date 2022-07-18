import Image from 'next/image';
import React from 'react';
import { Movie } from '../types';

interface BannerProps {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: BannerProps) {
  return (
    <div>
      {/* <div>
        <Image />
      </div> */}
    </div>
  );
}

export default Banner;
