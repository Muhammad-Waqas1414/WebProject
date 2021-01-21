import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Help extends React.Component {
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
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="tittle-w3l">
          Help
          <span className="heading-style">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </h3>

        <div className="wthree-help">
          <div className="col-xs-7 agile-left-help">
            <h3 className="w3-head">How Can We help you</h3>
            <form action="#" method="get">
              <textarea
                placeholder="Your Query"
                name="Message"
                required=""
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="col-xs-5 agile-right-help">
            <img src="images/contact2.jpg" alt="" />
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="faq-w3agile">
          <h5>Top 10 Frequently asked questions</h5>
          <ul className="faq">
            <li className="item1">
              <Link to="/" title="click here">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor vehicula ipsum nec ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item2">
              <Link to="/" title="click here">
                The standard Lorem Ipsum passage Etiam faucibus viverra libero
                vel efficitur. Ut semper nisl ut laoreet ultrices ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    {" "}
                    Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item3">
              <Link to="/" title="click here">
                Consectetuer adipiscing elit Etiam faucibus viverra libero vel
                efficitur. Ut semper nisl ut laoreet ultrices?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item4">
              <Link to="/" title="click here">
                Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel
                efficitur. Ut semper nisl ut laoreet ultrices?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    At vero eos et Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod accusamus et
                    iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item5">
              <Link to="/" title="click here">
                Euismod tincidunt laoreet Etiam faucibus viverra libero vel
                efficitur ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    At vero eos et Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod accusamus et
                    iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item6">
              <Link to="/" title="click here">
                Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    At vero eos et Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod accusamus et
                    iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item7">
              <Link to="/" title="click here">
                Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices
                ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    At vero eos et Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod accusamus et
                    iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item8">
              <Link to="/" title="click here">
                The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices
                passage ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item9">
              <Link to="/" title="click here">
                Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit
                ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident.
                  </p>
                </li>
              </ul>
            </li>
            <li className="item10">
              <Link to="/" title="click here">
                Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod
                ?
              </Link>
              <ul>
                <li className="subitem1">
                  <p>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores
                    et quas molestias excepturi sint occaecati cupiditate non
                    provident.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </Router>
    );
  }
}

export default Help;
