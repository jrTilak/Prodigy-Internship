import blog1Img from "@/assets/blog1.png";
import blog2Img from "@/assets/blog2.webp";
import blog3Img from "@/assets/blog3.png";
import blog4Img from "@/assets/blog4.jpg";
import Image from "next/image";

const BLOGS = [
  {
    link: "#",
    img: blog3Img,
    category: "Programming",
    date: "Jan 1, 2024",
    title: "Dockers",
    text: "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications.",
  },
  {
    link: "#",
    img: blog4Img,
    category: "Design",
    date: "Jan 1, 2023",
    title: "Github",
    text: "GitHub is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects. Team members can work on files and easily merge their changes in with the master branch of the project. GitHub is a powerful tool that facilitates collaboration among developers. It is used for version control and is a way for developers to keep track of changes made to their code. GitHub is a web-based platform that is used for version control",
  },
  {
    link: "#",
    img: blog1Img,
    category: "Javascript",
    date: "Feb 23, 2022",
    title: "Design Pattern in JavaScript",
    text: "In JavaScript, a design pattern is a reusable solution to a common problem that occurs in software design. It is a template or description of how to solve a problem that can be used in many different situations. Design patterns can speed up the development process by providing tested, proven development paradigms. Effective software design requires considering issues that may not become visible until later in the implementation. Reusing design patterns helps to prevent subtle issues that can cause major problems and improves code readability for coders and architects who are familiar with the patterns.",
  },
  {
    link: "#",
    img: blog2Img,
    category: "Design",
    date: "Feb 23, 2023",
    title: "Best fonts ever",
    text: "Fonts are the most important element of any design. It is the first thing that a user notices when they visit a website. The font of a website can make or break the design. It is important to choose the right font for your website. There are thousands of fonts available on the internet. It can be overwhelming to choose the right font for your website.",
  },
];

const Blog = () => {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {BLOGS.map(({ category, date, img, link, text, title }) => (
            <li className="blog-post-item" key={title}>
              <div>
                <figure className="blog-banner-box">
                  <Image
                    src={img}
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{category}</p>

                    <span className="dot"></span>

                    <time dateTime={date}>{date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{title}</h3>

                  <p className="blog-text">{text.substring(0, 120)}...</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
export default Blog;
