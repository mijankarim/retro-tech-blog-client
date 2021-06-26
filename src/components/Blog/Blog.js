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
            className="cursor-pointer"
          />

          <h3 className="my-3 cursor-pointer" onClick={handleClick}>
            {title}
          </h3>

          <div className="limit-text">{content}</div>
          <Button className="mt-4 mb-3" onClick={handleClick}>
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
