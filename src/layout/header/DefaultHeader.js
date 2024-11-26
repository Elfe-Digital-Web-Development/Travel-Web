import Link from "next/link";
import Menu from "../Menu";
import Image from "next/image";
const DefaultHeader = () => {
  return (
    <header className="header-area header-three">
      {/*====== Header Top Bar ======*/}
      <div
        className="header-top-bar pt-30 pb-3"
        style={{
          backgroundColor: "#ba160c",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container-fluid">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-xl-3 d-none d-xl-block">
              {/*====== Site Branding ======*/}
              <div className="site-brading">
                <Link legacyBehavior href="/">
                  <a>
                    <Image
                      src="/assets/images/logo/addis_t_logo.png"
                      alt="Logo"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="" style={{ marginTop: "-110px" }}>
              {/*====== Information Wrapper ======*/}

              <div className="information-wrapper">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="icon" style={{ color: "white" }}>
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <h5 style={{ color: "white" }}>
                            Addis Ababa , Ethiopia
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="icon" style={{ color: "white" }}>
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <h5>
                            <a
                              href="mailto:Info@addisalemtourandtravel.com"
                              style={{ color: "white" }}
                            >
                              Info@addisalemtourandtravel.com
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <div className="single-info-item-two">
                      <div
                        className="inner-info"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div className="icon" style={{ color: "white" }}>
                          <i className="far fa-phone-plus" />
                        </div>
                        <div className="">
                          <h5>
                            <a
                              href="tel:+000(123)45688"
                              style={{ color: "white" }}
                            >
                              +25190000000
                            </a>
                          </h5>
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
      {/*====== Header Navigation ======*/}
      <div className="header-navigation">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu gray-bg">
            {/*====== Site Branding ======*/}
            <div className="site-brading d-block d-xl-none">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    width={50}
                    height={50}
                    src="/assets/images/logo/addis_t_logo.png"
                    alt="Logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <Image
                      src="/assets/images/logo/addis_t_logo.png"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none ">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              {/*====== Main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">Book Now</a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="primary-btn main-btn" />
                  </a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
