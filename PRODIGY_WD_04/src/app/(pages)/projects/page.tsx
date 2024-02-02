import { FaChevronDown } from "react-icons/fa6";
import { RxEyeClosed } from "react-icons/rx";

import project1Img from "@/assets/project-1.jpg";
import project2Img from "@/assets/project-2.png";
import project3Img from "@/assets/project-3.jpg";
import project4Img from "@/assets/project-4.png";
import project5Img from "@/assets/project-5.png";
import project6Img from "@/assets/project-6.png";
import project7Img from "@/assets/project-7.png";
import project8Img from "@/assets/project-8.jpg";
import project9Img from "@/assets/project-9.png";
import Image from "next/image";

const PROJECTS = [
  {
    img: project2Img,
    title: "Fundo",
    category: "Web design",
  },
  {
    img: project1Img,
    title: "Orizon",
    category: "Web development",
  },
  {
    img: project4Img,
    title: "DSM.",
    category: "Web design",
  },
  {
    img: project5Img,
    title: "MetaSpark",
    category: "Web design",
  },
  {
    img: project3Img,
    title: "Brawlhalla",
    category: "Applications",
  },
  {
    img: project6Img,
    title: "Summary",
    category: "Web development",
  },
  {
    img: project7Img,
    title: "Task Manager",
    category: "Applications",
  },
  {
    img: project8Img,
    title: "Arrival",
    category: "Web development",
  },
  {
    img: project9Img,
    title: "Arrival",
    category: "Web development",
  },
];

const Portfolio = () => {
  const FILTERS = ["All", "Web design", "Applications", "Web development"];
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {PROJECTS.map(({ img, title, category }) => (
            <li
              key={title}
              className="project-item  active"
              data-filter-item
              data-category={category}
            >
              <div>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <RxEyeClosed />
                  </div>

                  <Image src={img} alt="finance" />
                </figure>

                <h3 className="project-title">{title}</h3>

                <p className="project-category">{category}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
export default Portfolio;
