import { Col, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image1 from "../../assets/component-01/Image-01.jpg";
import Image2 from "../../assets/component-01/Image-02.jpg";
import Image3 from "../../assets/component-01/Image-03.jpg";
import "./InfoSection.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const InfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(false);

  const handleModalOpen = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };
  return (
    <div className="info-section">
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src={selectedImage} width={"100%"} />
        </Modal.Body>
      </Modal>
      <Container>
        <Row>
          <Col md={6} lg={8} className="order-2 order-md-1">
            <Row>
              <Col md={12} lg={6} className="mb-4 mb-lg-0 main-image">
                <Image
                  src={Image1}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                  onClick={() => handleModalOpen(Image1)}
                />
              </Col>
              <Col md={12} lg={6}>
                <div className="flex-v-gallery">
                  <div className="w-100">
                    <Image
                      src={Image2}
                      onClick={() => handleModalOpen(Image2)}
                    />
                  </div>
                  <div className="w-100">
                    <Image
                      src={Image3}
                      onClick={() => handleModalOpen(Image3)}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={4} className="order-1 order-md-2 info-text-container">
            <h3>ANSWER YOUR BODY'S NEEDS</h3>
            <hr className="mr-2" />
            <p className="mt-4">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believes our body naturally devolops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body's needs.
            </p>
            <h5 className="mt-5 mb-3">BE MINDFUL</h5>
            <strong>
              Sourcing local or organic food is a good way to start being more
              mindful about what you're cooking and eating.
            </strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
