import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { Movie } from '../types';
import apiRequests from '../utils/ApiRequests';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-600/20 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <section></section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(apiRequests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(apiRequests.fetchTrending).then((res) => res.json()),
    fetch(apiRequests.fetchTopRated).then((res) => res.json()),
    fetch(apiRequests.fetchActionMovies).then((res) => res.json()),
    fetch(apiRequests.fetchComedyMovies).then((res) => res.json()),
    fetch(apiRequests.fetchHorrorMovies).then((res) => res.json()),
    fetch(apiRequests.fetchRomanceMovies).then((res) => res.json()),
    fetch(apiRequests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
