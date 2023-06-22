type Props = {
  backgroundImg: string;
};

export default function Header({ backgroundImg }: Props) {
  return (
    <header
      className="intro-header"
      style={{
        backgroundImage: `url('${backgroundImg}')`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <hr className="small" />
              <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
