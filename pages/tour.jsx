import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Explore Tour Place"} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100"></section>
      {/*====== End Booking Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-1.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Abijatta-Shalla National Park</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Oromia Region
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-2.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Lalibela Rock-Hewn Churches</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Amhara
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-3.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Lucy's Fossil</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/single-place-4.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Afdera Salt</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Afar
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-5.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Ertale Volcano</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Afar
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-6.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        St.Silase Cathedral Church
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Gowilds Pagination ===*/}
              <ul className="gowilds-pagination wow fadeInUp text-center">
                <li>
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">04</a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
