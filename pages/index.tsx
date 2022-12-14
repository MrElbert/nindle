import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nindle</title>
        <meta name="description" content="Sync your Kindle highlights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className="rounded pb-8" src="/Nindler.png" alt="Nindler" width={200} height={200} />

        <h1 className={styles.title}>
          Welcome to <Link href="/about">Nindle</Link>
        </h1>

        <p className={styles.description}>
          Get started by authenticating your{" "}
          <Link className="hover:text-blue-500" href="/notion"><code className={styles.code}>notion database!</code></Link>
        </p>

        <div className={styles.grid}>
          <Link
            href={`https://api.notion.com/v1/oauth/authorize?client_id=${
              process.env.NINDLE_CLIENT_ID as string
            }&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fnindle.vercel.app%2Fform`}
            className={styles.card}
          >
            <h2>OAuth 2.0 &rarr;</h2>
            <p>Authorize your account</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
