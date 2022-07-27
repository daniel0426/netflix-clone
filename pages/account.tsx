import Head from 'next/head';
import Link from 'next/link';

import useAuth from '../hooks/useAuth';
import useSubscribe from '../hooks/useSubscribe';

function Account() {
  const { user } = useAuth();
  const subscription = useSubscribe(user);

  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="logo"
            width={120}
            height={110}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="account logo"
            className="cursor-pointer rounded "
          />
        </Link>
      </header>

      <main className="pt-24">
        <div>
          <h1 className="text-3xl md:text-4xl ">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {subscription?.created}
            </p>
          </div>
        </div>
        {/* <Membership /> */}
        <div>
          <h4>Plan Details</h4>
          <div></div>
        </div>
      </main>
    </div>
  );
}

export default Account;
