import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://mighty-anchorage-93647.herokuapp.com/blogs")
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
            <div className="d-flex align-items-center justify-content-center loader my-5 py-5">
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
                  <Col md={6}  key={post._id}>
                    <Blog post={post}/>
                  </Col>
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
