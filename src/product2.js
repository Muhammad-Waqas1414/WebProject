import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Product2 extends React.Component {
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
                  <li>ST Pents</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 className="tittle-w3l">
            ST Pents
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
                      <img src="images/a1.jpg" alt="" />
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
                        <Link to="/single">Extra Pocket Green Trouser</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 999.00</span>
                        <del>Rs: 1200.00</del>
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
                              value="Extra Pocket Green Trouser"
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
                <div className="col-xs-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/a2.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Jeans Pent</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 750.00</span>
                        <del>Rs: 850.00</del>
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
                              value="Jeans Pent"
                            />
                            <input type="hidden" name="amount" value="750.00" />
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
                      <img src="images/a3.jpg" alt="" />
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
                        <Link to="/single">Casual Green Trouser</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 974.85</span>
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
                              value="Casual Green Trouser"
                            />
                            <input type="hidden" name="amount" value="974.85" />
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
                      <img src="images/a4.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Casual SkyBlue Trouser</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 974.85</span>
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
                              value="Casual SkyBlue Trouser"
                            />
                            <input type="hidden" name="amount" value="974.85" />
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
                      <img src="images/a5.jpg" alt="" />
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
                        <Link to="/single">Gray Dress Pent</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 980.00</span>
                        <del>Rs: 1200.00</del>
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
                              value="Gray Dress Pent"
                            />
                            <input type="hidden" name="amount" value="980.00" />
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
                      <img src="images/a6.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Trouser Pent</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 850.50</span>
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
                              value="Trouser Pent"
                            />
                            <input type="hidden" name="amount" value="850.50" />
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
                      <img src="images/a8.jpg" alt="" />
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
                        <Link to="/single">Jeans Short</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 330.00</span>
                        <del>Rs: 450.00</del>
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
                              value="Jeans Short"
                            />
                            <input type="hidden" name="amount" value="330.00" />
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
                      <img src="images/a7.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Simple Jeans</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 888.00</span>
                        <del>Rs: 999.00</del>
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
                              value="Simple Jeans"
                            />
                            <input type="hidden" name="amount" value="888.00" />
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
                      <img src="images/a9.jpg" alt="" />
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
                        <Link to="/single">Black Jeans</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 888.00</span>
                        <del>Rs: 999.00</del>
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
                              value="Black Jeans"
                            />
                            <input type="hidden" name="amount" value="888.00" />
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
                      <img src="images/a10.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Printed Dress Pent</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 1100.00</span>
                        <del>Rs: 1400.00</del>
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
                              value="Printed Dress Pent"
                            />
                            <input
                              type="hidden"
                              name="amount"
                              value="1100.00"
                            />
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
                      <img src="images/a11.jpg" alt="" />
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
                        <Link to="/single">Women Pent Simple</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 890.00</span>
                        <del>Rs: 1050.00</del>
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
                              value="Women Pent Simple"
                            />
                            <input type="hidden" name="amount" value="890.00" />
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
                      <img src="images/a12.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="/single" className="link-product-add-cart">
                            Quick View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <Link to="/single">Printed Dress Pent</Link>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 1100.00</span>
                        <del>Rs: 1400.00</del>
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
                              value="Printed Dress Pent"
                            />
                            <input
                              type="hidden"
                              name="amount"
                              value="1100.00"
                            />
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

export default Product2;
