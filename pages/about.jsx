import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { partnerSliderOne, testimonialSliderOne } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"About Us"} />
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5">
              {/* === Features Content Box === */}
              <div className="features-content-box pr-lg-70 mb-50 wow fadeInLeft">
                {/* === Section Title === */}
                <div className="section-title mb-30">
                  <span className="sub-title">About</span>
                  <h2>Addisalem Tour and Travel PLC</h2>
                </div>
                <p className="mb-30">
                  Is a premier travel and transportation service provider
                  established in 2006 E.C. as a private limited company. Our
                  goal is to set a new standard in the industry by delivering
                  exceptional car rental, tour, ticketing, and event-organizing
                  services with professionalism, commitment, and
                  flexibility.What sets us apart is the extensive experience of
                  our founder and General Manager, who brings over six years of
                  expertise from one of Ethiopia's leading travel companies.
                  This invaluable background enables us to understand our
                  customers' needs deeply and effectively identify key success
                  factors in our operations. Our “no worries” approach ensures
                  that clients receive dependable services, allowing them to
                  enjoy their travel experiences without stress. At Addisalem
                  Tour and Travel, we are dedicated to continuous improvement
                  and adaptability, utilizing the skills of our well-trained
                  management team to meet the evolving needs of our clients. We
                  pride ourselves on being a reliable partner in travel and
                  events, ready to exceed expectations at every turn.
                </p>
                <a href="#" className="main-btn filled-btn">
                  Learn More
                  <i className="far fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="features-item-area mb-20 pl-lg-70">
                <div className="row">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h3 className="title">Tour Services</h3>
                        {/* <p>
                          Our tour services cover a wide range of experiences,
                          from historical explorations to cultural immersions.
                          We provide expertly curated tours that showcase
                          Ethiopia's unique landscapes and heritage, ensuring an
                          unforgettable journey for all travelers.
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h3 className="title">Ticketing Services</h3>
                        {/* <p>
                          Our seamless ticketing solutions make travel planning
                          effortless. We offer ticketing for domestic and
                          international flights, ensuring convenience and timely
                          service for both business and leisure travelers.
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h3 className="title">Car Rental Services</h3>
                        {/* <p>
                          We provide reliable car rental services tailored for
                          various needs, including office use, meetings,
                          conferences, historical tours, ceremonies, camping,
                          and field trips. Our modern fleet ensures comfort and
                          safety, offering the right vehicle for every occasion.
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h3 className="title">Event Organizing</h3>
                        {/* <p>
                          We deliver professional event organizing services,
                          handling everything from corporate functions to social
                          events. With meticulous planning and attention to
                          detail, we create memorable experiences that exceed
                          client expectations.
                        </p> */}
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
      {/*====== Start We Section ======*/}

      {/*====== End We Section ======*/}

      {/*====== Start What We Section ======*/}
      {/* <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Great Opportunity For Adventure &amp; Travels</h2>
                </div>
                <div className="features-list_one">
                  <div
                    style={{ gap: 10 }}
                    className="single-features-list mb-40"
                  >
                    <div className="features-container">
                      <div className="features-list_one">
                        <div className="icon-inner d-flex ">
                          <div className="icon-check">
                            <i className="fas fa-badge-check" />
                          </div>
                        </div>
                        <div className="content">
                          <h4>VISION</h4>
                          <p>
                            At Addisalem Tour and Travel PLC, our vision is to
                            become the leading travel and transportation service
                            provider in Ethiopia by 2030, recognized for our
                            unwavering commitment to quality, integrity, and
                            customer satisfaction.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ gap: 10 }}
                        className="single-features-list mb-40"
                      >
                        <div className="icon-inner d-flex ">
                          <div className="icon-check">
                            <i className="fas fa-badge-check" />
                          </div>
                        </div>
                        <div className="content">
                          <h4>MISSION</h4>
                          <p>
                            Our mission is to provide outstanding services in
                            car rental, tours, ticketing, and event organizing,
                            tailored to meet the needs of international and
                            local clients. We are dedicated to enhancing travel
                            and event experiences by offering reliable car
                            rentals, curated tours, seamless ticketing, and
                            professional event planning.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ gap: 10 }}
                        className="single-features-list mb-40"
                      >
                        <div className="icon-inner d-flex ">
                          <div className="icon-check">
                            <i className="fas fa-badge-check" />
                          </div>
                        </div>
                        <div className="content">
                          <h4>VALUES</h4>
                          <p>
                            At Addisalem Tour and Travel PLC, we uphold the
                            following core values: <b>Professionalism</b>{" "}
                            <b>Customer Commitment</b>: <b>Flexibility</b>:
                            Integrity:
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section> */}
      <section className="mission-vision-section pt-70 pb-30">
        <div className="container">
          <div className="section-title text-center mb-30">
            <span className="sub-title">Who We Are</span>
            <h2>Great Opportunity For Adventure & Travels</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 mb-4">
              <div
                className="mission-box text-center p-3 wow fadeInLeft"
                style={{
                  background: "linear-gradient(45deg, #8B0000, #FF0000)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: "15px",
                  // height: "100%",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div className="icon-box mb-2">
                  <i className="fas fa-bullseye fa-2x text-white"></i>
                </div>
                <h3 className="text-white mb-2">VISION</h3>
                <p className="text-white small">
                  At Addisalem Tour and Travel PLC, our vision is to become the
                  leading travel and transportation service provider in Ethiopia
                  by 2030, recognized for our unwavering commitment to quality,
                  integrity, and customer satisfaction. We aim to set industry
                  benchmarks by delivering exceptional services in car rental,
                  tours, ticketing, and event organizing. Through continuous
                  innovation and a customer-centric approach, we aspire to
                  create memorable experiences that enrich the lives of our
                  clients and foster a strong sense of community.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-4">
              <div
                className="mission-box text-center p-3 wow fadeInUp"
                style={{
                  background: "linear-gradient(45deg, #8B0000, #FF0000)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: "15px",
                  // height: "100%",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div className="icon-box mb-2">
                  <i className="fas fa-rocket fa-2x text-white"></i>
                </div>
                <h3 className="text-white mb-2">MISSION</h3>
                <p className="text-white small">
                  Our mission is to provide outstanding services in car rental,
                  tours, ticketing, and event organizing, tailored to meet the
                  needs of international and local clients. We are dedicated to
                  enhancing travel and event experiences by offering reliable
                  car rentals, curated tours, seamless ticketing, and
                  professional event planning. By consistently exceeding
                  industry standards, we aim to build a reputation for quality,
                  flexibility, and a customer-centric approach.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 mb-4">
              <div
                className="mission-box text-center p-3 wow fadeInRight"
                style={{
                  background: "linear-gradient(45deg, #8B0000, #FF0000)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  borderRadius: "15px",
                  // height: "100%",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div className="icon-box mb-2">
                  <i className="fas fa-star fa-2x text-white"></i>
                </div>
                <h3 className="text-white mb-2">VALUES</h3>
                <p className="text-white small">
                  At Addisalem Tour and Travel PLC, we uphold the following core
                  values Professionalism: We are committed to delivering
                  high-quality services that reflect our expertise and
                  dedication. Customer Commitment: Our clients are at the heart
                  of everything we do. We listen to their needs and strive to
                  exceed their expectations. Flexibility: We adapt our services
                  to meet the unique requirements of each client, ensuring a
                  personalized experience. Integrity: We conduct our business
                  with honesty and transparency, building trust with our
                  clients, partners, and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        src="assets/images/gallery/we-3.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        src="assets/images/gallery/we-4.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        src="assets/images/gallery/we-5.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      {/*====== End What We Section ======*/}
      {/*====== Start CTA Section ======*/}
      {/* <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{
          backgroundImage: "url(assets/images/bg/erta-ale-volcano-is-a.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8"> */}
      {/*=== CTA Content Box ===*/}
      {/* <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End CTA Section ======*/}

      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default About;
