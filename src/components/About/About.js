import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageLayout from "../PageLayout/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <Container className="my-5">
        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            elementum luctus eros non commodo. Morbi sed lacus risus. Nunc
            turpis leo, efficitur ut tempor at, euismod at sem. Quisque diam
            nulla, tincidunt et vulputate sit amet, posuere sed nulla. Sed id
            lacus eget magna vehicula viverra id in nunc. Duis eleifend tortor
            eros, mollis tincidunt velit pharetra id. Phasellus dapibus turpis
            nec nibh laoreet mollis. Curabitur convallis elementum nisl eget
            fermentum. Morbi ut euismod arcu. Nulla sit amet tortor ultricies,
            malesuada diam sed, dignissim tortor. Integer posuere felis et risus
            tincidunt egestas. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed nisi metus, vestibulum at pharetra a, tincidunt
            quis dolor. Etiam laoreet ex id nisi interdum tempor. In tempor
            condimentum sem vulputate tincidunt. Etiam ultrices, tortor vitae
            venenatis vestibulum, libero ligula cursus neque, in viverra erat
            nisi ut neque. Phasellus gravida nibh vel ullamcorper posuere. Nam
            ut molestie nunc.{" "}
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default About;
