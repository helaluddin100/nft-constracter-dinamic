import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Link from 'next/link';
function Blog() {

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/blog")
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
        <section>
          <div className="container">
            <div className="section-title">
              <p className="sm-title">My Blog</p>
              <h2 className="sec-title">Latest News</h2>
              <p className="sec-des">
                Get more software development information about exchange
                software wallet software derivate products and ETC
              </p>
            </div>

            <div className="blog-container">
            {posts.map((post, index) => (
              <div className="blog-post" key={index}>
                <div className="blog-img">
                  <img src={post.main_image} alt="Blog" />
                </div>
                <div className="about-blog">
                <Link href={"/inner/" + post.id}>
                    <a className="urbanist-black-18">
                        {post.title}
                      </a>
                </Link>
                  <p className="raleway-grey-16">{post.created_at}</p>
                  <p className="sm-des"dangerouslySetInnerHTML={{__html:post.description.substring(0, 50)}}>
                   
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}




Blog.title = "Full Stack Web Development Services";
Blog.image = "assets/img/hero/webdevlopment.gif";
Blog.keywords =
  "nft, full stack, web development, website, website design , website development,development, nft constracter, minting website";
Blog.description =
  "We provide Non-Fungible Development Services that can help you create NFTs for artworks, digital collectibles, gaming, sports, music, video, content Subscription, etc";

Blog.layout = AppLayout;

export default Blog;
