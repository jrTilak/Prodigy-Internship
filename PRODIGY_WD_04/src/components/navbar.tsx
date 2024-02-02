"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const LINKS = ["About", "Resume", "Projects", "Blog", "Contact"];
  const pathname = usePathname();
  console.log("Path", pathname);
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {LINKS.map((link, index) => (
          <li className="navbar-item" key={index}>
            <Link
              href={`/${link.toLowerCase()}`}
              className={`navbar-link ${
                pathname === `/${link.toLowerCase()}` ? "active" : ""
              }`}
              data-nav-link
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
