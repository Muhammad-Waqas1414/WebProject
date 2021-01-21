import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Carousel extends React.Component {
  render() {
    return (
      <Router>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            <li data-target="#myCarousel" data-slide-to="3" className=""></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="container">
                <div className="carousel-caption">
                  <h3>
                    Big
                    <span>Save</span>
                  </h3>
                  <p>
                    Get flat
                    <span>10%</span> Cashback
                  </p>
                  <Link className="button2" to="/product">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="item item2">
              <div className="container">
                <div className="carousel-caption">
                  <h3>
                    Healthy
                    <span>Saving</span>
                  </h3>
                  <p>
                    Get Upto
                    <span>30%</span> Off
                  </p>
                  <Link className="button2" to="/product">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="item item3">
              <div className="container">
                <div className="carousel-caption">
                  <h3>
                    Big
                    <span>Deal</span>
                  </h3>
                  <p>
                    Get Best Offer Upto
                    <span>20%</span>
                  </p>
                  <Link className="button2" to="/product">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="item item4">
              <div className="container">
                <div className="carousel-caption">
                  <h3>
                    Today
                    <span>Discount</span>
                  </h3>
                  <p>
                    Get Now
                    <span>40%</span> Discount
                  </p>
                  <Link className="button2" to="/product">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Router>
    );
  }
}

export default Carousel;
