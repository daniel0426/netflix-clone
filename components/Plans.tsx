import { CheckIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

function Plans() {
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Subscription - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="logo"
            width={140}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium ">
          Choose the plan that's right for you
        </h1>

        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="w-7 h-7 text-[#E50914]" />
            Watch all you want. Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="w-7 h-7 text-[#E50914]" />
            Recommendations just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="w-7 h-7 text-[#E50914]" />
            Change or cancel your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            <div className="planContainer">standard.</div>
            <div className="planContainer">standard.</div>
            <div className="planContainer">standard.</div>
          </div>

          {/* Table */}
          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
