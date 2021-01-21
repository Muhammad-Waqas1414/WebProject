import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Single extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div class="services-breadcrumb">
            <div class="agile_inner_breadcrumb">
              <div class="container">
                <ul class="w3_short">
                  <li>
                    <Link to="/">Home</Link>
                    <i>|</i>
                  </li>
                  <li>Single Page</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="banner-bootom-w3-agileits">
            <div class="container">
              <h3 class="tittle-w3l">
                Single Page
                <span class="heading-style">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </h3>
              <div class="col-md-5 single-right-left ">
                <div class="grid images_3_of_2">
                  <div class="flexslider">
                    <ul class="slides">
                      <li data-thumb="images/si.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/si.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                      <li data-thumb="images/si2.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/si2.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                      <li data-thumb="images/si3.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/si3.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 single-right-left simpleCart_shelfItem">
                <h3>Best Huddies in Town</h3>
                <div class="rating1">
                  <span class="starRating">
                    <input id="rating5" type="radio" name="rating" value="5" />
                    <label for="rating5">5</label>
                    <input id="rating4" type="radio" name="rating" value="4" />
                    <label for="rating4">4</label>
                    <input
                      id="rating3"
                      type="radio"
                      name="rating"
                      value="3"
                      checked=""
                    />
                    <label for="rating3">3</label>
                    <input id="rating2" type="radio" name="rating" value="2" />
                    <label for="rating2">2</label>
                    <input id="rating1" type="radio" name="rating" value="1" />
                    <label for="rating1">1</label>
                  </span>
                </div>
                <p>
                  <span class="item_price">Rs: 3700.00</span>
                  <del>Rs: 4200.00</del>
                  <label>Free delivery</label>
                </p>
                <div class="single-infoagile">
                  <ul>
                    <li>Cash on Delivery Eligible.</li>
                    <li>Shipping Speed to Delivery.</li>
                    <li>
                      Sold and fulfilled by Supple Tek (3.6 out of 5 | 8
                      ratings).
                    </li>
                    <li>
                      1 offer from
                      <span class="item_price">Rs: 4200.00</span>
                    </li>
                  </ul>
                </div>
                <div class="product-single-w3l">
                  <p>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>These
                    are
                    <label>Pure Cotton</label> Stuff.
                  </p>
                  <ul>
                    <li>One of the Best Stuff in Town.</li>
                    <li>
                      Our products are Pill/Bobble free, and are easily washable
                      on hands or via washing machine.
                    </li>
                    <li>
                      Our Huddies are Best, up to date and are Highly
                      Fashionable with vast variety of Attracting colors and
                      different size range.
                    </li>
                    <li>In our Product we use Pure Export quality.</li>
                  </ul>
                  <p>
                    <i class="fa fa-refresh" aria-hidden="true"></i>All Clothe
                    products are
                    <label>non-returnable.</label>
                  </p>
                </div>
                <div class="occasion-cart">
                  <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Best Huddies in Town"
                        />
                        <input type="hidden" name="amount" value="3700.00" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                        />
                        <input type="hidden" name="currency_code" value="PKR" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          class="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          <div class="banner-bootom-w3-agileits">
            <div class="container">
              <div class="col-md-5 single-right-left ">
                <div class="grid images_3_of_2">
                  <div class="flexslider">
                    <ul class="slides">
                      <li data-thumb="images/se1.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/se1.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                      <li data-thumb="images/se2.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/se2.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                      <li data-thumb="images/se3.jpg">
                        <div class="thumb-image">
                          <img
                            src="images/se3.jpg"
                            data-imagezoom="true"
                            class="img-responsive"
                            alt=""
                          />{" "}
                        </div>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 single-right-left simpleCart_shelfItem">
                <h3>Three Piece Suits</h3>
                <div class="rating1">
                  <span class="starRating">
                    <input id="rating5" type="radio" name="rating" value="5" />
                    <label for="rating5">5</label>
                    <input id="rating4" type="radio" name="rating" value="4" />
                    <label for="rating4">4</label>
                    <input
                      id="rating3"
                      type="radio"
                      name="rating"
                      value="3"
                      checked=""
                    />
                    <label for="rating3">3</label>
                    <input id="rating2" type="radio" name="rating" value="2" />
                    <label for="rating2">2</label>
                    <input id="rating1" type="radio" name="rating" value="1" />
                    <label for="rating1">1</label>
                  </span>
                </div>
                <p>
                  <span class="item_price">Rs: 5000.00</span>
                  <del>Rs: 6200.00</del>
                  <label>Free delivery</label>
                </p>
                <div class="single-infoagile">
                  <ul>
                    <li>Cash on Delivery Eligible.</li>
                    <li>Delivery to within 7 - 10 business days.</li>
                    <li>Sold by Delivering (4.2 out of 5 | 95,027 ratings).</li>
                    <li>
                      6 offer from
                      <span class="item_price">Rs: 6200.00</span>
                    </li>
                  </ul>
                </div>
                <div class="product-single-w3l">
                  <p>
                    <i class="fa fa-hand-o-right" aria-hidden="true"></i>Pantry
                    Cashback Offer
                  </p>
                  <ul>
                    <li>
                      Doesn't a simple piece of clothe, But Full of Grace and
                      Comfort
                    </li>
                    <li>We Produce the Best Three Piece Suits in Town.</li>
                    <li>
                      We have many Variet like Two or Three Piece Suits and with
                      different Amazing Stuff.
                    </li>
                    <li>Bloom with Comfort and Sense of Dashingness.</li>
                  </ul>
                  <p>
                    <i class="fa fa-refresh" aria-hidden="true"></i>All Clothe
                    products are
                    <label>non-returnable.</label>
                  </p>
                </div>
                <div class="occasion-cart">
                  <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Three Piece Suits"
                        />
                        <input type="hidden" name="amount" value="5000.00" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                        />
                        <input type="hidden" name="currency_code" value="PKR" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          class="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Single;
