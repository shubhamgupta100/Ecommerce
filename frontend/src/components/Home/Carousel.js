import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/flap/1004/200/image/ef374bc8fb85d57b.jpg?q=50"
              // src="https://rukminim1.flixcart.com/flap/1004/200/image/2923d17338c128ff.jpg?q=100"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/flap/1004/200/image/1b0f149fdc24be27.jpg?q=50"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/flap/1004/200/image/789e240e487e7c23.jpg?q=50"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
