import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import image1 from "@/assets/avatar-1.png";
import image2 from "@/assets/avatar-2.png";
import image3 from "@/assets/avatar-3.png";
import image4 from "@/assets/avatar-4.png";

import logo1Color from "@/assets/logo-1-color.png";
import logo2Color from "@/assets/logo-2-color.png";
import logo3Color from "@/assets/logo-3-color.png";
import logo4Color from "@/assets/logo-4-color.png";
import logo5Color from "@/assets/logo-5-color.png";
import logo6Color from "@/assets/logo-6-color.png";
import Link from "next/link";

export default function Home() {
  const SERVICES = [
    {
      img: "https://www.svgrepo.com/show/530439/api-interface.svg",
      title: "Full Stack Development",
      text: "High-quality development of full-stack web apps using MERN stack.",
    },
    {
      img: "https://www.svgrepo.com/show/354112/nextjs.svg",
      title: "Next.js Development",
      text: "Full stack and front-end development using Next.js.",
    },
    {
      img: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      title: "React.js Development",
      text: "High-quality development of front-end web apps using React.js.",
    },
    {
      img: "https://www.svgrepo.com/show/343847/web-analytics-website-analysis.svg",
      title: "Website Development",
      text: "The most modern and high-quality website only using HTML, CSS, and JavaScript.",
    },
  ];

  const TESTIMONIALS = [
    {
      name: "Daniel lewis",
      avatar: image1,
      text: "Tilak was hired to create a full-stack web app. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. ",
    },
    {
      name: "Jessica miller",
      avatar: image2,
      text: "I am very happy with the work done by Tilak. He was hired to create a website and he did it very well. He has a lot of experience and is very concerned about the needs of client.",
    },
    {
      name: "Emily evans",
      avatar: image3,
      text: "Tilak was hired to create a Next.js web app. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
    },
    {
      name: "Henry william",
      avatar: image4,
      text: "I am very happy with the work done by Tilak. He was hired to create a website and he did it very well. He has a lot of experience and is very concerned about the needs of client.",
    },
  ];

  const CLIENTS = [
    {
      img: logo1Color,
      href: "#",
      name: "Client 1",
    },
    {
      img: logo2Color,
      href: "#",
      name: "Client 2",
    },
    {
      img: logo3Color,
      href: "#",
      name: "Client 3",
    },
    {
      img: logo4Color,
      href: "#",
      name: "Client 4",
    },
    {
      img: logo5Color,
      href: "#",
      name: "Client 5",
    },
    {
      img: logo6Color,
      href: "#",
      name: "Client 6",
    },
  ];

  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          🙋‍♂️ Greetings! I&apos;m Tilak Thapa(jrTilak), a passionate web
          developer with more than 1 years of experience. I specialize web
          development in React and Next.js. I&apos;m also a huge fan of
          open-source. I&apos;m currently looking for opportunities to work as a
          Full Stack Developer.
        </p>

        <p>
          🚀 Over the past year, I have immersed myself in the world of web
          development, constantly expanding my knowledge and sharpening my
          skills. Currently, I am focused on mastering Next.js, a powerful
          React.js library, and have successfully completed several projects to
          reinforce my understanding.
        </p>
      </section>

      {/* <!--
          - service
        --> */}

      <section className="service">
        <h3 className="h3 service-title">What I&apos;m doing</h3>

        <ul className="service-list">
          {SERVICES.map(({ img, text, title }, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image src={img} alt="design icon" width={40} height={40} />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{title}</h4>

                <p className="service-item-text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* <!--
          - testimonials
        --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {TESTIMONIALS.map(({ avatar, name, text }, index) => (
            <li className="testimonials-item" key={index}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={avatar}
                    alt="Daniel lewis"
                    placeholder="blur"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* <!--
          - clients
        --> */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {CLIENTS.map(({ img, name, href }) => (
            <li className="clients-item" key={name}>
              <Link href={href}>
                <Image src={img} alt="client logo" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
