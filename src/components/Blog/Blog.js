import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Blog = (props) => {
  const { title, content, image, _id: id } = props.post;
  const history = useHistory();
  const handleClick = () => history.push(`blog/${id}`);

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <img
            src={image}
            alt={title}
            onClick={handleClick}
            className="cursor-pointer img-fluid"
          />

          <h3 className="my-3 post-title cursor-pointer" onClick={handleClick}>
            {title}
          </h3>

          <div className="limit-text">{content}</div>
          <p className="mt-3 mb-3 d-block more-link cursor-pointer" onClick={handleClick}>
            Continue Reading
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
