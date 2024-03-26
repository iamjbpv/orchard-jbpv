import { Col, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./MiniArticleSection.scss";
import Image1 from "../../assets/component-02/Image-01.jpg";
import Image2 from "../../assets/component-02/Image-02.jpg";
import Image3 from "../../assets/component-02/Image-03.jpg";

export const MiniArticleSection = () => {
  return (
    <div className="mini-article-section">
      <Container>
        <h1 className="text-center pb-5">ALL THE LATEST FROM AEG</h1>
        <Row className="pt-2">
          <Col md={6} lg={4} className="article-item mb-5 mb-lg-0">
            <div className="img-container">
              <Image src={Image1} />
            </div>
            <div className="item-info-container mt-4">
              <h5>Summer Lunch Menu By Mark Best</h5>
              <p>
                AEG ambassador Mark Best's summer eats are guaranteed to help
                you make the most of the warmer weather and entertaining at
                home.
              </p>
            </div>
            <a href="#" onClick={(e: any) => console.log(e)}>
              READ MORE
            </a>
          </Col>
          <Col md={6} lg={4} className="article-item mb-5 mb-lg-0">
            <div className="img-container">
              <Image src={Image2} />
            </div>
            <div className="item-info-container mt-4">
              <h5>A Traditional Christmas Eve, Mark Best Style</h5>
              <p>
                One of Australia's best chefs and AEG ambassador, Mark Best,
                shares his favourite Christmas Eve menu which is sure to impress
                your guests.
              </p>
            </div>
            <a href="#" onClick={(e: any) => console.log(e)}>
              READ MORE
            </a>
          </Col>
          <Col md={6} lg={4} className="article-item mb-5 mb-lg-0">
            <div className="img-container">
              <Image src={Image3} />
            </div>
            <div className="item-info-container mt-4">
              <h5> Taking Taste Further</h5>
              <p>
                This exclusive cookbook gives you all the know-how you need.
                We've designed it to make sure you get the most out of our
                products - and the best out of your food.
              </p>
            </div>
            <a href="#" onClick={(e: any) => console.log(e)}>
              READ MORE
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
