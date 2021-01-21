import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="welcome">
          <div className="container">
            <h3 className="tittle-w3l">
              Welcome to our Site
              <span className="heading-style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>
            <div className="w3l-welcome-info">
              <div className="col-sm-6 col-xs-6 welcome-grids">
                <div className="welcome-img">
                  <img
                    src="images/about.jpg"
                    className="img-responsive zoom-img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6 col-xs-6 welcome-grids">
                <div className="welcome-img">
                  <img
                    src="images/about2.jpg"
                    className="img-responsive zoom-img"
                    alt=""
                  />
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="w3l-welcome-text">
              <p>
                ST Garmets is very keen to provide it`s Customers with the best
                of all stuffs available and always look forward to produce new
                Style and fashion with reasonable price. ST Garmets make clotes
                of every type such that wool, lether, jeans, cotton and silk
                etc. ST Garmets always keep eyes on what`s trending and try to
                make Best of All products.
              </p>
              <p>
                ST Garmets is established in year 2020 as a Bussiness Startup by
                a Student of Undergraduate. Basically he had taken this
                E-commerce cloth Selling app/Website as his Semester Project as
                well as Final Year Project. Now ST Garmets is known as one of
                the best online selling cloth app/sites.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <h3 className="tittle-w3l">
              Our Video
              <span className="heading-style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>
            <div className="about-tp">
              <div className="col-md-8 about-agileits-w3layouts-left">
                <iframe
                  src="https://player.vimeo.com/video/15520702?color=ffffff&title=0&byline=0"
                  title="video"
                ></iframe>
              </div>
              <div className="col-md-4 about-agileits-w3layouts-right">
                <div className="img-video-about">
                  <img src="images/videoimg2.png" alt="" />
                </div>
                <h4>ST Garmets</h4>
                <p>
                  No.1 Leading E-commerce marketplace with over 70 million
                  Products
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
