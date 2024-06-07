/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { loadPosts } from '../../helpers/loadPosts';
import { Link } from 'react-router-dom';
class FeaturedPostsSlider extends React.Component {
  state = {
    featuredPosts: []
  };

  async componentDidMount() {
    try {
      const allPosts = await loadPosts();
      const featuredPosts = allPosts.filter(post => post.meta && post.meta.featured === 'true');
      this.setState({ featuredPosts });
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }
  
  render() {
    const { featuredPosts } = this.state;

    if (featuredPosts.length === 0) return null;

    const middlePost = featuredPosts[2] || null;
    const leftPosts = featuredPosts.slice(0, 2);
    const rightPosts = featuredPosts.slice(3, 5);
    return (
      <>
        <div className="position-relative">
          {/* Header for FREE version */}
          <section className="section section-header section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <section className="featured-posts-slider">
                    <Container>
                      <Row className="justify-content-center">
                        <Col lg="4" className="left-column">
                          {leftPosts.map((post, index) => (
                            <Link key={index} to={`/posts/${post.path}`} className="featured-post">
                              <div className="image-wrapper">
                                <img src={post.meta.url || 'https://via.placeholder.com/800x400?text=Default'} alt={post.meta.alt || 'Placeholder'} className="img-fluid" />
                                <div className="overlay p-4">
                                  <h4>{post.meta.title}</h4>
                                  <p>{post.meta.author} - {post.meta.date}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </Col>
                        <Col lg="4" className="middle-column p-0">
                          {middlePost && (
                            <Link to={`/posts/${middlePost.path}`} className="featured-post">
                              <div className="image-wrapper">
                                <img src={middlePost.meta.url || 'https://via.placeholder.com/800x400?text=Default'} alt={middlePost.meta.alt || 'Placeholder'} className="img-fluid" />
                                <div className="overlay p-4">
                                  <h3>{middlePost.meta.title}</h3>
                                  <p>{middlePost.meta.author} - {middlePost.meta.date}</p>
                                </div>
                              </div>
                            </Link>
                          )}
                        </Col>
                        <Col lg="4" className="right-column">
                          {rightPosts.map((post, index) => (
                            <Link key={index} to={`/posts/${post.path}`} className="featured-post">
                              <div className="image-wrapper">
                                <img src={post.meta.url || 'https://via.placeholder.com/800x400?text=Default'} alt={post.meta.alt || 'Placeholder'} className="img-fluid" />
                                <div className="overlay p-4">
                                  <h4>{post.meta.title}</h4>
                                  <p>{post.meta.author} - {post.meta.date}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </Row>
              </div>
            </Container>

          </section>
        </div >
      </>
    );
  }
}

export default FeaturedPostsSlider;
