import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import DemoForm from "./inner/demoform";
import { Swiper, SwiperSlide } from "swiper/react";

import TopProject from "./inner/TopProject";

function Home() {
 

  
  return (
    <>
      <div id="home1">
        <section className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div
                className="hero-content-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="hero-content">
                  <div className="title-top-img">
                    <img src="assets/img/inner/cr-1.png" alt="" />
                  </div>
                  <div className="widht-60">
                    <h1 className="title">
                      Full Stack Web Tech Services For NFT & Fintech Companies
                    </h1>
                  </div>
                  <div className="widht-50">
                    <p className="description">
                      We provide Non-Fungible Development Services that can help
                      you create NFTs for artworks, digital collectibles,
                      gaming, sports, music, video, content Subscription, etc.
                    </p>
                  </div>
                  <div className="input-box widht-40 ">
                    <div className="input-area">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your email here"
                      />
                      <div className="icon">
                        <i className="icofont-envelope"></i>
                      </div>
                      <div className="btn">
                        <button className="singup-btn">Sign Up</button>
                      </div>
                    </div>
                  </div>
                  <div className="service">
                    <ul>
                      <li>
                        <i className="icofont-check"></i> Task Management
                      </li>
                      <li>
                        <i className="icofont-check"></i> 24/7 Great Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="hero-img"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src="assets/img/hero/webdevlopment.gif" alt="" />
              </div>
            </div>
          </div>

          <div className="side-img-2">
            <img src="assets/img/inner/cr-3.png" alt="" />
          </div>

          <div className="input-arrow">
            <img src="assets/img/inner/input-arrow.png" alt="" />
          </div>
        </section>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Reliable Platform
                    </a>
                    <img src="assets/img/inner/timer.svg" alt="" />
                  </div>
                  <p>Most Realiable Developers </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Project&apos;s Confidentiality
                    </a>
                    <img src="assets/img/inner/doller.svg" alt="" />
                  </div>
                  <p>All of Your Information Is Secure </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # Communicative
                    </a>
                    <img src="assets/img/inner/notice.svg" alt="" />
                  </div>
                  <p>Clients say the team feels like their employees.</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="" className="service-name">
                      # 24/7 Support
                    </a>
                    <img src="assets/img/inner/vip.svg" alt="" />
                  </div>
                  <p>Our developers are there to support you 24*7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

      <div className="white-bg cpt-6">
       
       
      <div id="demo-sec">
        <DemoForm />
      </div>
        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area cpt-6">
            <div className="section-title">
              <p className="sm-title">best services</p>
              <h2 className="sec-title">We’ve Been Mentioned In....</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/inner/chainup.png" alt="" />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/client.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Served Clients</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/financial.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/crypto.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/nft.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/region.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={250} duration={5} /> +
                        </h3>
                        <p>NFT Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img src="assets/img/icon/wallet.svg" alt="" />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}
        {/* ===================MARKET REPORT section  ================== */}
        <section>
          <div className="market-report-area cpy-6">
            <div className="container">
              <div className="section-wrap">
                <div className="chainup-title">
                  <p>MARKET REPORT</p>
                  <h2>
                    discover the latest market <br /> trends
                  </h2>
                </div>
              </div>
              <div className="market-report-grid">
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Yearly NFT Market Report <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
                <div
                  className="market-card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-main-content">
                    <div className="market-card-img">
                      <img src="assets/img/icon/card.png" alt="" />
                    </div>
                    <div className="market-card-content">
                      <h3>
                        Quarterly NFT Market Report <br /> 2022
                      </h3>
                    </div>
                  </div>
                  <div className="get-btn">
                    <a href="">get the report</a>
                  </div>
                </div>
              </div>
            </div>
            <img src="assets/img/inner/market-1.png" alt="" className="bbl1" />
            <img src="assets/img/inner/market-2.png" alt="" className="bbl2" />
            <img src="assets/img/inner/market-3.png" alt="" className="bbl3" />
            <img src="assets/img/inner/market-4.png" alt="" className="bbl4" />
            <img src="assets/img/inner/market-5.png" alt="" className="bbl5" />
          </div>
        </section>
        {/* ===================MARKET REPORT section end  ================== */}
        {/* ===================Newsletter section  ================== */}
        <div
          className="newsletters"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="newsletter-content">
            <div className="flex-col">
              <p className="urbanist-dark-42">Newsletters</p>
              <p className="raleway-white-18">
                Get Updates About Our Latest Service Trends
              </p>
            </div>

            <div className="subscribe-inputs">
              <input
                type="text"
                placeholder="Your Name"
                className="subscriber-name"
              />

              <div className="input-withbtn">
                <input type="text" placeholder="Enter Email Address" />
                <button className="subscirbe-btn">
                  <img src="assets/imgs/send.svg" alt="Send" /> Subscribe
                </button>
              </div>
            </div>
          </div>

          <img src="assets/imgs/banner-img.png" alt="" className="banner-img" />
        </div>
        {/* ===================Newsletter section end ================== */}

        {/* =====================top project===================== */}
      <TopProject />

        {/* ===============top project end=============== */}
      
        {/* ===================Mentioned section ================== */}
        <section>
          <div className="mentioned-area">
            <div className="section-title">
              <p className="sm-title">best service</p>
              <h2 className="sec-title">We’ve Worked With</h2>
            </div>
            <div className="mentioned-section ">
              <div className="images-slider-1">
                <div className="images-slider-wrapper">
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                  <div className="images-slider-imgs">
                    <img src="assets/img/inner/logo/1.jpg" alt="" />
                    <img src="assets/img/inner/logo/2.jpg" alt="" />
                    <img src="assets/img/inner/logo/3.jpg" alt="" />
                    <img src="assets/img/inner/logo/4.jpg" alt="" />
                    <img src="assets/img/inner/logo/5.jpg" alt="" />
                    <img src="assets/img/inner/logo/6.jpg" alt="" />
                    <img src="assets/img/inner/logo/7.jpg" alt="" />
                    <img src="assets/img/inner/logo/8.jpg" alt="" />
                    <img src="assets/img/inner/logo/9.jpg" alt="" />
                    <img src="assets/img/inner/logo/10.jpg" alt="" />
                    <img src="assets/img/inner/logo/11.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================Mentioned section end ================== */}
        {/* ===================Million Of people ================== */}
        <section>
          <div className="million-area cpy-6">
            <div className="section-title">
              <p className="sm-title">pricing</p>
              <h2 className="sec-title">Million Of people Joining Us Daily</h2>
              <p className="sec-des">
                Pay securely online and manage the booking via <br /> desktop or
                via the mobile app.
              </p>
            </div>
            <div
              className="million-section "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="assets/img/inner/map.png" alt="" />
            </div>
          </div>
        </section>
        {/* ===================Million Of people end ================== */}
        {/* =====================happy clients======================= */}
        <section>
          <div className="happy-area cpy-6">
            <div className="container">
              <div className="section-wrap">
                <div className="chainup-title">
                  <p>Happy clients</p>
                  <h2>What Our Client Say’s</h2>
                </div>
                <p>
                  This is what clients have been saying after using the <br />
                  great service we do for clients.
                </p>
              </div>

              <div
                className="client-review"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-review-slider">
                      <div className="review-img">
                        <img src="assets/img/inner/review.png" alt="" />
                      </div>
                      <div className="review-content">
                        <h2 className="content-title">
                          Save time managing social media for your business
                        </h2>
                        <p>
                          “This is by far the simplest, most frictionless,
                          easiest-to-get-going platform that I’ve ever worked
                          in. Just being able to upload a link and bounce”
                        </p>
                        <div className="rating">
                          <ul className="rating-ul">
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                            <li>
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="client-info">
                          <div className="client-img">
                            <img src="assets/img/inner/client.png" alt="" />
                          </div>
                          <div className="client-name">
                            <h3>Branun Yes </h3>
                            <p>CEO of Arcane</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="slider-nav">
                  <div className="prev">
                    <i className="icofont-arrow-left"></i>
                  </div>
                  <div className="next">
                    <i className="icofont-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpb-6">
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Question & Answer</p>
              <h2 className="sec-title">Frequently Asked Questions (FAQ)</h2>
              <p className="sec-des">
                BROWSE OUR FAQ’S BELOW, IF YOU CAN NOT FIND THE ANSWER TO YOU’RE
                LOOKING FOR PLEASE CONTACT US.
              </p>
            </div>

            <div className="content">
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question1"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question1" className="question">
                    How can I look up a transaction on the platform?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Block Explorers provide a visually appealing and intuitive
                    way to navigate a cryptocurrency &apos; s. Our Block
                    Explorer launched in August 2011. It began as a way for
                    anyone to study bitcoin transactions, along with a variety
                    of helpful charts and statistics about activity on the
                    network.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question5"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question5" className="question">
                    How do I know a transaction has been successfully received
                    or sent?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question2"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question2" className="question">
                    What is the difference between Stellar and lumens?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question3"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question3" className="question">
                    Can I still receive PAX into my Wallet?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
              <div
                className="faq-div"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <input
                  type="checkbox"
                  id="question4"
                  name="q"
                  className="questions"
                />

                <div className="qustion">
                  <label htmlFor="question4" className="question">
                    Why do Stellar addresses have a minimum balance requirement?
                  </label>
                  <div className="plus">+</div>
                </div>
                <div className="answers">
                  <p>
                    Our hardcover books are library bound with exposed
                    reinforced endsheets, which means extra lasting power, use
                    after use. They are side sewn or section sewn, and all
                    covers are laminated with glossy film. The books are
                    vibrant, durable, and unconditionally guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
      </div>
    </>
  );
}

Home.title = "Full Stack Web Development Services";
Home.image = "assets/img/hero/webdevlopment.gif";
Home.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
Home.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";
Home.layout = AppLayout;


export default Home;

