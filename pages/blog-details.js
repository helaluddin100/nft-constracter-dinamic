import AppLayout from "../component/Layout/Layout";
function BlogDetails() {

    
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:8000/api/blog-details=${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  return (
    <>
      <div id="blog" className="cpy-6">
        <div className="container">
          <section className="blog-content">
            {/* <!---------------------- right side -------------------------------> */}
            <div className="blog-side">
              <div className="blog-img">
                <img src="assets/imgs/img-2.png" alt="Blog" />
              </div>
              <div className="blog-txt-container">
                <div className="small-info">
                  <div>
                    <img src="assets/imgs/user.svg" alt="User" />
                    <p className="urbanist-grey-15">Dale J. Barnes</p>
                  </div>
                  <div>
                    <img src="assets/imgs/calendar-p.svg" alt="User" />
                    <p className="urbanist-grey-15">05 Jan 2022</p>
                  </div>
                  <div>
                    <img src="assets/imgs/user.svg" alt="User" />
                    <p className="urbanist-grey-15">Comments (5)</p>
                  </div>
                </div>

                <div className="blog-txt">
                  <p className="urbanist-dark-22">
                    Ultimate Digital Clean-Up Checklist Are You Prepared For New
                    Year E-Commerce Platforms An Overview Most Common
                  </p>
                  <p className="raleway-grey-14">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>

                  <div className="bordered-txt">
                    <p className="urbanist-black-20">
                      Roll Out New Features Without Hurting Loyal Users Unicode
                      Character Sets The Ultim An Overview UX Design
                      Deliverables
                    </p>
                    <div>
                      <img src="assets/imgs/quet.svg" alt="Queto" />
                      <p className="urbanist-grey-15">Dale J. Barnes</p>
                    </div>
                  </div>

                  <p className="raleway-grey-14">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam
                  </p>
                </div>
              </div>

              <div className="tags-media">
                <div className="pop-tags">
                  <p className="urbanist-black-18">Popular Tags</p>
                  <div className="tags-container">
                    <article className="feature1">
                      <input type="checkbox" id="feature1" />
                      <div>
                        <span>crypto</span>
                      </div>
                    </article>
                    <article className="feature1">
                      <input type="checkbox" id="feature1" />
                      <div>
                        <span>BitCoin</span>
                      </div>
                    </article>
                    <article className="feature1">
                      <input type="checkbox" id="feature1" />
                      <div>
                        <span>ICO Landing</span>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="soc-share">
                  <p className="urbanist-black-18">Popular Tags</p>
                  <div className="soc-tags-container">
                    <a href="#" target="_blank">
                      <div className="soc-tag">
                        <svg
                          width="10"
                          height="16"
                          viewBox="0 0 10 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </a>
                    <a href="#" target="_blank">
                      <div className="soc-tag">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                            fill="#14161B"
                          />
                        </svg>
                      </div>
                    </a>
                    <a href="#" target="_blank">
                      <div className="soc-tag">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z"
                            fill="#14161B"
                          />
                        </svg>
                      </div>
                    </a>
                    <a href="#" target="_blank">
                      <div className="soc-tag">
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 20 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0625 5.15625H6.375V7.21875H9.78125C9.65625 8.09375 8.75 9.8125 6.375 9.8125C4.34375 9.8125 2.65625 8.125 2.65625 6C2.65625 3.90625 4.34375 2.21875 6.375 2.21875C7.5625 2.21875 8.34375 2.71875 8.78125 3.15625L10.4062 1.59375C9.34375 0.59375 8 0 6.375 0C3.0625 0 0.375 2.6875 0.375 6C0.375 9.34375 3.0625 12 6.375 12C9.84375 12 12.1562 9.59375 12.1562 6.15625C12.1562 5.75 12.0938 5.46875 12.0625 5.15625ZM17.8438 5.34375V3.625H16.0938V5.34375H14.3438V7.09375H16.0938V8.84375H17.8438V7.09375H19.5938V5.34375H17.8438Z"
                            fill="#14161B"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog-author">
                <img src="assets/imgs/author.png" alt="Author" />
                <div className="author-txt">
                  <div className="author-name">
                    <p className="urbanist-dark-22">Herbert N. Johnson</p>
                    <p className="raleway-grey-14">Author</p>
                  </div>

                  <p className="raleway-grey-14">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur must explain
                    to you how all this mistaken idea of denouncing
                  </p>

                  <div className="author-social">
                    <a href="#" target="_blank">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                          fill="#808080"
                        />
                      </svg>
                    </a>
                    <a href="#" target="_blank">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                          fill="#808080"
                        />
                      </svg>
                    </a>

                    <a href="#" target="_blank">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z"
                          fill="#808080"
                        />
                      </svg>
                    </a>

                    <a href="#" target="_blank">
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0625 5.15625H6.375V7.21875H9.78125C9.65625 8.09375 8.75 9.8125 6.375 9.8125C4.34375 9.8125 2.65625 8.125 2.65625 6C2.65625 3.90625 4.34375 2.21875 6.375 2.21875C7.5625 2.21875 8.34375 2.71875 8.78125 3.15625L10.4062 1.59375C9.34375 0.59375 8 0 6.375 0C3.0625 0 0.375 2.6875 0.375 6C0.375 9.34375 3.0625 12 6.375 12C9.84375 12 12.1562 9.59375 12.1562 6.15625C12.1562 5.75 12.0938 5.46875 12.0625 5.15625ZM17.8438 5.34375V3.625H16.0938V5.34375H14.3438V7.09375H16.0938V8.84375H17.8438V7.09375H19.5938V5.34375H17.8438Z"
                          fill="#808080"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="related-news">
                <p className="urbanist-dark-22">Related News</p>

                <div className="news-container">
                  <div className="news">
                    <img
                      src="assets/imgs/news-img-2.png"
                      className="recent-post-img"
                      alt=""
                    />

                    <div className="news-txt">
                      <div className="news-date">
                        <img src="assets/imgs/calendar.svg" alt="Calendar" />
                        <p className="raleway-grey-14">05 Jan 2022</p>
                      </div>

                      <p className="urbanist-black-16">
                        Comprensive Guides Server Push Design Feature
                      </p>
                    </div>
                  </div>
                  <div className="news">
                    <img
                      src="assets/imgs/news-img.png"
                      className="recent-post-img"
                      alt=""
                    />

                    <div className="news-txt">
                      <div className="news-date">
                        <img src="assets/imgs/calendar.svg" alt="Calendar" />
                        <p className="raleway-grey-14">05 Jan 2022</p>
                      </div>

                      <p className="urbanist-black-16">
                        Comprensive Guides Server Push Design Feature
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="people-comments">
                <p className="urbanist-dark-22">People Comments</p>

                <div className="comment">
                  <img src="assets/imgs/img-3.png" alt="Author" />

                  <div className="comment-txt">
                    <div>
                      <p className="urbanist-black-18">Matthew A. Larrison</p>
                      <p className="raleway-grey-14">25 January 2022</p>
                    </div>

                    <p className="raleway-grey-14">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae
                    </p>
                    <div className="replay-btn">
                      <p className="raleway-purple-14">Replay</p>
                      <img src="assets/imgs/arrow-purple.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>

                <div className="comment">
                  <img src="assets/imgs/img-3.png" alt="Author" />

                  <div className="comment-txt">
                    <div>
                      <p className="urbanist-black-18">Matthew A. Larrison</p>
                      <p className="raleway-grey-14">25 January 2022</p>
                    </div>

                    <p className="raleway-grey-14">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae
                    </p>
                    <div className="replay-btn">
                      <p className="raleway-grey-14">Replay</p>
                      <img src="assets/imgs/arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>

                <div className="comment">
                  <img src="assets/imgs/img-3.png" alt="Author" />

                  <div className="comment-txt">
                    <div>
                      <p className="urbanist-black-18">Matthew A. Larrison</p>
                      <p className="raleway-grey-14">25 January 2022</p>
                    </div>

                    <p className="raleway-grey-14">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae
                    </p>
                    <div className="replay-btn">
                      <p className="raleway-grey-14">Replay</p>
                      <img src="assets/imgs/arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="leave-replay">
                <div className="replay-title">
                  <p className="urbanist-dark-22">Leave a Reply</p>
                  <p className="raleway-grey-14">
                    We’re Ready to Help Your Buisness
                  </p>
                </div>
                <form action="#">
                  <div className="double-input">
                    <div className="input-box">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Full Name"
                        className="form-control"
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="input-box">
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Write something.."
                      rows={5}
                      className="form-control"
                    ></textarea>
                  </div>

                  <button className="btn-send">
                    <img src="assets/imgs/send.svg" alt="Send" />
                    Send Reply
                  </button>
                </form>
              </div>
            </div>

            {/* <!---------------------- right side -------------------------------> */}
            <div className="blog-right-side">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="searchButton">
                  <img src="assets/imgs/loop.svg" alt="Loop" />
                </button>
              </div>

              <div className="categories">
                <p className="urbanist-dark-22">Category</p>
                <div className="categories-box">
                  <div>
                    <p className="raleway-grey-15">Bitcoin</p>
                    <p className="raleway-grey-15">(5)</p>
                  </div>
                  <div>
                    <p className="raleway-grey-15">Blockchain</p>
                    <p className="raleway-grey-15">(3)</p>
                  </div>
                  <div>
                    <p className="raleway-grey-15">Cryptocurrency</p>
                    <p className="raleway-grey-15">(7)</p>
                  </div>
                  <div>
                    <p className="raleway-grey-15">ICO</p>
                    <p className="raleway-grey-15">(7)</p>
                  </div>
                  <div>
                    <p className="raleway-grey-15">News</p>
                    <p className="raleway-grey-15">(2)</p>
                  </div>
                  <div>
                    <p className="raleway-grey-15">Uncategorized</p>
                    <p className="raleway-grey-15">(9)</p>
                  </div>
                </div>
              </div>

              <div className="related-news">
                <p className="urbanist-dark-22">Recent News</p>

                <div className="news-container">
                  <div className="news">
                    <img
                      src="assets/imgs/news-img-2.png"
                      className="recent-post-img"
                      alt=""
                    />

                    <div className="news-txt">
                      <div className="news-date">
                        <img src="assets/imgs/calendar.svg" alt="Calendar" />
                        <p className="raleway-grey-14">05 Jan 2022</p>
                      </div>

                      <p className="urbanist-black-16">
                        Comprensive Guides Server Push Design Feature
                      </p>
                    </div>
                  </div>
                  <div className="news">
                    <img
                      src="assets/imgs/news-img.png"
                      className="recent-post-img"
                      alt=""
                    />

                    <div className="news-txt">
                      <div className="news-date">
                        <img src="assets/imgs/calendar.svg" alt="Calendar" />
                        <p className="raleway-grey-14">05 Jan 2022</p>
                      </div>

                      <p className="urbanist-black-16">
                        Comprensive Guides Server Push Design Feature
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="left-side-tags">
                <p className="urbanist-dark-22">Popular Tags</p>

                <div className="right-tags">
                  <article className="feature2">
                    <input type="checkbox" />
                    <div>
                      <span>crypto</span>
                    </div>
                  </article>

                  <article className="feature2">
                    <input type="checkbox" />
                    <div>
                      <span>Bitcoin</span>
                    </div>
                  </article>
                  <article className="feature2">
                    <input type="checkbox" />
                    <div>
                      <span>Digital</span>
                    </div>
                  </article>

                  <article className="feature2">
                    <input type="checkbox" />
                    <div>
                      <span>NFTs</span>
                    </div>
                  </article>

                  <article className="feature2">
                    <input type="checkbox" />
                    <div>
                      <span>Landing</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

BlogDetails.title = "Full Stack Web Development Services";
BlogDetails.image = "assets/img/hero/webdevlopment.gif";
BlogDetails.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
BlogDetails.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";

BlogDetails.layout = AppLayout;

export default BlogDetails;
