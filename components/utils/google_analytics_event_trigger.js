export const pageview = (url) => {
  if (window !== undefined) {
    window.gtag("config", process.env.GOOGLANALY_ID, {
      page_path: url,
    });
  }
};

//generic event
export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
