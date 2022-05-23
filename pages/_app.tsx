import "../styles/globals.scss";
import "../styles/home.scss";
import "../styles/carousel.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
