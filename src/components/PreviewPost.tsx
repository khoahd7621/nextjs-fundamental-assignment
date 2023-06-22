import Link from "next/link";

import { Article } from "@/models/Article";

type Props = {
  data: Article;
};

export default function PreviewPost({ data }: Props) {
  return (
    <>
      <div className="post-preview">
        <Link href={`${data.id}`}>
          <h2 className="post-title">{data.headline}</h2>
          <h3 className="post-subtitle">{data.abstract}</h3>
        </Link>
        <p className="post-meta">
          Posted by <a href="#">{data.author}</a> on {new Date(data.date).toLocaleDateString()}
        </p>
      </div>
      <hr />
    </>
  );
}
