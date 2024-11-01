import Home3Slider from "../src/components/sliders/Home3";
import Layout from "../src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive3ItemDot,
} from "/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index3 = () => {
  return (
    <Layout header={3} footerBG={"gray"}>
      {/*====== Start Hero Section ======*/}
      <Home3Slider />
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5">
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pr-lg-70 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Availability</span>
                  <h2>Explore Addisalem Real Adventure &amp; Travels</h2>
                </div>
                <p className="mb-30">
                  Adventure awaits! Discover breathtaking destinations, hidden
                  gems, and unforgettable moments with us. Pack your bags, let’s
                  explore the world together!
                </p>
                <a href="#" className="main-btn filled-btn">
                  Learn More
                  <i className="far fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="features-item-area mb-20">
                <div className="row pl-lg-70">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h3 className="title">Tour Services</h3>
                        <p>
                          Our tour services cover a wide range of experiences,
                          from historical explorations to cultural immersions.
                          We provide expertly curated tours that showcase
                          Ethiopia's unique landscapes and heritage, ensuring an
                          unforgettable journey for all travelers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h3 className="title">Ticketing Services</h3>
                        <p>
                          Our seamless ticketing solutions make travel planning
                          effortless. We offer ticketing for domestic and
                          international flights, ensuring convenience and timely
                          service for both business and leisure travelers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h3 className="title">Event Organizing</h3>
                        <p>
                          We deliver professional event organizing services,
                          handling everything from corporate functions to social
                          events. With meticulous planning and attention to
                          detail, we create memorable experiences that exceed
                          client expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h3 className="title">Car Rental Services</h3>
                        <p>
                          We provide reliable car rental services tailored for
                          various needs, including office use, meetings,
                          conferences, historical tours, ceremonies, camping,
                          and field trips. Our modern fleet ensures comfort and
                          safety, offering the right vehicle for every occasion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section
        className="about-section bg_cover pt-165 pb-210"
        style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-image-box mb-50">
                <img
                  src="assets/images/about/about-2.jpg"
                  className="rounded-2"
                  alt="About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-white pl-lg-40 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">About Company</span>
                  <h2>We’re Number 1 Travel Adventure Company</h2>
                </div>
                <p className="mb-30">
                  We are committed to delivering high-quality services that
                  reflect our expertise and dedication and Our clients are at
                  the heart of everything we do. We listen to their needs and
                  strive to exceed their expectations. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fun Section ======*/}
      <section className="fun-section">
        <div className="container">
          {/*=== Fun Wrapper ===*/}
          <div
            className="fun-wrapper pt-60 pb-20 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/map.png)" }}
          >
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30">
                  <div className="inner-counter text-center">
                    <div className="icon">
                      <i className="flaticon-journey" />
                    </div>
                    <div className="content text-white">
                      <h2 className="number">
                        <Counter end={356} />+
                      </h2>
                      <p>Happy Traveler</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30">
                  <div className="inner-counter text-center">
                    <div className="icon">
                      <i className="flaticon-tent-1" />
                    </div>
                    <div className="content text-white">
                      <h2 className="number">
                        <Counter end={99} />%
                      </h2>
                      <p>Positive Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30">
                  <div className="inner-counter text-center">
                    <div className="icon">
                      <i className="flaticon-reviews" />
                    </div>
                    <div className="content text-white">
                      <h2 className="number">
                        <Counter end={99} />%
                      </h2>
                      <p>Positive Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30">
                  <div className="inner-counter text-center">
                    <div className="icon">
                      <i className="flaticon-award" />
                    </div>
                    <div className="content text-white">
                      <h2 className="number">
                        <Counter end={24} />
                        K+
                      </h2>
                      <p>Awards Winning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fun Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50">
                <span className="sub-title">Popular Services</span>
                <h2>Travel</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderActive3Item} className="slider-active-3-item">
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Car Rental Services</a>
                </h3>
                <p>
                  We provide reliable car rental services tailored for various
                  needs
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Tour Services</a>
                </h3>
                <p>
                  Our tour services cover a wide range of experiences, from
                  historical explorations to cultural immersions.
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    <a>Ticketing Services</a>
                  </Link>
                </h3>
                <p>
                  Our seamless ticketing solutions make travel planning
                  effortless.
                </p>
                <img
                  src="assets/images/service/service-6.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Service Section ======*/}

      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6 order-2 order-xl-1">
              {/*=== We Image Box ===*/}
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="assets/images/gallery/we-3.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="assets/images/gallery/we-4.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30 pr-lg-30 text-md-end">
                      <img
                        src="assets/images/gallery/we-5.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              {/*=== We Content Box ===*/}
              <div className="we-content-box pl-lg-50 mb-10">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Great Opportunity For Adventure &amp; Travels</h2>
                </div>
                {/*=== Features List ===*/}
                <div className="features-list_one">
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Safety First Always</h4>
                      <p>we prioritize your well-being</p>
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Low Price &amp; Friendly</h4>
                      <p>service, guided by locals who know the way</p>
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Trusted Travel Guide</h4>
                      <p>
                        team for an unforgettable, safe, and budget-friendly
                        journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <section className="gallery-section-two pb-100">
        <div className="container-fluid"> */}
      {/*=== Gallery Slider ===*/}
      {/* <Slider
            {...sliderActive3ItemDot}
            className="slider-active-3-item-dot"
          > */}
      {/*=== Gallery Item ===*/}
      {/* <div className="single-gallery-item-two">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/gallery-7.jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="content">
                <h3 className="title">Tent Camping Inside Forest</h3>
                <a href="#">Adventure &amp; Travel</a>
              </div>
            </div> */}
      {/*=== Gallery Item ===*/}
      {/* <div className="single-gallery-item-two">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/gallery-8.jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="content">
                <h3 className="title">Couple Tent Camping On Hills</h3>
                <a href="#">Adventure &amp; Travel</a>
              </div>
            </div> */}
      {/*=== Gallery Item ===*/}
      {/* <div className="single-gallery-item-two">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/gallery-9.jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="content">
                <h3 className="title">Camping For Every Children</h3>
                <a href="#">Adventure &amp; Travel</a>
              </div>
            </div> */}
      {/*=== Gallery Item ===*/}
      {/* <div className="single-gallery-item-two">
              <div className="img-holder">
                <img
                  src="assets/images/gallery/gallery-8.jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="content">
                <h3 className="title">Couple Tent Camping On Hills</h3>
                <a href="#">Adventure &amp; Travel</a>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Gallery Section ======*/}

      {/*====== Start Blog Section ======*/}

      {/*====== End Blog Section ======*/}
      {/*====== Start Partners Section ======*/}

      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index3;
