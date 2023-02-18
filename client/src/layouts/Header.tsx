import Carousel from "react-bootstrap/Carousel";
import First_slide from "../assets/pexels-karolina-grabowska-5632371.jpg";
import Second_slide from "../assets/pexels-pixabay-259200.jpg";
import Third_slide from "../assets/pexels-pixabay-38519.jpg";
import "../sass/layouts/Header.scss";

const Header = () => {
  return (
    <div className="Header container col-12">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={First_slide} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Second_slide}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Third_slide} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
