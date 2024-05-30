import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import NavContext from "../context/navContext";

const Contact = () => {
  const { nav } = useContext(NavContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "portfoliomailer", // service id
          "template_yndg08r", // template id
          templateParams,
          "33It9fiie55VrVANy" // public api key
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact" className={`${nav === "contact" ? "active" : ""}`}>
      <div className="contact-container">
        {/* Main Heading Starts */}
        <div className="container page-title text-center">
          <h2 className="text-center">
            get <span>in touch</span>
          </h2>
          <span className="title-head-subtitle">
            I’m always open to discussing product design work or partnerships.
          </span>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          <div className="row contact">
            {/* Contact Infos Starts */}
            <div className="col-12 col-md-4 col-xl-4 leftside">
              <ul className="custom-list">
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">Phone</span>
                    <i className="fa fa-whatsapp" />
                    <span className="contact-content">+92 319 2350 193</span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">email</span>
                    <i className="fa fa-envelope-o fs-14" />
                    <span className="contact-content">syedm.ismail04@gmail.com</span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">instagram</span>
                    <i className="fa fa-instagram" />
                    <span className="contact-content">the_real_ismail</span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">LinkedIn </span>
                    <i className="fa fa-linkedin" />
                    <span className="contact-content">
                      <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/theismail04">
                        theismail04
                      </a>
                    </span>
                  </h6>
                </li>
              </ul>
              {/* Social Media Profiles Starts */}
              <div className="social">
                <h6 className="font-weight-600 uppercase">Social Profiles</h6>
                <ul className="list-inline social social-intro text-center p-none">
                  <li className="facebook">
                    <a title="Facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/TheRealIsmail04">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a title="Instagram" target="_blank" rel="noreferrer" href="https://instagram.com/the_real_ismail">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="whatsapp">
                    <a title="Whatsapp" target="_blank" rel="noreferrer" href="https://wa.link/hnjh05">
                      <i className="fa fa-whatsapp" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a title="LinkedIn" target="_blank" rel="noreferrer" href="https://linkedin.com/in/theismail04">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col-12 col-md-8 col-xl-8 rightside">
              <p>
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
              <form className="contactform" onSubmit={onSubmit}>
                <div className="row">
                  {/* Name Field Starts */}
                  <div className="form-group col-xl-6">
                    <i className="fa fa-user prefix" />
                    <input
                      id="name"
                      name="name"
                      onChange={onChange}
                      value={name}
                      type="text"
                      className="form-control"
                      placeholder="YOUR NAME"
                      required=""
                    />
                  </div>
                  {/* Name Field Ends */}
                  {/* Email Field Starts */}
                  <div className="form-group col-xl-6">
                    <i className="fa fa-envelope prefix" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={onChange}
                      value={email}
                      className="form-control"
                      placeholder="YOUR EMAIL"
                      required=""
                    />
                  </div>
                  {/* Email Field Ends */}
                  {/* Comment Textarea Starts */}
                  <div className="form-group col-xl-12">
                    <i className="fa fa-comments prefix" />
                    <textarea
                      id="comment"
                      name="message"
                      onChange={onChange}
                      value={message}
                      className="form-control"
                      placeholder="YOUR New MESSAGE"
                      required=""
                    />
                  </div>
                </div>

                {/* Submit Form Button Starts */}
                <div className="submit-form">
                  <button
                    className="btn button-animated"
                    type="submit"
                    name="send"
                  >
                    <span>
                      <i className="fa fa-send" /> Send Message
                    </span>
                  </button>
                </div>
                {/* Submit Form Button Ends */}
                <div className="form-message">
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <span className="output_message text-center font-weight-600 uppercase" />
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
