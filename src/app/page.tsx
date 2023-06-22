import homeBgImg from "@/assets/images/home-bg.jpg";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header backgroundImg={homeBgImg.src} />
    </main>
  );
}
