import Head from 'next/head';

import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';

import useAuth from '../hooks/useAuth';
import { Movie } from '../types';
import apiRequests from '../utils/apiRequests';
import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import payments from '../lib/stripe';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Plans from '../components/Plans';
import Row from '../components/Row';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  products: Product[];
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
  products,
}: Props) => {
  const { logout, loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = false;
  console.log(products);
  if (loading || subscription === null) return null;

  if (!subscription) return <Plans />;
  return (
    <div
      className={`relative h-screen bg-gradient-to-bottom from-gray-600/20 to-[#010511] lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative px-4 pb-24  lg:space-y-24 md:px-16 lg:px-24">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* Mylist Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((err) => console.log(err.message));

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
      products,
    },
  };
};
