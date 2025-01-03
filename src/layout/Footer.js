const Footer = ({ bg, extraClass }) => {
  return (
    <footer
      className={`main-footer ${bg ? bg : "black"}-bg ${
        extraClass ? extraClass : ""
      }`}
    >
      <div className="container">
        {/*=== Footer CTA ===*/}
        <div className="footer-cta pt-80 pb-40">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pr-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/support.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Need Any Support For Tour &amp; Travels ?
                  </h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pl-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/travel.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Ready to Get Started With Vacations!
                  </h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Widget ===*/}
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">About</h4>
                <div className="footer-content">
                  <p>
                    To take trivial example which us ever undertakes laborious
                    physica exercise except obsome
                  </p>
                  <a href="#" className="footer-logo">
                    <img
                      src={
                        bg === "gray"
                          ? "assets/images/logo/addis_t_logo.png"
                          : "assets/images/logo/addis_t_logo.png"
                      }
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div
                className="footer-widget  mb-40"
                style={{ marginLeft: "150px" }}
              >
                <h4 className="widget-title">Services</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="car">Car Rental Services</a>
                    </li>
                    <li>
                      <a href="tour">Tour Services</a>
                    </li>
                    <li>
                      <a href="#">Ticketing Services</a>
                    </li>
                    <li>
                      <a href="#">Event Organizing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100">
                <h4 className="widget-title">Newsletter</h4>
                <div className="footer-content">
                  <p>
                    Which of us ever undertake laborious physical exercise
                    except obtain
                  </p>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-">
              {/*=== Footer Text ===*/}
              <div
                className="footer-text"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  Copy@ 2024{" "}
                  <span style={{ color: "#F7921E" }}>Elfe Digital</span>, All
                  Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">{/*=== Footer Nav ===*/}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
