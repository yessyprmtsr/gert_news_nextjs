import Layout from "../components/Layout";
import "../styles/globals.css";


//export to google analytics
export const GA_TRACKING_ID = "<YOUR_GA_TRACKING_ID>";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_location: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const reportWeb = ({ id, name, label, value }) => {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
};
  // window.gtag('event', name,{
  //   event_category:
  //   label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
  //   value: Math.round(name === "CLS" ? value * 1000 : value),
  //   event_label: id,
  //   //stop bouncy rate
  //   non_interaction: true,
  // });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

