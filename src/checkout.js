import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Checkout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="services-breadcrumb">
            <div className="agile_inner_breadcrumb">
              <div className="container">
                <ul className="w3_short">
                  <li>
                    <Link to="/home">Home</Link>
                    <i>|</i>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="privacy">
            <div className="container">
              <h3 className="tittle-w3l">
                Checkout
                <span className="heading-style">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </h3>
              <div className="checkout-right">
                <h4>
                  Your shopping cart contains:
                  <span>3 Products</span>
                </h4>
                <div className="table-responsive">
                  <table className="timetable_sub">
                    <thead>
                      <tr>
                        <th>SL No.</th>
                        <th>Product</th>
                        <th>Quality</th>
                        <th>Product Name</th>

                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="rem1">
                        <td className="invert">1</td>
                        <td className="invert-image">
                          <Link to="/single">
                            <img
                              src="images/a7.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Simple Jeans</td>
                        <td className="invert">Rs: 888.00</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close1"> </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="rem2">
                        <td className="invert">2</td>
                        <td className="invert-image">
                          <Link to="/single">
                            <img
                              src="images/s6.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Color Strips Shirt</td>
                        <td className="invert">Rs: 1299.60</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close2"> </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="rem3">
                        <td className="invert">3</td>
                        <td className="invert-image">
                          <Link to="/single">
                            <img
                              src="images/s5.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Casual shirt</td>
                        <td className="invert">Rs: 1099.00</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close3"> </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="checkout-left">
                <div className="address_form_agile">
                  <h4>Add a new Details</h4>
                  <form
                    action="payment.html"
                    method="post"
                    className="creditly-card-form agileinfo_form"
                  >
                    <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                      <div className="information-wrapper">
                        <div className="first-row">
                          <div className="controls">
                            <input
                              className="billing-address-name"
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              required=""
                            />
                          </div>
                          <div className="w3_agileits_card_number_grids">
                            <div className="w3_agileits_card_number_grid_left">
                              <div className="controls">
                                <input
                                  type="text"
                                  placeholder="Mobile Number"
                                  name="number"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="w3_agileits_card_number_grid_right">
                              <div className="controls">
                                <input
                                  type="text"
                                  placeholder="Landmark"
                                  name="landmark"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="clear"> </div>
                          </div>
                          <div className="controls">
                            <input
                              type="text"
                              placeholder="Town/City"
                              name="city"
                              required=""
                            />
                          </div>
                          <div className="controls">
                            <select className="option-w3ls">
                              <option>Select Address type</option>
                              <option>Office</option>
                              <option>Home</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                        </div>
                        <button className="submit check_out">
                          Delivery to this Address
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="checkout-right-basket">
                    <Link to="/payment">
                      Make a Payment
                      <span
                        className="fa fa-hand-o-right"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default Checkout;
