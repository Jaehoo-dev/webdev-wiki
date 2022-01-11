import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Webdev Wiki</title>
        <meta name='description' content='Webdev Wiki' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <button onClick={() => signIn()}>Sign in with Github</button>
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    </div>
  );
};

export default Home;
