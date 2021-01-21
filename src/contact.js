import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-w3l">
          <div className="container">
            <h3 className="tittle-w3l">
              Contact Us
              <span className="heading-style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>
            <div className="contact agileits">
              <div className="contact-agileinfo">
                <div className="contact-form wthree">
                  <form action="#" method="post">
                    <div className="">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="">
                      <input
                        className="text"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="">
                      <input
                        className="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="">
                      <textarea
                        placeholder="Message"
                        name="message"
                        required=""
                      ></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <div className="contact-right wthree">
                  <div className="col-xs-7 contact-text w3-agileits">
                    <h4>GET IN TOUCH :</h4>
                    <p>
                      <i className="fa fa-map-marker"></i> Lahore Cantt, Lahore.
                    </p>
                    <p>
                      <i className="fa fa-phone"></i> Telephone : +92 xxx
                      xxxxxxx
                    </p>
                    <p>
                      <i className="fa fa-fax"></i> FAX : +X XXX XXX XXXX
                    </p>
                    <p>
                      <i className="fa fa-envelope-o"></i> Email :
                      <a href="ST-Garmets@example.com">
                        ST-Garmets@example.com
                      </a>
                    </p>
                  </div>
                  <div className="col-xs-5 contact-agile">
                    <img src="images/contact2.jpg" alt="" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default Contact;
