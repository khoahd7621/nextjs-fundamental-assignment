import Link from "next/link";

import { PreviewPost as PreviewPostVM } from "@/models/PreviewPost";

type Props = {
  data: PreviewPostVM;
};

export default function PreviewPost({ data }: Props) {
  return (
    <>
      <div className="post-preview">
        <Link href={data.slug}>
          <h2 className="post-title">{data.title}</h2>
          <h3 className="post-subtitle">{data.subtitle}</h3>
        </Link>
        <p className="post-meta">
          Posted by <a href="#">{data.createdBy}</a> on {new Date(data.createdAt).toLocaleDateString()}
        </p>
      </div>
      <hr />
    </>
  );
}
