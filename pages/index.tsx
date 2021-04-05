import Head from "next/head";
import SplashScreen from "../components/splashpage/Splashpage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SplashScreen />
      </main>
    </div>
  );
}
export {};
