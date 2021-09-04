//when you want to using custom title, text, keyword, etc.

import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import {server} from  "../config/index"
// import Image from 'next/image'

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
    <ArticleList articles={articles}/>
    </div>
  );
}

//fetch data from api
export const getStaticProps = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};


// export const getStaticProps = async () => {
//   const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await result.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
