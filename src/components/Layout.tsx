import React from "react";

import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <nav className="container-fluid navbar-custom">
        <Link
          className="brand"
          href="/"
        >
          Clean Blog
        </Link>

        <div className="navbar-links">
          <Link
            className="nav-link"
            href="/"
          >
            Home
          </Link>
          <Link
            className="nav-link"
            href="/about"
          >
            About
          </Link>
        </div>
      </nav>

      <main className={lora.className}>{children}</main>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <ul className="list-inline text-center">
                <li>
                  <a
                    href="https://instagram.com/khoahd7621"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/khoahd7621"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/khoahd7621"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; Clean Blog {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
