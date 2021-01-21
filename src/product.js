import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="services-breadcrumb">
            <div className="agile_inner_breadcrumb">
              <div className="container">
                <ul className="w3_short">
                  <li>ST Shirts</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="tittle-w3l">
            ST Shirts
            <span className="heading-style">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </h3>

          <div className="agileinfo-ads-display col-md-9 w3l-rightpro">
            <div className="wrapper">
              <div className="product-sec1">
                <div className="col-xs-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k1.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Full Sleeve Tshirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 420.00</span>
                        <del>Rs: 600.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Full Sleeve Tshirt"
                            />
                            <input type="hidden" name="amount" value="420.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k2.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Gray Sweat Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 800.00</span>
                        <del>Rs: 420.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Gray Sweat Shirt"
                            />
                            <input type="hidden" name="amount" value="800.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k3.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Summer shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 384.00</span>
                        <del>Rs: 480.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Summer shirt"
                            />
                            <input type="hidden" name="amount" value="384.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="product-sec1">
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k4.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Simple Linen Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 700.00</span>
                        <del>Rs: 900.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Simple Linen Shirt"
                            />
                            <input type="hidden" name="amount" value="700.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k5.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Black ft. Brown check Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 999.00</span>
                        <del>Rs: 1250.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Black ft. Brown check Shirt"
                            />
                            <input type="hidden" name="amount" value="999.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k6.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Blue ft. Black Check Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 899.99</span>
                        <del>Rs: 1100.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Blue ft. Black Check Shirt"
                            />
                            <input type="hidden" name="amount" value="899.99" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="product-sec1">
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k7.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Regular Blue Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 550.00</span>
                        <del>Rs: 650.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Regular Blue Shirt"
                            />
                            <input type="hidden" name="amount" value="550.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k8.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Maroon Dress Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 949.75</span>
                        <del>Rs: 1199.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Maroon Dress Shirt"
                            />
                            <input type="hidden" name="amount" value="949.75" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k9.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Printed Black Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 949.00</span>
                        <del>Rs: 1199.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Printed Black Shirt"
                            />
                            <input type="hidden" name="amount" value="949.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="product-sec1">
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k10.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Black Printed T-shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 420.00</span>
                        <del>Rs: 600.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Black Printed T-shirt"
                            />
                            <input type="hidden" name="amount" value="420.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k11.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Simple Dotted Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 900.00</span>
                        <del>Rs: 1100.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Simple Dotted Shirt"
                            />
                            <input type="hidden" name="amount" value="900.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/k12.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Simple Black Shirt</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 849.00</span>
                        <del>Rs: 1000.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Simple Black Shirt"
                            />
                            <input type="hidden" name="amount" value="849.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="PKR"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Product;
