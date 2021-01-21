import React from 'react';

class Shirts extends React.Component {
    render() {
        return (
            <div className="product-sec1">
                <h3 className="heading-tittle">Shirts</h3>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/m1.jpg" alt=""/>
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <a href="single.html">Gray color with Red Strips</a>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 800.00</span>
                        <del>Rs: 999.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input type="hidden" name="item_name" value="Gray color with Red Strips" />
                            <input type="hidden" name="amount" value="800.00" />
                            <input type="hidden" name="discount_amount" value="1.00" />
                            <input type="hidden" name="currency_code" value="PKR" />
                            <input type="hidden" name="return" value=" " />
                            <input type="hidden" name="cancel_return" value=" " />
                            <input type="submit" name="submit" value="Add to cart" className="button" />
                          </fieldset>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/m2.jpg" alt=""/>
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>

                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <a href="single.html">Casual Check Shirt</a>
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
                            <input type="hidden" name="item_name" value="Casual Check Shirt" />
                            <input type="hidden" name="amount" value="999.00" />
                            <input type="hidden" name="discount_amount" value="1.00" />
                            <input type="hidden" name="currency_code" value="PKR" />
                            <input type="hidden" name="return" value=" " />
                            <input type="hidden" name="cancel_return" value=" " />
                            <input type="submit" name="submit" value="Add to cart" className="button" />
                          </fieldset>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                      <img src="images/m3.jpg" alt=""/>
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                      <span className="product-new-top">New</span>

                    </div>
                    <div className="item-info-product ">
                      <h4>
                        <a href="single.html">Decent Dress Shirt</a>
                      </h4>
                      <div className="info-product-price">
                        <span className="item_price">Rs: 1199.99</span>
                        <del>Rs: 1449.99</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input type="hidden" name="item_name" value="Decent Dress Shirt" />
                            <input type="hidden" name="amount" value="1199.99" />
                            <input type="hidden" name="discount_amount" value="1.00" />
                            <input type="hidden" name="currency_code" value="PKR" />
                            <input type="hidden" name="return" value=" " />
                            <input type="hidden" name="cancel_return" value=" " />
                            <input type="submit" name="submit" value="Add to cart" className="button" />
                          </fieldset>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              
        );
    }
}

export default Shirts;