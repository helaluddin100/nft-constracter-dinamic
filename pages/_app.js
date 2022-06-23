import "../styles/globals.css";
import "../styles/Layout.css";
import "../styles/font/icofont.min.css";
import "../styles/section/_global-style.scss";
import Aos from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";
import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const title = Component.title || "NFT - Full Stack Web Development Services";
  const image = Component.image || "assets/img/logo/logo.svg";
  const description =
    Component.description ||
    "NFT - Full Stack Web Development Services by NFT Constractor";
  const keywords =
    Component.keywords ||
    "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
  const Layout = Component.layout || Fragment;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="og:description" content={description}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="image" content={image} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
