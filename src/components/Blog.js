import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "Transforming Design into Functional Websites: Unveiling the Art of Web Development",
    img: "img/blog/blog-post-1.jpg",
    tag: "Branding ,Development",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "In the vast landscape of the digital realm, the convergence of design and functionality stands as the hallmark of a successful online presence. The bridge between aesthetic appeal and seamless user experience lies in the ability to transform intricate design files into fully operational websites. As a seasoned expert in this domain, my forte revolves around the artistry of converting diverse design formats – PSD, Figma, XD, and beyond – into vibrant and dynamic WordPress websites.",
      "At the core of my service is a passion for the fusion of web development and design. It's more than a mere technical process; it's an art form that harmonizes creativity with functionality. Each design file holds a unique vision, a narrative that awaits translation into a digital reality. It's in this transformational journey that my expertise thrives.",
      "The journey begins with an amalgamation of innovation and technical prowess. The initial step involves understanding the essence of the design file, unraveling its intricate layers, and discerning the underlying functionalities. Whether it's the meticulous attention to detail in a PSD file or the collaborative brilliance of a Figma or XD design, each format presents its own set of challenges and possibilities.","Precision is paramount in this process. Every pixel, every line of code, and every interactive element is meticulously crafted to mirror the envisioned design faithfully. The goal isn't merely to replicate the design but to breathe life into it, ensuring its seamless transition into a fully functional WordPress website.","WordPress, with its versatility and robustness, serves as the canvas for this transformative process. Its dynamic nature allows for the integration of design elements while ensuring scalability and responsiveness across various devices. The amalgamation of design intricacies with WordPress's functionality results in an immersive user experience, captivating visitors and fostering engagement.","Moreover, the journey from design to a functional website isn't just a one-time conversion; it's an ongoing refinement process. Continuous iterations, optimizations, and adaptations are carried out to align with evolving trends and user preferences, ensuring the website remains both visually striking and functionally impeccable.","In conclusion, the transformation of design into a fully functional website stands as a testament to the synergy between creativity and technical expertise. It's an artful fusion that encapsulates the essence of a brand, captivating audiences while offering a seamless and engaging digital experience. As I continue to immerse myself in this realm, I am driven by the passion to create digital landscapes where design flourishes and functionality thrives.","For businesses and individuals seeking to materialize their design visions into functional online platforms, the journey awaits – a journey where design meets functionality, and where creativity converges with technical finesse to craft digital masterpieces."
    ],
  },
  {
    title: "Effective Marketing Strategy tips",
    img: "img/blog/blog-post-2.jpg",
    tag: "Design",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "free psd and sketch ressouces",
    img: "img/blog/blog-post-3.jpg",
    tag: "Media",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "How to become a successful freelancer",
    img: "img/blog/blog-post-4.jpg",
    tag: "Technology",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            latest <span>posts</span>
          </h2>
          <span className="title-head-subtitle">
            tips, insights, and best practices about web design and developpment
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
