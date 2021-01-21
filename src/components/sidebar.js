import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="side-bar col-md-3" style={{'background-color': '#ccc'}}>
                <div className="search-hotel">
                    <h3 className="agileits-sear-head">Search Here..</h3>
                    <form action="#" method="post">
                    <input type="search" placeholder="Product name..." name="search" required=""/>
                    <input type="submit" value=" "/>
                    </form>
                </div>
                
                <div className="range">
                    <h3 className="agileits-sear-head">Price range</h3>
                    <ul className="dropdown-menu6">
                    <li>
                        <div id="slider-range"></div>
                        <input type="text" id="amount" style={{border: '0', color: '#ffffff', 'font-weight': 'normal' }} />
                    </li>
                    </ul>
                </div>
                
                <div className="left-side">
                    <h3 className="agileits-sear-head">Stuff Preference</h3>
                    <ul style={{'text-align':'left', 'padding-left':'90px'}}>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Cotton</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Wool</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Leather</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">Silk</span>
                    </li>
                    </ul>
                </div>
                
                <div className="left-side">
                    <h3 className="agileits-sear-head">Discount</h3>
                    <ul>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">5% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">10% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">20% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">30% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">50% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked"/>
                        <span className="span">60% or More</span>
                    </li>
                    </ul>
                </div>
                
                <div className="customer-rev left-side">
                    <h3 className="agileits-sear-head">Customer Review</h3>
                    <ul>
                    <li>
                        <a href=".">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span>5.0</span>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span>4.0</span>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span>3.5</span>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span>3.0</span>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <span>2.5</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="deal-leftmk left-side">
                    <h3 className="agileits-sear-head">Special Deals</h3>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d2.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Full Sleeves printed T-shirt</h3>
                        <a href="single.html">Rs: 650.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d1.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Black Track Jacket</h3>
                        <a href="single.html">Rs: 999.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d4.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Dual color Kurta with White pajama</h3>
                        <a href="single.html">Rs: 2399.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d5.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Shorts</h3>
                        <a href="single.html">Rs: 499.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d3.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Track Suits</h3>
                        <a href="single.html">Rs: 1399.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d6.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Printed Trousers</h3>
                        <a href="single.html">Rs: 999.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="special-sec1">
                    <div className="col-xs-4 img-deals">
                        <img src="images/d7.jpg" alt=""/>
                    </div>
                    <div className="col-xs-8 img-deal1">
                        <h3>Extra Pocket Trousers</h3>
                        <a href="single.html">Rs: 899.00</a>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                </div>
                
            </div>
        
        );
    }
}

export default Sidebar;