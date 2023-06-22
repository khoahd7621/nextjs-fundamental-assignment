import homeBgImg from "@/assets/images/home-bg.jpg";

import Header from "@/components/Header";
import PreviewPost from "@/components/PreviewPost";
import { PreviewPost as PreviewPostVM } from "@/models/PreviewPost";

const listBlogs: PreviewPostVM[] = [
  {
    id: 1,
    slug: "blog-slug-1",
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up",
    createdAt: "September 24, 2014",
    createdBy: "Start Bootstrap",
  },
  {
    id: 2,
    slug: "blog-slug-2",
    title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    subtitle: "",
    createdAt: "September 18, 2014",
    createdBy: "Start Bootstrap",
  },
  {
    id: 3,
    slug: "blog-slug-3",
    title: "Science has not yet mastered prophecy",
    subtitle: "We predict too much for the next year and yet far too little for the next ten.",
    createdAt: "August 24, 2014",
    createdBy: "Start Bootstrap",
  },
  {
    id: 4,
    slug: "blog-slug-4",
    title: "Failure is not an option",
    subtitle: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
    createdAt: "July 8, 2014",
    createdBy: "Start Bootstrap",
  },
];

export default function Home() {
  return (
    <main>
      <Header
        backgroundImg={homeBgImg.src}
        heading="Clean Blog"
        subheading="A Blog Theme by Start Bootstrap"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            {listBlogs.map((blog) => (
              <PreviewPost
                key={blog.id}
                data={blog}
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
  );
}
