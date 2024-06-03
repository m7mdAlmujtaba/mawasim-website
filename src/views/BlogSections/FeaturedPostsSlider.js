// src/views/IndexSections/FeaturedPostsSlider.js

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { loadPosts } from '../../helpers/loadPosts';

class FeaturedPostsSlider extends Component {
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
      <section className="featured-posts-slider">
        <Container>
          <Row className="justify-content-center g-0">
            <Col md="4" className="left-column">
              {leftPosts.map((post, index) => (
                <div key={index} className="featured-post">
                  <div className="image-wrapper">
                    <img src={post.meta.url} alt={post.meta.alt} className="img-fluid" />
                    <div className="overlay p-4">
                      <h4>{post.meta.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col md="4" className="middle-column px-0">
              {middlePost && (
                <div className="featured-post">
                  <div className="image-wrapper">
                    <img src={middlePost.meta.url} alt={middlePost.meta.alt} className="img-fluid" />
                    <div className="overlay p-4">
                      <h3>{middlePost.meta.title}</h3>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col md="4" className="right-column">
              {rightPosts.map((post, index) => (
                <div key={index} className="featured-post">
                  <div className="image-wrapper">
                    <img src={post.meta.url} alt={post.meta.alt} className="img-fluid" />
                    <div className="overlay p-4">
                      <h4>{post.meta.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default FeaturedPostsSlider;
