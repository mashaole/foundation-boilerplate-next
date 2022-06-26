import React from "react";
import Meta from "../components/Meta";
import { event } from "../components/utils/google_analytics_event_trigger";

const Home = () => {
  //event({ action: "click", params: { button: "Request Quote" } }); // Used to trigger a Google Analytics event
  //process.env.VARIABLE1 used to get the value of the environment variable VARIABLE1

  return (
    <>
      <Meta
        Title="IAMPRESENTING"
        Description="IAMPRESENTING (Pty) Ltd"
        Image="../public/apple-touch-icon.png"
      />
      <div className="center">Home Page</div>
    </>
  );
};

export default Home;
