// src/views/IndexSections/FeaturedPostsSlider.js

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { loadPosts } from '../../helpers/loadPosts';
import { Link } from 'react-router-dom';

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
    );
  }
}

export default FeaturedPostsSlider;
