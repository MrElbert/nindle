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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Nindle</a>
        </h1>

        <p className={styles.description}>
          Get started by authenticating your{" "}
          <code className={styles.code}>notion database!</code>
        </p>

        <div className={styles.grid}>
          <Link
            href="https://api.notion.com/v1/oauth/authorize?client_id=460c3ffa-3d89-4a50-8458-4d4b32ec3d79&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fform"
            className={styles.card}
          >
            <h2>OAuth 2.0 &rarr;</h2>
            <p>Authorize your account</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
