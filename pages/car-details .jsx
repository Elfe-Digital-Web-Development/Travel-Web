import GallerySection from "@/src/components/GallerySection";
import RelatedTours from "@/src/components/sliders/RelatedTours";
import Layout from "@/src/layout/Layout";
import { placeSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const TourDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      {/*====== Start Place Details Section ======*/}
      <section className="place-details-section">
        {/*=== Place Slider ===*/}
        <div className="place-slider-area overflow-hidden wow fadeInUp">
          <Slider {...placeSlider} className="place-slider">
            <div className="place-slider-item">
              <div className="place-img">
                <img
                  src="assets/images/place/single-place-4.jpg"
                  alt="Place Image"
                />
              </div>
            </div>
            <div className="place-item">
              <div className="place-img">
                <img
                  src="assets/images/place/single-place-2.jpg"
                  alt="Place Image"
                />
              </div>
            </div>
            <div className="place-slider-item">
              <div className="place-img">
                <img
                  src="assets/images/place/single-place-3.jpg"
                  alt="Place Image"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="container">
          {/*=== Tour Details Wrapper ===*/}
          <div className="tour-details-wrapper pt-80">
            {/*=== Tour Title Wrapper ===*/}
            <div className="tour-title-wrapper pb-30 wow fadeInUp">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour-title mb-20">
                    <h3 className="title">Lalibela Rock-Hewn Churches</h3>
                    <p>
                      <i className="far fa-map-marker-alt" />
                      Ethiopia, Amhara
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tour-widget-info">
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-box-usd" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>From</span>ETB 0
                        </h4>
                      </div>
                    </div>
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Durations</span>0 Days
                        </h4>
                      </div>
                    </div>
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-planet-ringed" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Tour Type</span>Country Tour
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Tour Area Nav ===*/}

            <div className="row">
              <div className="col-xl-8">
                {/*=== Place Content Wrap ===*/}
                <div className="place-content-wrap pt-45 wow fadeInUp">
                  <h3 className="title">Explore Tours</h3>
                  <p>
                    Sed ut perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudantium totam rem aperiam, eaque
                    ip quae abillo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor si amet consectetur adipisci velit
                    sed quian numquam eius modi tempora incidunt ut labore
                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam qunostrum exercitationem ullam corporis suscipit
                    laboriosaey nisi ut aliquid ex ea commodi consequatur? Quis
                    autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur veillum qui dolorem
                    voluptas nulla pariatur
                  </p>
                  <h4>Advance Facilities</h4>
                  <p>
                    Neque porro quisquam est dolorem ipsum quia dolor si amet
                    consectetur adipisci velit sed quian numquam eius tempora
                    incidunt labore dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <ul className="check-list">
                        <li>
                          <i className="fas fa-badge-check" />
                          Parking in the Camp
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Pick and Drop Services
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Washing Machines
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Cruise Dinner &amp; Music Event
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Visit 5 Best Places With Group
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Motorhome service
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />1 Meal Per Day
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-7">
                      <img
                        src="assets/images/place/single-place-4.jpg"
                        className="mb-20 w-100"
                        alt="place image"
                      />
                    </div>
                  </div>
                  <h4>Tour Plan</h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur vel eillum qui
                    dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
                {/*=== Days Area ===*/}
                <Tab.Container defaultActiveKey={"day1"}>
                  <div className="days-area mb-55 wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-35">
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day1"
                        >
                          Day 1st
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day2"
                        >
                          Day 2nd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day3"
                        >
                          Day 3rd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day4"
                        >
                          Day 4th
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day5"
                        >
                          Day 5th
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="day1">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Parking in the Camp
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              kayaking Sport
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Mountain Hiking
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day2">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Parking in the Camp
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              kayaking Sport
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Mountain Hiking
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day3">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Parking in the Camp
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              kayaking Sport
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Mountain Hiking
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day4">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Parking in the Camp
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              kayaking Sport
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Mountain Hiking
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day5">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Parking in the Camp
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              kayaking Sport
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Mountain Hiking
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
                {/*=== Map Box ===*/}
                <div className="map-box mb-60 wow fadeInUp">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608.754767870934!2d39.04144633952827!3d12.030527054419178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16413eee814f2d03%3A0xf27414e782ae4b62!2sLalibela!5e0!3m2!1sen!2set!4v1730277418890!5m2!1sen!2set"></iframe>
                </div>
                {/*=== Calendar Box ===*/}
                <div className="calendar-wrapper wow fadeInUp">
                  <div className="calendar-container mb-45" />
                </div>
                {/*=== Releted Tour Place ===*/}
                <RelatedTours />
                {/*=== Reviews Area ===*/}

                {/*=== Comments Area ===*/}

                {/*===  Comments Form  ===*/}
                <div className="comments-respond mb-30 wow fadeInUp">
                  <h3 className="comments-heading" style={{ marginBottom: 15 }}>
                    Leave a Comments
                  </h3>
                  <ul className="comment-rating-ul mb-20">
                    <li>
                      <span className="title">Quality</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Location</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Services</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Team</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Price</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Enter Name"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            rows={4}
                            placeholder="Write Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn primary-btn">
                            Send comments
                            <i className="fas fa-angle-double-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4">
                {/*=== Sidebar Widget Area ===*/}
                <div className="sidebar-widget-area pt-60 pl-lg-30">
                  {/*=== Booking Widget ===*/}
                  <div className="sidebar-widget booking-form-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Booking Tour</h4>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="sidebar-booking-form"
                    >
                      <div className="booking-date-time mb-20">
                        <div className="booking-item">
                          <label>Date</label>
                          <div className="bk-item booking-time">
                            <input
                              type="date"
                              placeholder="Select Date"
                              className="datepicker booing_datepicker"
                            />
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>Time</label>
                          <div className="bk-item booking-date">
                            <i className="far fa-calendar-alt" />
                            <select className="wide">
                              <option value={1}>12.00 Am</option>
                              <option value={1}>01.00 Am</option>
                              <option value={1}>02.00 Am</option>
                              <option value={1}>03.00 Am</option>
                              <option value={1}>04.00 Am</option>
                              <option value={1}>05.00 Am</option>
                              <option value={1}>06.00 Am</option>
                              <option value={1}>07.00 Am</option>
                              <option value={1}>08.00 Am</option>
                              <option value={1}>09.00 Am</option>
                              <option value={1}>10.00 Am</option>
                              <option value={1}>11.00 Am</option>
                              <option value={1}>12.00 Pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="booking-guest-box mb-20">
                        <h6 className="mb-20">Tickets</h6>
                        <div className="booking-item">
                          <label>Adult (18+ years) ETB43</label>
                          <div className="bk-item booking-user">
                            <i className="far fa-user" />
                            <select className="wide">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>Youth (13-17 years) ETB29</label>
                          <div className="bk-item booking-user">
                            <i className="far fa-user" />
                            <select className="wide">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>Child (0-12 years) ETB0</label>
                          <div className="bk-item booking-user">
                            <i className="far fa-user" />
                            <select className="wide">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="booking-extra mb-15 wow fadeInUp">
                        <h6 className="mb-10">Aditional Services</h6>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Boooking{" "}
                          <span>
                            <span className="currency">ETB</span>50
                          </span>
                        </div>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Person{" "}
                          <span>
                            <span className="currency">ETB</span>20
                          </span>
                        </div>
                      </div>
                      <div className="booking-total mb-20">
                        <div className="total">
                          <label>Total</label>
                          <span className="price">
                            <span className="currency">ETB</span>70
                          </span>
                        </div>
                      </div>
                      <div className="submit-button">
                        <button className="main-btn primary-btn">
                          Booking Now
                          <i className="far fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*=== Booking Info Widget ===*/}
                  <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Tour Information</h4>
                    <ul className="info-list">
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Max Guests<span>35</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Minimum Age<span>12+</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Tour Location<span>Thailand</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe" />
                          Language<span>English</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*=== Recent Place Widget ===*/}
                  {/* <div className="sidebar-widget recent-place-widget mb-40 wow fadeInUp">
                    <h4 className="widget-title">Last Minute Deals</h4>
                    <ul className="recent-place-list">
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-1.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
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
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">ETB</span>45.23
                          </span>
                        </div>
                      </li>
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-2.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
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
                              <i className="fas fa-star-half-alt" />
                            </li>
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">ETB</span>45.23
                          </span>
                        </div>
                      </li>
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-3.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
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
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">ETB</span>45.23
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                  {/*=== Banner Widget ===*/}
                  {/* <div className="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40">
                    <div className="banner-widget-content">
                      <div className="banner-img">
                        <img
                          src="assets/images/blog/banner-1.jpg"
                          alt="Post Banner"
                        />
                        <div className="hover-overlay">
                          <div className="hover-content">
                            <h4 className="title">
                              <a href="#">Swimming Pool</a>
                            </h4>
                            <p>
                              <i className="fas fa-map-marker-alt" />
                              Marrakesh, Morocco
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default TourDetails;
