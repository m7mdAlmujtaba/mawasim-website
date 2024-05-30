import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SinglePost = ({ match }) => {
  const [postContent, setPostContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const post = await import(`posts-md/${match.params.id}.md`);
      const response = await fetch(post.default);
      const text = await response.text();

      // Extracting metadata
      const meta = {};
      const content = text.replace(/---([\s\S]*?)---/, (_, m) => {
        m.split('\n').forEach(line => {
          const [key, value] = line.split(': ').map(str => str.trim());
          meta[key] = value;
        });
        return '';
      });

      setMetadata(meta);
      setPostContent(content);
    };

    fetchPost();
  }, [match.params.id]);

  return (
    <section className="section section-lg pt-lg-0 my-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="post-header">
              <h1 className=" text-uppercase">{metadata.title}</h1>
              <div className="author-date">
                <small className="text-muted">{`By ${metadata.author} on ${metadata.date}`}</small>
              </div>
            </div>
            <div className="post-content mt-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{postContent}</ReactMarkdown>
            </div>
            <Button className="mt-4" color="primary" href="/posts">
              Back to Posts
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SinglePost;
