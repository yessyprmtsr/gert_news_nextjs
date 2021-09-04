import { useRouter } from "next/router";
import Link from 'next/link'
import { server } from '../../../config/index';
import Meta from "../../../components/Meta";
const article = ({ article }) => {
  //using router
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
    <Meta title={article.title} description={article.excerpt}/>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>

    </>
  );
};

//fetch data from request server
// export const getServerSideProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await result.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// //fetch data static
export const getStaticProps = async (context) => {
  const result = await fetch(
    `${server}/api/articles/${context.params.id}`
  );
  const article = await result.json();
  return {
    props: {
      article,
    },
  };
};

// //fetch data with paths
export const getStaticPaths = async (context) => {
  const result = await fetch(`${server}/api/articles/`);
  const articles = await result.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({params: {id: id.toString()}}))
  return {
    paths,
    fallback: false
  };
};

export default article;
