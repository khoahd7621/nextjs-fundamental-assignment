import { Article } from "@/models/Article";

type Response = {
  news: Article[];
};

const ArticleApi = {
  getArticleList: async (): Promise<Response> => {
    const res = await fetch("https://fakenews.squirro.com/news/sport");
    return await res.json();
  },
};

export default ArticleApi;
