import "../styles/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    route.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      route.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [route.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
