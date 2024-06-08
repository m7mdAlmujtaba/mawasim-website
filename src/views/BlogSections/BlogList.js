// src/views/BlogSections/BlogList.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { loadPosts } from 'helpers/loadPosts';

const BlogList = ({ numberOfPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  const postsToShow = posts.slice(0, numberOfPosts);

  return (
    <section className="section section-lg p-lg-0">
      <Container>
        <Row className="justify-content-center">
          {postsToShow.map((post, index) => (
            <Col lg="4" md="6" sm="12" key={index} className="mb-3">
              <Card className="blog-card">
                {post.meta.url && (
                  <img
                    src={post.meta.url}
                    alt={post.meta.alt || 'Post Image'}
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                  />
                )}
                <CardBody>
                  <CardTitle tag="h5" className="text-primary text-uppercase">{post.meta.title}</CardTitle>
                  <div className="author-date">
                    <small className="text-muted">{`By ${post.meta.author} on ${post.meta.date}`}</small>
                  </div>
                  <CardText>{post.content.substring(0, 100)}...</CardText>
                  <Button outline color="mawasim" href={`/posts/${post.path}`}>
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogList;
