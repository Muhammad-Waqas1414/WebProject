import "./App.css";
import React from "react";
import Home from "./home";
import AboutUs from "./aboutus";
import Product from "./product";
import Product2 from "./product2";
import FAQ from "./faqs";
import Contact from "./contact";
import Checkout from "./checkout";
import Help from "./help";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Payment from "./payment";
import Privacy from "./privacy";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header-most-top">
            <p>Garmets Offer Zone Top Deals & Discounts</p>
          </div>

          <div className="header-bot">
            <div className="header-bot_inner_wthreeinfo_header_mid">
              <div className="col-md-4 logo_agile">
                <h1>
                  <Link to="/">
                    <img src="images/logo1.jpg" alt="" /> Garmets
                    <img src="images/logo2.png" alt="" />
                  </Link>
                </h1>
              </div>

              <div className="col-md-8 header">
                <ul>
                  <li>
                    <a
                      className="play-icon popup-with-zoom-anim"
                      href="#small-dialog1"
                    >
                      <span
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></span>{" "}
                      Shop Locator
                    </a>
                  </li>
                  <li>
                    <a href="." data-toggle="modal" data-target="#myModal1">
                      <span className="fa fa-truck" aria-hidden="true"></span>
                      Track Order
                    </a>
                  </li>
                  <li>
                    <span className="fa fa-phone" aria-hidden="true"></span> +92
                    xxx xxxx
                  </li>
                  <li>
                    <a href="." data-toggle="modal" data-target="#myModal1">
                      <span
                        className="fa fa-unlock-alt"
                        aria-hidden="true"
                      ></span>{" "}
                      Sign In{" "}
                    </a>
                  </li>
                  <li>
                    <a href="." data-toggle="modal" data-target="#myModal2">
                      <span
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></span>{" "}
                      Sign Up{" "}
                    </a>
                  </li>
                </ul>

                <div className="agileits_search">
                  <form action="#" method="post">
                    <input
                      name="Search"
                      type="search"
                      placeholder="How can we help you today?"
                      required=""
                    />
                    <button
                      type="submit"
                      className="btn btn-default"
                      aria-label="Left Align"
                    >
                      <span className="fa fa-search" aria-hidden="true">
                        {" "}
                      </span>
                    </button>
                  </form>
                </div>

                <div className="top_nav_right">
                  <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                    <form action="#" method="post" className="last">
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="display" value="1" />
                      <button
                        className="w3view-cart"
                        type="submit"
                        name="submit"
                        value=""
                      >
                        <i
                          className="fa fa-cart-arrow-down"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div id="small-dialog1" className="mfp-hide">
            <div className="select-city">
              <h3>Please Select Your Location</h3>
              <select className="list_of_cities">
                <optgroup label="Popular Cities">
                  <option selected style={{ display: "none", color: "#eee" }}>
                    Select City
                  </option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Faisalabad</option>
                  <option>Gujranwala</option>
                  <option>Rawalpindi</option>
                  <option>Peshawar</option>
                  <option>Multan</option>
                  <option>Islamabad</option>
                  <option>Hyderabad</option>
                  <option>Quetta</option>
                  <option>Sargodha</option>
                  <option>Bahawalpur</option>
                  <option>Sialkot</option>
                  <option>Gujrat</option>
                  <option>Kasur</option>
                  <option>Vehari</option>
                </optgroup>
                <optgroup label="Azad Jammu & Kashmir">
                  <option>Mirpur</option>
                  <option>Kotli</option>
                  <option>Bhimber</option>
                  <option>Muzaffarabad</option>
                  <option>Haveliu</option>
                  <option>Neelam Valley</option>
                  <option>Poonch</option>
                </optgroup>
                <optgroup label="Punjab">
                  <option>Lahore</option>
                  <option>Kasur</option>
                  <option>Faisalabad</option>
                  <option>Multan</option>
                  <option>Sialkot</option>
                  <option>Sargodha</option>
                  <option>Gujranwala</option>
                  <option>Sheikhupura</option>
                  <option>Taxila</option>
                  <option>Jhehlum</option>
                </optgroup>
                <optgroup label="Sindh">
                  <option>Karachi</option>
                  <option>Hyderabad</option>
                  <option>Sukkur</option>
                  <option>Larkana</option>
                  <option>Nawabshah</option>
                  <option>Jacodabad</option>
                  <option>Khairpur</option>
                  <option>Mirpur Khas</option>
                </optgroup>
                <optgroup label="Balochistan">
                  <option>Quetta</option>
                  <option>Turbat</option>
                  <option>Chaman</option>
                  <option>Sui Town</option>
                  <option>Sibi</option>
                </optgroup>
                <optgroup label="khyber pakhtunkhwa">
                  <option>Abbottabad</option>
                  <option>Ayubia</option>
                  <option>Bannu</option>
                  <option>Kohat</option>
                  <option>Nowshera</option>
                  <option>Peshawar</option>
                  <option>Swat</option>
                </optgroup>
              </select>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="modal fade" id="myModal1" tabindex="-1" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body modal-body-sub_agile">
                  <div className="main-mailposi">
                    <span
                      className="fa fa-envelope-o"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <div className="modal_body_left modal_body_left1">
                    <h3 className="agileinfo_sign">Sign In </h3>
                    <p>
                      Sign In now, Let's start your Garmets Shopping. Don't have
                      an account?
                      <a href="." data-toggle="modal" data-target="#myModal2">
                        Sign Up Now
                      </a>
                    </p>
                    <form action="#" method="post">
                      <div className="styled-input agile-styled-input-top">
                        <input
                          type="text"
                          placeholder="User Name"
                          name="Name"
                          required=""
                        />
                      </div>
                      <div className="styled-input">
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          required=""
                        />
                      </div>
                      <input type="submit" value="Sign In" />
                    </form>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal2" tabindex="-1" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body modal-body-sub_agile">
                  <div className="main-mailposi">
                    <span
                      className="fa fa-envelope-o"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <div className="modal_body_left modal_body_left1">
                    <h3 className="agileinfo_sign">Sign Up</h3>
                    <p>Come join the ST Garmets! Let's set up your Account.</p>
                    <form action="#" method="post">
                      <div className="styled-input agile-styled-input-top">
                        <input
                          type="text"
                          placeholder="Name"
                          name="Name"
                          required=""
                        />
                      </div>
                      <div className="styled-input">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="Email"
                          required=""
                        />
                      </div>
                      <div className="styled-input">
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          id="password1"
                          required=""
                        />
                      </div>
                      <div className="styled-input">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          name="Confirm Password"
                          id="password2"
                          required=""
                        />
                      </div>
                      <input type="submit" value="Sign Up" />
                    </form>
                    <p>
                      <a href=".">
                        By clicking register, I agree to your terms & conditions
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ban-top">
            <div className="container">
              <div className="agileits-navi_search">
                <form action="#" method="post">
                  <select
                    id="agileinfo-nav_search"
                    name="agileinfo_search"
                    required=""
                  >
                    <option value="">All Categories</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Pents">Pents</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Huddies">Huddies</option>
                    <option value="Kurta Pajama">Kurta Pajama</option>
                    <option value="Shorts">Shorts</option>
                    <option value="TrackSuit">TrackSuit</option>
                    <option value="T-Shirts">T-Shirts</option>
                  </select>
                </form>
              </div>
              <div className="top_nav_left">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>

                    <div
                      className="collapse navbar-collapse menu--shylock"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul className="nav navbar-nav menu__list">
                        <li className="active">
                          <Link className="nav-stylehead" to="/">
                            Home
                            <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                        <li className="">
                          <Link to="/aboutus" className="nav-stylehead">
                            About Us
                          </Link>
                        </li>
                        <li className="dropdown">
                          <a
                            href="."
                            className="dropdown-toggle nav-stylehead"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Shirts
                            <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu multi-column columns-3">
                            <div className="agile_inner_drop_nav_info">
                              <div className="col-sm-4 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                  <li>
                                    <Link to="/product">Men</Link>
                                  </li>
                                  <li>
                                    <Link to="/product">Women</Link>
                                  </li>
                                  <li>
                                    <Link to="/product">Kids</Link>
                                  </li>
                                  <li>
                                    <Link to="/product">T-Shirts</Link>
                                  </li>
                                  <li>
                                    <Link to="/product">Casual Shirts</Link>
                                  </li>
                                  <li>
                                    <Link to="/product">Dress Shirts</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-4 multi-gd-img">
                                <img src="images/nav.jpg" alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="."
                            className="dropdown-toggle nav-stylehead"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pents
                            <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu multi-column columns-3">
                            <div className="agile_inner_drop_nav_info">
                              <div className="col-sm-6 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                  <li>
                                    <Link to="/product2">Men</Link>
                                  </li>
                                  <li>
                                    <Link to="/product2">Women</Link>
                                  </li>
                                  <li>
                                    <Link to="/product2">Kids</Link>
                                  </li>
                                  <li>
                                    <Link to="/product2">Dress Pents</Link>
                                  </li>
                                  <li>
                                    <Link to="/product2">Jeans</Link>
                                  </li>
                                  <li>
                                    <Link to="/product2">Trousers</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-4 multi-gd-img">
                                <img src="images/nav1.jpg" alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </ul>
                        </li>
                        <li className="">
                          <Link to="/faqs">FAQs</Link>
                        </li>
                        <li className="dropdown">
                          <a
                            className="nav-stylehead dropdown-toggle"
                            href="."
                            data-toggle="dropdown"
                          >
                            Pages
                            <b className="caret"></b>
                          </a>
                          <ul className="dropdown-menu agile_short_dropdown">
                            <li>
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li>
                              <Link to="/payment">Payment</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="">
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/product2">
              <Product2 />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/faqs">
              <FAQ />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
          </Switch>

          <div>
            <footer style={{ "background-color": "#fff" }}>
              <div className="container">
                <p className="footer-main">
                  <span>"ST Garmets"</span> is a form of electronic commerce
                  which allows consumers to directly buy goods or services from
                  a seller over the Internet using a web browser or a mobile
                  app. Consumers find a product of interest by visiting the
                  website of the retailer directly or by searching among
                  alternative vendors using a shopping search engine.
                </p>
                <div className="w3l-grids-footer">
                  <div className="col-xs-4 offer-footer">
                    <div className="col-xs-4 icon-fot">
                      <span
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></span>
                    </div>
                    <div className="col-xs-8 text-form-footer">
                      <h3>Track Your Order</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="col-xs-4 offer-footer">
                    <div className="col-xs-4 icon-fot">
                      <span className="fa fa-refresh" aria-hidden="true"></span>
                    </div>
                    <div className="col-xs-8 text-form-footer">
                      <h3>Free & Easy Returns</h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="col-xs-4 offer-footer">
                    <div className="col-xs-4 icon-fot">
                      <span className="fa fa-times" aria-hidden="true"></span>
                    </div>
                    <div className="col-xs-8 text-form-footer">
                      <h3>Online cancellation </h3>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>

                <div className="footer-info w3-agileits-info">
                  <div className="col-sm-5 address-right">
                    <div className="col-xs-6 footer-grids">
                      <h3>Categories</h3>
                      <ul>
                        <li>
                          <Link to="/product">Shirts</Link>
                        </li>
                        <li>
                          <Link to="/product">T-Shirts</Link>
                        </li>
                        <li>
                          <Link to="/product">Pents</Link>
                        </li>
                        <li>
                          <Link to="/product2">Jeans</Link>
                        </li>
                        <li>
                          <Link to="/product">Kurta Pajama</Link>
                        </li>
                        <li>
                          <Link to="/product2">Huddies</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-6 footer-grids agile-secomk">
                      <ul>
                        <li>
                          <Link to="/product">Jackets</Link>
                        </li>
                        <li>
                          <Link to="/product">Shorts</Link>
                        </li>
                        <li>
                          <Link to="/product">Track Suits</Link>
                        </li>
                        <li>
                          <Link to="/product">Uppers</Link>
                        </li>
                        <li>
                          <Link to="/product2">Trousers</Link>
                        </li>
                        <li>
                          <Link to="/product">Vest</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix"></div>
                  </div>

                  <div className="col-sm-5 address-right">
                    <div className="col-xs-6 footer-grids">
                      <h3>Quick Links</h3>
                      <ul>
                        <li>
                          <Link to="/aboutus">About US</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/help">Help</Link>
                        </li>
                        <li>
                          <Link to="/faqs">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms of Use</Link>
                        </li>
                        <li>
                          <Link to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/payment">Payment</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-6 footer-grids">
                      <h3>Get in Touch</h3>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker"></i> Lahore Cantt,
                          Lahore.
                        </li>
                        <li>
                          <i className="fa fa-mobile"></i> +92 xxx xxxxxxx{" "}
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> +423 xx xxxx{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="ST-Garmets@example.com">
                            ST-Garmets@example.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-2 footer-grids  w3l-socialmk">
                    <h3>Follow Us on</h3>
                    <div className="social">
                      <ul>
                        <li>
                          <a className="icon fb" href=".">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="icon tw" href=".">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="icon gp" href=".">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="icon gp" href=".">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="agileits_app-devices">
                      <h5>Download the App</h5>
                      <a href=".">
                        <img src="images/1.png" alt="" />
                      </a>
                      <a href=".">
                        <img src="images/2.png" alt="" />
                      </a>
                      <div className="clearfix"> </div>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                </div>

                <div className="agile-sometext">
                  <div className="sub-some">
                    <h5>Online Cloths Shopping</h5>
                    <p>
                      Men from far and near visit online marketplaces to buy and
                      sell goods. The most striking feature in online market is
                      that it is free of large crowd and noise. A person can
                      visit the online shopping site during his free time and
                      place orders to buy an item.
                    </p>
                  </div>
                  <div className="sub-some">
                    <h5>Shop online with the best deals & offers</h5>
                    <p>
                      Now Get Upto 40% Off On Everyday Essential Products Shown
                      On The Offer Page. The range includes penys, shirts,
                      shorts, jackets and seasonal products. Discount May Vary
                      From Product to Product and In this way, we are assured
                      the best deal and discount sales.
                    </p>
                  </div>

                  <div className="sub-some">
                    <h5>Popular Products</h5>
                    <ul>
                      <li>
                        <Link to="/product">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/product">Pents</Link>
                      </li>
                      <li>
                        <Link to="/product">Trousers</Link>
                      </li>
                      <li>
                        <Link to="/product">Huddies</Link>
                      </li>
                      <li>
                        <Link to="/product">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/product">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/product">Kurta Pajama</Link>
                      </li>
                      <li>
                        <Link to="/product">Track Suits</Link>
                      </li>
                      <li>
                        <Link to="/product2">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/product2">T-Shirts</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="sub-some child-momu">
                    <h5>Payment Method</h5>
                    <ul>
                      <li>
                        <img src="images/pay2.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay5.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay1.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay4.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay6.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay3.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay7.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay8.png" alt="" />
                      </li>
                      <li>
                        <img src="images/pay9.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>

            <div className="copy-right">
              <div className="container">
                <p>
                  © 2020 ST Garmets. All rights reserved | Design by
                  <a href="http://ST-Garmets.com"> ST Garmets</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
