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
    title: "Building Custom WordPress Websites from Scratch",
    img: "img/blog/blog-post-2.jpg",
    tag: "Design",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "In the ever-evolving digital landscape, a robust online presence is fundamental for businesses and individuals alike. A WordPress website stands as a cornerstone, offering versatility, scalability, and an array of possibilities. However, the journey from ideation to a fully functional WordPress website demands expertise, creativity, and meticulous attention to detail.",
      "Introducing our bespoke service dedicated to crafting tailor-made WordPress websites from scratch. Our mission is to transform visions into digital realities, offering a seamless and immersive online experience that aligns perfectly with your brand identity and goals.", 
      "Our process begins with an in-depth consultation, where we delve into your aspirations, brand ethos, and specific requirements. We believe in the power of collaboration, working closely with you to grasp the essence of your vision. Whether you seek an e-commerce platform, a portfolio site, a blog, or a corporate website, understanding your objectives forms the bedrock of our approach.","With a clear understanding of your vision, our expert design team sketches the blueprint of your website. Through meticulous wireframing and prototyping, we craft a visually captivating and user-centric design. Each element, from color palettes to typography, is meticulously chosen to resonate with your brand's personality and appeal to your target audience.","The development phase is where the magic truly happens. Our seasoned developers harness the power of WordPress, coding and implementing the design with pixel-perfect precision. We ensure that your website isn't just aesthetically pleasing but also optimized for performance, responsiveness across devices, and seamless functionality.","No two brands are alike, and that's why we emphasize customization. Our team fine-tunes every aspect of the website, integrating custom functionalities and features tailored to your unique needs. From plugins to security measures, we optimize the website for both user experience and backend efficiency.","Rigorous testing is a non-negotiable aspect of our process. We conduct comprehensive checks to ensure the website functions flawlessly across browsers, ensuring a smooth user experience. From functionality tests to security audits, our quality assurance guarantees a polished, error-free website.","Upon your approval, it's time for the grand launch! However, our commitment doesn't end there. We offer ongoing support, providing maintenance, updates, and assistance to ensure your website remains at the forefront of excellence.","A bespoke WordPress website isn't merely a digital asset; it's a reflection of your brand's essence in the online sphere. Our dedication lies in crafting immersive digital experiences that resonate with your audience and elevate your online presence.","Embrace the journey of creating a bespoke WordPress website with us – a journey where your vision meets technical finesse, resulting in a digital masterpiece that defines your online identity. Let's embark together on this transformative voyage of digital innovation and unparalleled excellence."
    ],
  },
  {
    title: "Advantages of Using WordPress",
    img: "img/blog/blog-post-3.jpg",
    tag: "Media",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "WordPress, the most popular content management system (CMS) in the world, has gained immense popularity among website owners and bloggers. In this article, we will explore the numerous advantages of using WordPress as your preferred platform for creating and managing your website or blog.",
      "One of the biggest advantages of WordPress is its user-friendly interface. Even if you have no prior technical knowledge, you can easily navigate through the various features and functionalities of WordPress. With its intuitive dashboard, you can effortlessly create, edit, and publish content.",
      "WordPress offers a vast collection of themes and plugins that allow you to customize your website to suit your unique needs and preferences. Whether you want a professional-looking business website or a visually stunning blog, you can find a theme that matches your vision. Additionally, plugins enhance the functionality of your website by adding features such as contact forms, social media integration, and SEO optimization.","WordPress is designed with search engine optimization (SEO) in mind. It provides built-in features and plugins that help improve your website's visibility in search engine results pages (SERPs). With WordPress, you can easily optimize your website's meta tags, URLs, and content to rank higher on search engines like Google.","Whether you are running a small blog or a large e-commerce store, WordPress can handle it all. It is highly scalable and can accommodate the growth of your website without any hassle. You can easily add new pages, blog posts, products, or any other type of content as your business expands. Additionally, WordPress can be integrated with various third-party tools and platforms, making it highly flexible.","WordPress has a vibrant and active community of developers, designers, and users who are always ready to help. If you encounter any issues or have any questions, you can seek assistance from the WordPress community forums or attend local WordPress meetups. The community also regularly releases updates and security patches to ensure that your website remains safe and up to date.","In conclusion, WordPress offers numerous advantages that make it the go-to choice for website owners and bloggers. Its ease of use, wide range of themes and plugins, SEO-friendliness, scalability, flexibility, and strong community support make it a robust and reliable platform for building and managing websites. So why wait? Start using WordPress today and unlock the full potential of your online presence."
    ],
  },
  {
    title: "Benefits of Having a Website",
    img: "img/blog/blog-post-4.jpg",
    tag: "Technology",
    date: { date: "23", month: "jun", year: "2021" },
    des: [
      "Having a website in today's digital age is no longer a luxury but a necessity. Whether you are a small business owner, a freelancer, or an individual looking to establish your online presence, a website offers numerous benefits that can help you reach your goals. In this article, we will explore the various advantages of having a website and how it can positively impact your business or personal brand.",
      "One of the primary benefits of having a website is increased visibility. With a website, you can reach a wider audience and attract potential customers or clients who may not have otherwise found you. By optimizing your website for search engines, you can improve your organic search rankings and appear higher in search results, making it easier for people to discover your business.",
      "Having a professional-looking website can significantly enhance your credibility and establish trust with your audience. A well-designed website with relevant and valuable content shows that you are serious about your business and are committed to providing a positive user experience. It allows you to showcase your expertise, highlight your achievements, and display customer testimonials, all of which contribute to building trust and confidence in your brand.","Compared to traditional marketing methods, having a website is a cost-effective way to promote your business. The initial investment in creating a website may vary depending on your needs and requirements, but the long-term benefits outweigh the costs. With a website, you can reach a larger audience at a fraction of the cost of traditional advertising methods. Additionally, you can easily update and modify your website as your business grows, without incurring significant expenses.","A well-optimized website can drive more traffic to your business, resulting in increased sales and revenue. By providing a convenient and user-friendly online shopping experience, you can convert website visitors into paying customers. With features such as secure payment gateways and detailed product information, your website can help streamline the sales process and encourage customers to make a purchase. Additionally, you can implement various marketing strategies, such as email marketing and social media integration, to further boost your sales and revenue.","In conclusion, having a website offers a multitude of benefits for businesses and individuals alike. From increased visibility and credibility to 24/7 availability and cost-effectiveness, a website can be a powerful tool that helps you achieve your goals. Whether you're looking to expand your business, showcase your portfolio, or share your expertise, a well-designed website can make a significant difference in your success. So don't wait any longer, invest in a website and unlock its potential benefits for yourself."
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
