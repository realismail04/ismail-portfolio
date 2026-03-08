import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import { ImgSideBar } from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Prologix LLC",
    industry: "IT & Logistics",
    category: "Corporate Website",
    techUsed: ["WordPress", "Elementor", "CSS3", "JavaScript"],
    skillsUsed: ["Frontend Development", "Responsive Design", "SEO Optimization"],
  },
  {
    img: "img/projects/project-2.jpg",
    name: "AAA Chickens",
    industry: "Farming & Poultry",
    category: "E-Commerce / Animal & Farming Supplies Website",
    techUsed: ["WordPress", "Figma", "Elementor", "WooCommerce", "HTML5/CSS3"],
    skillsUsed: [
      "Responsive Web Design",
      "UI/UX Design",
      "Online Store Setup",
      "Product Listing & Inventory Integration",
      "UI/UX for eCommerce",
    ],
  },
  {
    img: "img/projects/project-3.webp",
    name: "Fashion Store",
    industry: "E-Commerce",
    category: "Online Store",
    techUsed: ["WordPress", "PHP", "Theme", "JavaScript", "CSS"],
    skillsUsed: ["Theme Customization", "Product Integration", "Payment Setup"],
  },
  {
    img: "img/projects/project-4.webp",
    name: "Wellness Space",
    industry: "Health & Wellness",
    category: "Service Booking Website",
    techUsed: ["Wix", "Velo", "CSS", "jQuery"],
    skillsUsed: ["UI Design", "Interactive Layout", "Booking Integration"],
  },
  {
    img: "img/projects/project-5.webp",
    name: "BrightMedia Studio",
    industry: "Media & Marketing",
    category: "Portfolio Website",
    techUsed: ["Squarespace", "JavaScript", "HTML5"],
    skillsUsed: ["Creative Direction", "Branding", "Minimal Design"],
  },
  {
    img: "img/projects/project-6.webp",
    name: "The Hail Gate",
    industry: "Events & Entertainment",
    category: "Community & Events Website",
    techUsed: ["WordPress", "Elementor", "CSS3"],
    skillsUsed: ["Event Management UI", "Responsive Design"],
  },
  {
    img: "img/projects/project-7.webp",
    name: "Dr. Daphne",
    industry: "Child Care & Education",
    category: "Professional Development Website",
    techUsed: ["WordPress", "Elementor", "HTML5/CSS3"],
    skillsUsed: ["Educational Content Layout", "Responsive Design"],
  },
  {
    img: "img/projects/project-8.png",
    name: "Sweatcap LLC",
    industry: "Construction & General Contracting",
    category: "Corporate Website",
    techUsed: ["WordPress", "Elementor", "PHP"],
    skillsUsed: ["Service Showcase", "Lead Generation"],
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Sandi Rogers",
    industry: "Natural Medicine & Publishing",
    category: "Author & Speaker Website",
    techUsed: ["WordPress", "Elementor", "WooCommerce"],
    skillsUsed: ["E-book Integration", "Course Management"],
  },
  {
    img: "img/projects/project-10.png",
    name: "Clearwater Plumbers",
    industry: "Home Services",
    category: "Service Website",
    techUsed: ["WordPress", "Elementor", "JavaScript"],
    skillsUsed: ["Appointment Booking", "Local SEO"],
  },
  {
    img: "img/projects/project-21.jpg",
    name: "Beverly Hills Fine Homes",
    industry: "Real Estate",
    category: "Luxury Property Management",
    techUsed: ["WordPress", "Elementor", "Theme Customization"],
    skillsUsed: ["High-End UI Design", "Interactive Property Listings"],
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);

  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              Explore a selection of my recent design and web projects.
            </span>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <ul className="row" id="portfolio-items">
                {workData.map((work, i) => (
                  <li className="col-12 col-md-6 col-lg-4" key={i}>
                    <a href="#" onClick={() => setActive(i + 1)}>
                      <img src={work.img} alt={work.name} className="img-fluid" />
                      <div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Overlay */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
        </div>

        {/* Project Detail View */}
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            <div className="project-info-main-content">
              <ImgSideBar img={work.img} />
            </div>

            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-building" />
                    <span className="font-weight-400 project-label"> Industry </span> :
                    <span className="font-weight-600 uppercase"> {work.industry}</span>
                  </li>
                  <li>
                    <i className="fa fa-folder-open-o" />
                    <span className="font-weight-400 project-label"> Category </span> :
                    <span className="font-weight-600 uppercase"> {work.category}</span>
                  </li>
                  <li>
                    <i className="fa fa-code" />
                    <span className="font-weight-400 project-label"> Tech Used </span> :
                    <span className="font-weight-600 uppercase">
                      {work.techUsed.join(", ")}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-lightbulb-o" />
                    <span className="font-weight-400 project-label"> Skills Used </span> :
                    <span className="font-weight-600 uppercase">
                      {work.skillsUsed.join(", ")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" /> Close
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Mobile Back Button */}
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};

export default Work;
