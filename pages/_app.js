import Head from "next/head";
import { Fragment } from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import CustomCursor from "../src/components/CustomCursor";
import "../styles/globals.css"; 


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CustomCursor />
      <Head>
  
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link
          type="text/css"
          media="all"
          href="css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/jquery.animatedheadline.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/public/css/plugins.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="css/style.css"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" /> */}
        <link rel="icon" href="https://raw.githubusercontent.com/realismail04/ismail-portfolio/main/public/img/favicon.png" sizes="any" />
        <title>Syed Ismail | Senior CMS Developer & Designer</title>

        {/* Standard SEO */}
        <meta name="description" content="Senior CMS Developer and Designer specializing in WordPress, Wix, Shopify, and Squarespace. I transform custom Figma and XD designs into fully functional websites." />
        <meta name="author" content="Syed Ismail" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://syedismail-portfolio.vercel.app/" />
        <meta property="og:title" content="Syed Ismail | Senior CMS Developer & Designer" />
        <meta property="og:description" content="Senior CMS Developer and Designer specializing in WordPress, Wix, Shopify, and Squarespace. I transform custom Figma and XD designs into fully functional websites." />
        <meta property="og:image" content="https://raw.githubusercontent.com/realismail04/ismail-portfolio/main/public/img/favicon.png" />
        <meta property="og:site_name" content="Syed Ismail Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://syedismail-portfolio.vercel.app/" />
        <meta name="twitter:title" content="Syed Ismail | Senior CMS Developer & Designer" />
        <meta name="twitter:description" content="Senior CMS Developer and Designer specializing in WordPress, Wix, Shopify, and Squarespace. I transform custom Figma and XD designs into fully functional websites." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/realismail04/ismail-portfolio/main/public/img/favicon.png" />
      </Head>
      <NavState>
        <ColorState>
          <Component {...pageProps} /> 
          <PreLoader />
        </ColorState>
      </NavState>
    </Fragment>
  );
}


export default MyApp;
