import React from "react";
import { Carousel as CarouselAntd } from "antd";

const contentStyle = {
  objectFit: "cover",
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Carousel() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <CarouselAntd dotPosition="right" autoplay afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img
            className="img-fluid h-100 w-100"
            src="https://img.freepik.com/free-vector/online-movies-entertainment-banner_1419-2246.jpg?w=2000"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="img-fluid h-100 w-100"
            src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_03.jpg"
          />
        </h3>
      </div>
    </CarouselAntd>
  );
}
