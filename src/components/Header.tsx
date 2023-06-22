import React from "react";

type Props = {
  backgroundImg: string;
  heading: string;
  subheading: string;
  meta?: React.ReactNode;
};

export default function Header({ backgroundImg, heading, subheading, meta }: Props) {
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
            <div className={meta ? "post-heading" : "site-heading"}>
              <h1>{heading}</h1>
              {meta ? (
                <>
                  <h2 className="subheading">{subheading}</h2>
                  {meta}
                </>
              ) : (
                <>
                  <hr className="small" />
                  <span className="subheading">{subheading}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
