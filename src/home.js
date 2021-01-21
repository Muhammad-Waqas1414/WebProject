import "./App.css";
import Sidebar from "./components/sidebar";
import Shirts from "./components/shirts";
import Beststuff from "./components/beststuff";
import Jeans from "./components/jeans";
import KurtaPajama from "./components/kurtapajama";
import SpecialOffers from "./components/specialoffers";
import Carousel from "./components/carousel";

function Home() {
  return (
    <div>
      <Carousel />

      <div className="ads-grid">
        <div className="container">
          <h3 className="tittle-w3l">
            Our Top Products
            <span className="heading-style">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </h3>

          <Sidebar />

          <div className="agileinfo-ads-display col-md-9">
            <div className="wrapper">
              <Shirts />

              <Beststuff />

              <Jeans />

              <KurtaPajama />
            </div>
          </div>
        </div>
      </div>

      <SpecialOffers />

      <div className="footer-top">
        <div className="container-fluid">
          <div className="col-xs-8 agile-leftmk">
            <h2>Get your Cloths delivered from local stores</h2>
            <p>Free Delivery on your first order!</p>
            <form action="#" method="post">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                required=""
              />
              <input type="submit" value="Subscribe" />
            </form>
            <div className="newsform-w3l">
              <span className="fa fa-envelope-o" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-xs-4 w3l-rightmk">
            <img src="images/tab3.png" alt=" " />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

    </div>
  );
}

export default Home;
