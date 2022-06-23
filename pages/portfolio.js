import AppLayout from "../component/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

function Portfolio() {
  return (
    <>
      <div className="portfolio-banner">
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
                      <h1 className="title hero-title">
                        Building Digital Products, brands experience
                      </h1>
                    </div>
                    <div className="widht-50">
                      <p className="description">
                        We provide Non-Fungible Development Services that can
                        help you create NFTs for artworks, digital collectibles,
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
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="assets/img/hero/portfolio.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="tak-logo" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="hero-bottom">
              <div className="row-4">
                <div className="logo-item">
                  <img src="assets/img/logo/google.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/slack.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/monday.png" alt="" />
                </div>
                <div className="logo-item">
                  <img src="assets/img/logo/microsoft.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-bg">
        <div className="portfolio-area">
          <div className="container">
            <div className="section-title cpy-5">
              <p className="sm-title">best services</p>
              <h2 className="sec-title">My Portfolio</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>
            <div className="portfolio-item">
              <div className="grid-2">
                <div className="prof-item cg-direction cpy-5">
                  <div
                    className="prof-des"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">WICKED SHARK CLUB</h3>
                    <p className="prof-text">
                      Sharks star in blockbuster movies as blood-seeking
                      villains, but in reality, they’re far more fascinating and
                      complicated than they’re often depicted in pop culture.
                      And here we have 10,000 of them, join our community so we
                      can explore them more.
                    </p>
                    <a href="https://wickedsharkclub.com" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                  <div
                    className="prof-img prof-right-img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(1).jpg"
                      alt=""
                    />
                    <div className="prof-right"></div>
                  </div>
                </div>

                <div className="prof-item cpy-5">
                  <div
                    className="prof-img prof-left-img"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(26).jpg"
                      alt=""
                    />
                    <div className="prof-left"></div>
                  </div>
                  <div
                    className="prof-des"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">
                      ALTlanteans Official Club (AOC)
                    </h3>
                    <p className="prof-text">
                      ALTlanteans Official Club is a utility avatar that
                      connects its owners to an international pool of
                      eco-centric individuals and organisations.
                    </p>
                    <a href="https://altlanteansoc.com" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="prof-item cg-direction cpy-5">
                  <div
                    className="prof-des"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">APES STRONG TOGETHER!!!!</h3>
                    <p className="prof-text">
                      MTV SPACE APES IS A REVOLUTIONARY COLLECTION OF 10,000
                      MUTATED SPACE APE NFTS. SPACE APES WILL BE DEPLOYED AND
                      FUNCTION ON THE MULTIVAC BLOCKCHAIN. THESE SPACE-FAIRING
                      NFTS WILL INITIALLY BE AVAILABLE FOR MINT VIA OUR WEBSITE
                      AND TRADE ON MTV.ART. WITH 170 HAND DRAWN TRAITS, EACH
                      UNIQUE NFT IS YOUR MEMBERSHIP TO OUR INTERGALLATIC MTV
                      SPACE APES COMMUNITY. FOLLOW US ON ALL OF OUR SOCIAL PAGES
                      TO KEEP UP TO DATE ON THE MTV SPACE APE COMMUNITY MTV
                      SPACE APE
                    </p>
                    <a href="https://mtvspaceapes.com" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                  <div
                    className="prof-img prof-right-img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(46).jpg"
                      alt=""
                    />
                    <div className="prof-right"></div>
                  </div>
                </div>

                <div className="prof-item cpy-5">
                  <div
                    className="prof-img prof-left-img"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(31).jpg"
                      alt=""
                    />
                    <div className="prof-left"></div>
                  </div>
                  <div
                    className="prof-des"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">
                      1,000 Unique Battle Cattle Ready To Wage War”
                    </h3>
                    <p className="prof-text">
                      THE SOLO SOCIETY IS AN EXCLUSIVE META-ADVENTURE FOR CRYPTO
                      TRAVEL ENTHUSIASTS. FOUNDED BY NATE SOLO, THE FIRST
                      CRYPTO-ANTHROPOLOGIST, THE SOLO SOCIETY IS DEDICATED TO
                      MAINTAINING ROOTS IN THE PHYSICAL WORLD WHILE EXPLORING
                      THE WEB3 FRONTIER. FROM NATE SOLO'S TRAVELS ACROSS THE
                      GLOBE, THE SS METALODGE HOLDS NFT ARTIFACTS AND GAMING
                      EXPERIENCES. HEADQUARTERED IN THE SANDBOX, THE SOLO
                      SOCIETY IMMERSES MEMBERS AND VISITORS WITH EXCLUSIVE
                      ACCESS TO THE PRIVATE LODGE WHILE VISITORS CAN EXPLORE THE
                      VILLAGE MARKET AND PUBLIC AREAS OF THE LAND.
                    </p>
                    <a href="https://solosociety.io/" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="prof-item cg-direction cpy-5">
                  <div
                    className="prof-des"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">Meta Maid</h3>
                    <p className="prof-text">
                      The Meta Maid Genesis is a collection of 777 NFTs ready to
                      descend from the celestial planes and find a new
                      generation of masters. Each Maid carries their own status
                      ranging from the standard type to a commander type. This
                      is the first story and the key to opening the world of
                      Arterra. A brand-new art collective of prominent artists
                      diving into web3 with their own unique perspective.
                    </p>
                    <a href="https://themetamaid.com/" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                  <div
                    className="prof-img prof-right-img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(47).jpg"
                      alt=""
                    />
                    <div className="prof-right"></div>
                  </div>
                </div>

                <div className="prof-item cpy-5">
                  <div
                    className="prof-img prof-left-img"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(35).jpg"
                      alt=""
                    />
                    <div className="prof-left"></div>
                  </div>
                  <div
                    className="prof-des"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">Fluffy Brother</h3>
                    <p className="prof-text">
                      FluffyBrother is a collection of digital artworks (NFTs)
                      that are built on the Ethereum blockchain network. This
                      website allows participants to exchange digital
                      collectibles. Users are entirely responsible for the
                      safety and management of their digital wallets and are
                      responsible for all transactions and contracts on this
                      website.
                    </p>
                    <a href="https://fluffybrother.com" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="prof-item cg-direction cpy-5">
                  <div
                    className="prof-des"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">META WOMAN</h3>
                    <p className="prof-text">
                      A wild and wonderful collection of Meta Women living on
                      the Ethereum blockchain. 100% community driven. From the
                      Universe to the Metaverse.
                    </p>
                    <a
                      href="https://metawoman.netlify.app/"
                      className="view-shot"
                    >
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                  <div
                    className="prof-img prof-right-img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(30).jpg"
                      alt=""
                    />
                    <div className="prof-right"></div>
                  </div>
                </div>

                <div className="prof-item cpy-5">
                  <div
                    className="prof-img prof-left-img"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(40).jpg"
                      alt=""
                    />
                    <div className="prof-left"></div>
                  </div>
                  <div
                    className="prof-des"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">WELCOME TO ROCK$TAR APES</h3>
                    <p className="prof-text">
                      Each Rockstar Ape is unique and programmatically generated
                      from over 170 possible traits, including tattoos, head
                      styles, clothing, and more. All apes are based off actual
                      living and deceased rock stars, with the some of the
                      collection reserved for talent collabs.
                    </p>
                    <a href="https://rockstarapes.com" className="view-shot">
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="prof-item cg-direction cpy-5">
                  <div
                    className="prof-des"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <h3 className="prof-title">META WOMAN</h3>
                    <p className="prof-text">
                      A wild and wonderful collection of Meta Women living on
                      the Ethereum blockchain. 100% community driven. From the
                      Universe to the Metaverse.
                    </p>
                    <a
                      href="https://metawoman.netlify.app/"
                      className="view-shot"
                    >
                      Visit Live Site
                      <img src="assets/img/long-arrow-right.svg" alt="" />
                    </a>
                  </div>
                  <div
                    className="prof-img prof-right-img"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      src="assets/img/portfolio/nft_constructer_nft_collectibles(30).jpg"
                      alt=""
                    />
                    <div className="prof-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================happy clients======================= */}
        <section>
          <div className="happy-area cpy-6">
            <div className="container">
              <div
                className="section-wrap"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
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
      </div>
    </>
  );
}

Portfolio.title = "Full Stack Web Development Services";
Portfolio.image = "assets/img/hero/webdevlopment.gif";
Portfolio.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
Portfolio.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";

Portfolio.layout = AppLayout;

export default Portfolio;
