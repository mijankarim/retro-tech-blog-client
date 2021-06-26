import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Blog = (props) => {
  console.log(props);
  const { title, content, image, _id: id } = props.post;
  const history = useHistory();
  const handleClick = () => history.push(`blog/${id}`);

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <img src={image} alt={title} onClick={handleClick} />

          <h4 className="my-3" onClick={handleClick}>
            {title}
          </h4>

          <div>{content}</div>
          <Button className="mt-3" onClick={handleClick}>
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
