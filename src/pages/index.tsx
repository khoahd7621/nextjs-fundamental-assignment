import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import ArticleApi from "@/apis/ArticleApi";
import homeBgImg from "@/assets/images/home-bg.jpg";
import Header from "@/components/Header";
import PreviewPost from "@/components/PreviewPost";
import { Article } from "@/models/Article";

export default function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(articles);

  return (
    <>
      <Head>
        <title>Clean Blog - Home</title>
        <meta
          name="description"
          content="Clean Blog - Home"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <Header
          backgroundImg={homeBgImg.src}
          heading="Clean Blog"
          subheading="A Blog Theme by Start Bootstrap"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              {articles.map((article) => (
                <PreviewPost
                  key={article.id}
                  data={article}
                />
              ))}
              <ul className="pager">
                <li className="next">
                  <a href="#">Older Posts &rarr;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const response = await ArticleApi.getArticleList();
  return { props: { articles: response.news } };
};
