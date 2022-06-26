import Head from "next/head";
import PropTypes from "prop-types";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.Title}</title>
      <meta name="theme-color" content="white" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="South Africa, Business" />
      <meta name="author" content="IAmPresenting" />
      <meta name="description" content={props.Description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.Title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={props.Description} />
      <meta property="og:image" content={props.Image} />
      <meta property="og:site_name" content="IAMPRESENTING (Pty) Ltd" />
      <meta name="twitter:title" content="IAMPRESENTING" />
      <meta name="twitter:description" content={props.Description} />
      <meta name="twitter:image" content={props.Image} />
      <meta name="twitter:creator" content="@IAmPresenting" />
      <link rel="icon" href={props.Image} sizes="16x16" />
      <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
      <link rel="canonical" href="https://iampresenting.com/" />
    </Head>
  );
}

Meta.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  Image: PropTypes.string,
};
