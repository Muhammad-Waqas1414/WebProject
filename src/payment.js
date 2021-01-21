import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Payment extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <a href="index.html">Home</a>
                  <i>|</i>
                </li>
                <li>Payment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="privacy">
          <div className="container">
            <h3 className="tittle-w3l">
              Payment
              <span className="heading-style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>
            <div className="checkout-right">
              <div id="parentHorizontalTab">
                <ul className="resp-tabs-list hor_1">
                  <li>Cash on delivery (COD)</li>
                  <li>Credit/Debit</li>
                  <li>Net Banking</li>
                  <li>Paypal Account</li>
                </ul>
                <div className="resp-tabs-container hor_1">
                  <div>
                    <div className="vertical_post check_box_agile">
                      <h5>COD</h5>
                      <div className="checkbox">
                        <div className="check_box_one cashon_delivery">
                          <label className="anim">
                            <input type="checkbox" className="checkbox" />
                            <span>
                              {" "}
                              We also accept Credit/Debit card on delivery.
                              Please Check with the agent.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form
                      action="#"
                      method="post"
                      className="creditly-card-form agileinfo_form"
                    >
                      <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="credit-card-wrapper">
                          <div className="first-row form-group">
                            <div className="controls">
                              <label className="control-label">Name on Card</label>
                              <input
                                className="billing-address-name form-control"
                                type="text"
                                name="name"
                                placeholder="John Smith"
                              />
                            </div>
                            <div className="w3_agileits_card_number_grids">
                              <div className="w3_agileits_card_number_grid_left">
                                <div className="controls">
                                  <label className="control-label">
                                    Card Number
                                  </label>
                                  <input
                                    className="number credit-card-number form-control"
                                    type="text"
                                    name="number"
                                    inputmode="numeric"
                                    autocomplete="cc-number"
                                    autocompletetype="cc-number"
                                    x-autocompletetype="cc-number"
                                    placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;"
                                  />
                                </div>
                              </div>
                              <div className="w3_agileits_card_number_grid_right">
                                <div className="controls">
                                  <label className="control-label">CVV</label>
                                  <input
                                    className="security-code form-control"
                                    Â·
                                    inputmode="numeric"
                                    type="text"
                                    name="security-code"
                                    placeholder="&#149;&#149;&#149;"
                                  />
                                </div>
                              </div>
                              <div className="clear"> </div>
                            </div>
                            <div className="controls">
                              <label className="control-label">
                                Expiration Date
                              </label>
                              <input
                                className="expiration-month-and-year form-control"
                                type="text"
                                name="expiration-month-and-year"
                                placeholder="MM / YY"
                              />
                            </div>
                          </div>
                          <button className="submit">
                            <span>Make a payment </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    <div className="vertical_post">
                      <form action="#" method="post">
                        <h5>Select From Popular Banks</h5>
                        <div className="swit-radio">
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" checked="" />
                                <i></i>Habib Bank
                              </label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Allied Bank
                              </label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Standard Charter Bank
                              </label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Faisal Bank
                              </label>
                            </div>
                          </div>
                          <div className="check_box_one">
                            <div className="radio_one">
                              <label>
                                <input type="radio" name="radio" />
                                <i></i>Meezan Bank
                              </label>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <h5>Or Select Other Bank</h5>
                        <div className="section_room_pay">
                          <select className="year">
                            <option value="">=== Other Banks ===</option>
                            <option value="ALB-NA">
                              Allahabad Bank NetBanking
                            </option>
                            <option value="ADB-NA">Andhra Bank</option>
                            <option value="BBK-NA">
                              Bank of Bahrain and Kuwait NetBanking
                            </option>
                            <option value="BBC-NA">
                              Bank of Baroda Corporate NetBanking
                            </option>
                            <option value="BBR-NA">
                              Bank of Baroda Retail NetBanking
                            </option>
                            <option value="BOI-NA">
                              Bank of India NetBanking
                            </option>
                          </select>
                        </div>
                        <input type="submit" value="PAY NOW" />
                      </form>
                    </div>
                  </div>
                  <div>
                    <div id="tab4" className="tab-grid" style={{display: "block"}}>
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            className="pp-img"
                            src="images/paypal.png"
                            alt="Alternative text"
                            title="Image Title"
                          />
                          <p>
                            Important: You will be redirected to PayPal's
                            website to securely complete your payment.
                          </p>
                          <Link to="/checkout" className="btn btn-primary">Checkout via Paypal</Link>
                        </div>
                        <div className="col-md-6 number-paymk">
                          <form className="cc-form">
                            <div className="clearfix">
                              <div className="form-group form-group-cc-number">
                                <label>Card Number</label>
                                <input
                                  className="form-control"
                                  placeholder="xxxx xxxx xxxx xxxx"
                                  type="text"
                                />
                                <span className="cc-card-icon"></span>
                              </div>
                              <div className="form-group form-group-cc-cvc">
                                <label>CVV</label>
                                <input
                                  className="form-control"
                                  placeholder="xxxx"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="form-group form-group-cc-name">
                                <label>Card Holder Name</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group form-group-cc-date">
                                <label>Valid Thru</label>
                                <input
                                  className="form-control"
                                  placeholder="mm/yy"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="checkbox checkbox-small">
                              <label>
                                <input
                                  className="i-check"
                                  type="checkbox"
                                  checked=""
                                />
                                Add to My Cards
                              </label>
                            </div>
                            <input
                              type="submit"
                              className="submit"
                              value="Proceed Payment"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Payment;
