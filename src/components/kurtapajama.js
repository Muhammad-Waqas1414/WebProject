import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class KurtaPajama extends React.Component {
  render() {
    return (
      <Router>
        <div className="product-sec1">
          <h3 className="heading-tittle">Kurta Pajama</h3>
          <div className="col-md-4 product-men">
            <div className="men-pro-item simpleCart_shelfItem">
              <div className="men-thumb-item">
                <img src="images/mk7.jpg" alt="" />
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
                  <Link to="/single">Navy Blue Kurta with Gray Embroidery</Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 2499.00</span>
                  <del>Rs: 2999.00</del>
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
                        value="Navy Blue Kurta with Gray Embroidery"
                      />
                      <input type="hidden" name="amount" value="2499.00" />
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
                <img src="images/mk8.jpg" alt="" />
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
                  <Link to="/single">
                    Seaweed Plain Kurta with White shalwar
                  </Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 2099.00</span>
                  <del>Rs: 2499.00</del>
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
                        value="Seaweed Plain Kurta with White shalwar"
                      />
                      <input type="hidden" name="amount" value="2099.00" />
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
                <img src="images/mk9.jpg" alt="" />
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
                  <Link to="/single">Cerulean Kurta with White Pajama</Link>
                </h4>
                <div className="info-product-price">
                  <span className="item_price">Rs: 2399.99</span>
                  <del>Rs: 2899.00</del>
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
                        value="Cerulean Kurta with White Pajama"
                      />
                      <input type="hidden" name="amount" value="2399.99" />
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

export default KurtaPajama;
