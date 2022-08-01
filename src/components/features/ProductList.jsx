import React from "react";
import greenHoodie from "../../assets/green hoodie.png";
import jean from "../../assets/waist jean.png";
import blueHodie from "../../assets/blue  hoodie.jpg";
import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className={styles.card}>
                  <img
                    src={greenHoodie}
                    className="card-img-top"
                    alt="Green Hoodie"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className={styles.card}>
                  <img
                    src={jean}
                    className="card-img-top"
                    alt="organic Skinny Waist Jean"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className={styles.card}>
                  <img
                    src={blueHodie}
                    className="card-img-top"
                    alt="blue Hoodie"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className={styles.card}>
                  <img
                    src={greenHoodie}
                    className="card-img-top"
                    alt="Green Hoodie"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className={styles.card}>
                  <img
                    src={jean}
                    className="card-img-top"
                    alt="organic Skinny Waist Jean"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className={styles.card}>
                  <img
                    src={blueHodie}
                    className="card-img-top"
                    alt="blue Hoodie"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
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

export default ProductList;
