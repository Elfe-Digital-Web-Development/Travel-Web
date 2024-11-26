import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Explore Our Services"} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100"></section>
      {/*====== End Booking Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100">
        <div className="container-fluid px-4">
          <div className="row  "> 
            {/* justify-content-center */}
          {/* <div className="col-lg-4 col-md-6 mb-4 places-column"> */}
            {/* <div className="col-xl-4 col-md-6 col-sm-12 "> */}
            <div className="row mb-4">
            <div className="col-md-6">
              {/*=== Single Place Item ===*/}
              {/* mb-60 wow fadeInUp */}
              <div className="single-place-item ">
                <div className="place-img">
                  <img
                    src="assets/images/place/coaster-600x338.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    {/* <ul className="ratings">
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
                    </ul> */}
                    <h4 className="title">
                      <Link legacyBehavior href="#">
                        <a>Toyota Coaster Bus</a>
                      </Link>
                    </h4>
                    <p className="description">
                      Our Coaster Bus Rental service is perfect for group tours,
                      
                    </p>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Ethiopia
                    </p>
                    {/* <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price: <span className="currency">ETB</span>0
                    </p> */}
                    {/* <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        00 Days
                      </span>
                      <span>
                        <i className="far fa-user" />0
                      </span>
                      <span> */}
                    {/* <Link legacyBehavior href="/car-details"> 
                          <a>
                            Details
                             <i className="far fa-long-arrow-right" /> 
                            </a>
                        </Link> */}
                    {/* </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6"> */}
          {/* <div className="col-xl-4 col-md-6 col-sm-12 places-column"> */}
            {/*=== Single Place Item ===*/}
            {/*  mb-60 wow fadeInUp */}
             <div className="row mb-4">
      <div className="col-md-6">
            <div className="single-place-item">
              <div className="place-img">
                <img
                  src="assets/images/place/Toyota-land-cruiser-Rental-in-Ethiopia-500x258.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  {/* <ul className="ratings">
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
                  </ul> */}
                  <h4 className="title">
                    <Link legacyBehavior href="#">
                      <a>Toyota Land Cruisers Mark 2</a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Ethiopia
                  </p>
                  {/* <p className="price">
                    <i className="fas fa-usd-circle" />
                    Price: <span className="currency">ETB</span>0
                  </p> */}
                  {/* <div className="meta">
                    <span>
                      <i className="far fa-clock" />
                      00 Days
                    </span>
                    <span>
                      <i className="far fa-user" />0
                    </span> */}
                    {/* <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div> 
          </div>
          {/* <div className="col-lg-4 col-md-6"> */}

          <div className="col-xl-4 col-md-6 col-sm-12 places-column">
            {/*=== Single Place Item ===*/}
            <div className="single-place-item ">
              <div className="place-img">
                <img
                  src="assets/images/place/Big-Bus-Rental-in-Ethiopia.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  {/* <ul className="ratings">
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
                  </ul> */}
                  <h4 className="title">
                    <Link legacyBehavior href="#">
                      <a>Big Buses</a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Ethiopia
                  </p>
                  {/* <p className="price">
                    <i className="fas fa-usd-circle" />
                    Price: <span className="currency">ETB</span>00
                  </p> */}
                  {/* <div className="meta">
                    <span>
                      <i className="far fa-clock" />
                      00 Days
                    </span>
                    <span>
                      <i className="far fa-user" />0
                    </span> */}
                    {/* <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
           
          <div className="col-lg-4 col-md-6">
          {/* <div className="col-xl-4 col-md-6 col-sm-12 places-column"> */}
            {/*=== Single Place Item ===*/}
            <div className="single-place-item ">
              <div className="place-img">
                <img
                  src="assets/images/place/Toyota-L.Cruiser-Cobra-500x281.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  {/* <ul className="ratings">
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
                  </ul> */}
                  <h4 className="title">
                    <Link legacyBehavior href="#">
                      <a>Toyota Land Cruiser Cobra 3</a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Ethiopia
                  </p>
                  {/* <p className="price">
                    <i className="fas fa-usd-circle" />
                    Price: <span className="currency">ETB</span>00
                  </p> */}
                  <div className="meta">
                    {/* <span>
                      <i className="far fa-clock" />
                      00 Days
                    </span>
                    <span>
                      <i className="far fa-user" />0
                    </span> */}
                    {/* <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="col-xl-4 col-md-6 col-sm-12 places-column"> */}
            {/*=== Single Place Item ===*/}
            {/* <div className="single-place-item mb-60 wow fadeInUp">
              <div className="place-img">
                <img
                  src="assets/images/place/Toyota-Prado-Rental-in-Ethiopia.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info"> */}
                  {/* <ul className="ratings">
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
                  </ul> */}
                  {/* <h4 className="title">
                    <Link legacyBehavior href="#">
                      Toyota Prado
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Ethiopia
                  </p> */}
                  {/* <p className="price">
                    <i className="fas fa-usd-circle" />
                    Price: <span className="currency">ETB</span>00
                  </p> */}
                  {/* <div className="meta"> */}
                    {/* <span>
                      <i className="far fa-clock" />
                      00 Days
                    </span>
                    <span>
                      <i className="far fa-user" />0
                    </span> */}
                    {/* <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span> */}
                  {/* </div> 
                 </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
        <div
            className="fun-wrapper pt-60 pb-20 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/map.png)" }}
          >
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
        {/* </div> */}
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
