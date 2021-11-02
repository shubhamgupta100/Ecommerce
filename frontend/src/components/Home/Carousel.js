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
              src="https://mdbootstrap.com/img/new/slides/041.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbootstrap.com/img/new/slides/042.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbootstrap.com/img/new/slides/043.jpg"
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
