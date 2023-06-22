import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import ArticleApi from "@/apis/ArticleApi";
import Header from "@/components/Header";
import { Article } from "@/models/Article";

export const getServerSideProps: GetServerSideProps<{
  data?: Article;
}> = async (context) => {
  const { id } = context.query;
  const response = await ArticleApi.getArticleList();
  const article = response.news.find((item) => item.id === +(id as string));
  if (article === undefined) {
    return {
      notFound: true,
    };
  }
  return { props: { data: article } };
};

export default function BlogDetailPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Clean Blog - {data?.headline}</title>
        <meta
          name="description"
          content={`Clean Blog - ${data?.headline}`}
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
          backgroundImg="https://picsum.photos/1900/1267/?blur=4"
          heading={data?.headline ?? ""}
          subheading={data?.abstract ?? ""}
          meta={
            <span className="meta">
              Posted by <a href="#">{data?.author ?? ""}</a> on {new Date(data?.date ?? "").toLocaleDateString()}
            </span>
          }
        />

        {/* Post Content */}
        <article>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 offset-lg-2 col-md-10 offset-md-1"
                dangerouslySetInnerHTML={{ __html: data?.body ?? "" }}
              />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
