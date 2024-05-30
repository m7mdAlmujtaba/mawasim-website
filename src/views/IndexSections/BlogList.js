// src/views/IndexSections/BlogList.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import { loadPosts } from 'helpers/loadPosts';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await loadPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section section-lg pt-lg-0">
      <Container>
        <Row className="justify-content-center">
          {posts.map((post, index) => (
            <Col lg="4" md="6" sm="12" key={index} className="mb-4">
              <Card className="blog-card">
                <CardImg top width="100%" height="200px" src={`https://via.placeholder.com/300x200?text=${post.meta.title}`} alt={post.meta.title} className="blog-card-img" />
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
