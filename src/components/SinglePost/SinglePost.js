import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";

const SinglePost = () => {
  const id = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5050/blog/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      });
  }, [id]);
  const { title, content, image } = post;
  return (
    <PageLayout>
      <Container className="my-5">
        <Row>
          <Col>
            {isLoading ? (
              <div>
                <Spinner animation="border" variant="danger" />
              </div>
            ) : (
              <div>
                <h2 className="mb-4">{title}</h2>
                <img src={image} alt={title} />
                <div className="my-4">{content}</div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default SinglePost;
