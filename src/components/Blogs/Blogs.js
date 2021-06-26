import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5050/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {isLoading ? (
            <div>
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <Row>
              {posts.length === 0 ? (
                <div>
                  <h3>No Blog Found</h3>
                </div>
              ) : (
                posts.map((post) => (
                  <div>
                    <Blog post={post} />
                  </div>
                ))
              )}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
