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
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pr-lg-70 mb-50 wow fadeInLeft">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Availability</span>
                  <h2>Explore Addisalem Real Adventure &amp; Travels</h2>
                </div>
                <p className="mb-30">
                  "Adventure awaits! Discover breathtaking destinations, hidden
                  gems, and unforgettable moments with us. Pack your bags, let’s
                  explore the world together!"
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
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
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
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
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
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-caravan" />
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
      <section className="we-section pt-100 pb-50">
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
                        Our mission is to provide outstanding services in car
                        rental, tours, ticketing, and event organizing, tailored
                        to meet the needs of international and local clients. We
                        are dedicated to enhancing travel and event experiences
                        by offering reliable car rentals, curated tours,
                        seamless ticketing, and professional event planning.
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
            <div className="col-xl-6">
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
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{
          backgroundImage: "url(assets/images/bg/erta-ale-volcano-is-a.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
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
      </section>
      {/*====== End CTA Section ======*/}

      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default About;
