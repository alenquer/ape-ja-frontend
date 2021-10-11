import "tailwindcss/tailwind.css";
import "../styles/global.css";
import FacebookPixel from "../util/facebook-pixel";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
