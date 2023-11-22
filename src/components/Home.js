import { useContext } from "react";
import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source
              src={require("../../public/img/sunset.mp4")}
              type="video/mp4"
            />
            <source
              src={require("../../public/img/sunset.mp4")}
              type="video/ogg"
            />
          </video>
        )}
        {leftImg && (
            <img
              className="leftimagepicture"
              src={`${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`}
              alt=""
            />
        )}
        <div className="main-text" id="selector">
          <h3>Welcome!</h3>
          <AnimationText />
          <p>
            {`I'm`} Experienced Front End / WordPress Developer and Design Specialist proficient in HTML, CSS, JavaScript, jQuery, Bootstrap & More, and Graphic design tools like Illustrator & PhotoShop.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
