import { useContext } from "react";
import NavContext from "../context/navContext";



// 


const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          UI/UX & Graphic Design Specialist | Custom Web Solutions | PPT Expert
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />

            </div>

            <p className="d-block d-md-none">
              Hey, I help businesses create 𝐡𝐢𝐠𝐡-𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐧𝐠 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐚𝐥/𝐞𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐞 websites and strong 𝐛𝐫𝐚𝐧𝐝 𝐢𝐝𝐞𝐧𝐭𝐢𝐭𝐢𝐞𝐬 that truly resonate with their audience. I specialize in 𝐜𝐮𝐬𝐭𝐨𝐦 W𝐞𝐛 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 and G𝐫𝐚𝐩𝐡𝐢𝐜 𝐝𝐞𝐬𝐢𝐠𝐧 that work seamlessly to boost engagement and drive results.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Syed
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Ismail
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>04 January
                    2004
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Pakistani
                  </h6>
                </li>

              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>5+ years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Gender</span>
                    Male
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English , Urdu
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Phone</span><a href="tel:+923192350193">+92 319 2350 193</a>
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    <a href="mailto:syedm.ismail04@gmail.com">syedm.ismail04@gmail.com</a>
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    daria.taylor
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Insta</span>
                    <a href="  https://instagram.com/the_real_ismail">the_real_ismail</a>       
                  </h6>
                </li> */}
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~0109b3ad55ba79761f" className="btn btn-resume">

                <span >
                  Visit my Upwork
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Visit LinkedIn Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Visit LinkedIn Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Sep 2025 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Senior CMS Designer & Developer
                        <span className="separator" />
                        <span className="font-weight-700">Dymax Designs</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Specializing in WordPress, Wix, Shopify, and Squarespace. I transform custom Figma and XD designs into fully functional, responsive websites with a strong focus on UI/UX design.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Dec 2022 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        UI/UX Designer
                        <span className="separator" />
                        <span className="font-weight-700">Cryptoexpress (Thailand)</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Designing user-centered experiences and visually stunning interfaces for high-converting marketing solutions.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Jan 2024 - Sep 2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Senior CMS Developer
                        <span className="separator" />
                        <span className="font-weight-700">DiligentTek</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Focused on converting custom designs (Figma/XD) into WordPress and enhancing UI/UX for engaging experiences.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Aug 2023 - Jan 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Front End / WordPress Developer
                        <span className="separator" />
                        <span className="font-weight-700">TechStead</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Played a pivotal role in WordPress web development projects, focusing on custom design conversion and performance optimization.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Feb 2023 - Aug 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Wordpress Developer
                        <span className="separator" />
                        <span className="font-weight-700">ZCUBE</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Developed skills in e-commerce, blogs, and appointment websites with expert-level HTML/CSS craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Freelance UI/UX & Graphic Designer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Delivering custom branding and web solutions for international clients with a focus on functional and scalable design.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}

            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">

              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2026
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        BS, Computer Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          Iqra University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Currently pursuing a Bachelor of Science in Computer Science, focusing on programming, algorithms, and software development fundamentals.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Intermediate , Pre-Engineering
                        <span className="separator" />
                        <span className="font-weight-700">
                          Govt. Dehli College
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        I completed my Intermediate in Pre-Engineering at Govt. Dehli College, where I gained a strong understanding of mathematics, physics, chemistry, and engineering principles, laying the groundwork for my further studies in the field of technology and engineering.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Matric, Computer Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          S.M PUBLIC SCHOOL
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        I studied Computer Science at S.M. Public School.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Certifications Starts */}
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section certifications-title">
                Certifications
              </h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="resume-items">
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        August 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Certified Javascript Developer
                        <span className="separator" />
                        <span className="font-weight-700">W3Schools</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="resume-items">
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        July 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        CCEE Graphics & Web Designer
                        <span className="separator" />
                        <span className="font-weight-700">NED University</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications Ends */}
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={96}
                  style={{ width: "96%" }}
                />
                <span className="percent" style={{ right: "calc(4% - 21px)" }}>
                  96%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">jquery</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={99}
                  style={{ width: "99%" }}
                />
                <span className="percent" style={{ right: "calc(1% - 21px)" }}>
                  99%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">illustrator</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Figma</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">PowerPoint</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Ends */}
        </div>
        {/* Resume Ends */}
        {/* Divider */}
        <div className="container col-12 mx-auto text-center">
          <hr className="about-section" />
        </div>
        {/* Divider*/}
      </div>
    </section>
  );
};

export default About;
