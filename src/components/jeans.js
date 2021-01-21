import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Jeans extends React.Component {
  render() {
    return (
      <Router>
        <div className="product-sec1">
          <h3 className="heading-tittle">Jeans</h3>
          <div className="col-md-4 product-men">
            <div className="men-pro-item simpleCart_shelfItem">
              <div className="men-thumb-item">
                <img src="images/mk4.jpg" alt="" />
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
                  <Link to="/single">Rough Jeans</Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 799.99</span>
                  <del>Rs: 1100.99</del>
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
                        value="Rough Jeans"
                      />
                      <input type="hidden" name="amount" value="799.99" />
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
                <img src="images/mk5.jpg" alt="" />
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
                  <Link to="/single">Casual Pent</Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 849.99</span>
                  <del>Rs: 999.99</del>
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
                        value="Casual Pent"
                      />
                      <input type="hidden" name="amount" value="849.99" />
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
                <img src="images/mk6.jpg" alt="" />
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
                  <Link to="/single">Decent Dress Pent</Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 999.99</span>
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
                        value="Decent Dress Pent"
                      />
                      <input type="hidden" name="amount" value="999.99" />
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
      </Router>
    );
  }
}

export default Jeans;
