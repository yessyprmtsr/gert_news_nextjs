import Head from "next/head";
//create custom component
const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'web development, programming, software',
    description: 'Get the latest news up to date'
}

export default Meta;
