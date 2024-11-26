import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Discover the beauty of Ethiopia"} />
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
                <div className="place-img"style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/place-1.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="place-content p-3">
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title mb-1" style={{ fontSize: "16px" }}>
                      <Link legacyBehavior href="/abijatta-details">
                        <a>Abijatta-Shalla National Park</a>
                      </Link>
                    </h4>
                    <p className="location mb-2" style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Oromia Region
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>0
                    </p> */}
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/abijatta-details">
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
            <div className="col-xl-4 col-md-6 col-sm-12 places-column" >
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img" style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/place-2.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="place-content p-3">
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title  mb-1" style={{ fontSize: "16px" }}>  
                      <Link legacyBehavior href="/lalibela-details">
                        <a>Lalibela Rock-Hewn Churches</a>
                      </Link>
                    </h4>
                    <p className="location mb-2"  style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Amhara
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>0
                    </p> */}
                    <div className="meta" >
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/lalibela-details">
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
            <div className="col-xl-4 col-md-6 col-sm-12 places-column" >
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img" style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/place-3.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="place-content p-3" >
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title mb-1"style={{ fontSize: "16px" }}>
                      <Link legacyBehavior href="/lucy-details">
                        <a>Lucy's Fossil</a>
                      </Link>
                    </h4>
                    <p className="location mb-2"style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Addis Ababa, Ethiopia
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>00
                    </p> */}
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/lucy-details">
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
            <div className="col-xl-4 col-md-6 col-sm-12 places-column" >
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img" style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/Afdera-Salt-Lake-Ethiopia.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="place-content p-3">
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title mb-1" style={{ fontSize: "16px" }}>
                      <Link legacyBehavior href="/afdera-details">
                        <a>Afdera Salt</a>
                      </Link>
                    </h4>
                    <p className="location mb-2" style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Afar
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>00
                    </p> */}
                    <div className="meta" style={{ fontSize: "10px" }}>
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/afdera-details">
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
              <div className="single-place-item mb-60 wow fadeInUp ">
                <div className="place-img" style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/place-5.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="place-content p-3">
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title mb-1" style={{ fontSize: "16px" }}>
                      <Link legacyBehavior href="/ertale-details">
                        <a>Ertale Volcano</a>
                      </Link>
                    </h4>
                    <p className="location mb-2" style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Afar
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>00
                    </p> */}
                    <div className="meta" style={{ fontSize: "10px" }}>
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/ertale-details">
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
                <div className="place-img" style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src="assets/images/place/place-6.jpg"
                    alt="Place Image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  
                  />
                </div>
                <div className="place-content p-3">
                  <div className="info">
                    <ul className="ratings mb-2">
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
                    <h4 className="title mb-1"style={{ fontSize: "16px" }}>
                      <Link legacyBehavior href="/silase-details">
                        St.Silase Cathedral Church
                      </Link>
                    </h4>
                    <p className="location mb-2" style={{ fontSize: "14px" }}>
                      <i className="far fa-map-marker-alt" />
                      Addis Ababa, Ethiopia
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>00
                    </p> */}
                    <div className="meta"style={{ fontSize: "10px" }}>
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/silase-details">
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
