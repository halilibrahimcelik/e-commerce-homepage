import React from "react";
import greenHoodie from "../../assets/green hoodie.png";
import jean from "../../assets/waist jean.png";
import blueHodie from "../../assets/blue  hoodie.jpg";
import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <main className={styles["product-lists"]}>
      <div
        id="carouselExampleControls"
        className={`carousel carousel-dark slide ${styles.carousel}`}
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.products}>
              <div className={styles.card}>
                <img
                  src={greenHoodie}
                  className={styles.image}
                  alt="Green Hoodie"
                />
                <div>
                  <p>365 Signature Hoodie</p>
                  <div className={styles["product-info"]}>
                    <strong>€33.95 </strong>
                    <ul>
                      <li>
                        <input
                          className={styles["blue-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["red-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["purple-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["green-input"]}
                          type="checkbox"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img
                  src={jean}
                  className={styles.image}
                  alt="organic Skinny Waist Jean"
                />
                <div>
                  <p>Organic Skinny High Waist Raw Hem Jeans</p>
                  <div className={styles["product-info"]}>
                    <strong>€33.95 </strong>
                    <ul>
                      <li>
                        <input
                          className={styles["blue-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["red-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["purple-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["green-input"]}
                          type="checkbox"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <img
                  src={blueHodie}
                  className={styles.image}
                  alt="blue Hoodie"
                />
                <div>
                  <p>Organic Skinny Hoodie</p>
                  <div className={styles["product-info"]}>
                    <strong>€33.95 </strong>
                    <ul>
                      <li>
                        <input
                          className={styles["blue-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["red-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["purple-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["green-input"]}
                          type="checkbox"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className={styles.products}>
              <div className={styles.card}>
                <img
                  src={blueHodie}
                  className={styles.image}
                  alt="blue Hoodie"
                />
                <div>
                  <p>Organic Skinny Hoodie</p>
                  <div className={styles["product-info"]}>
                    <strong>€33.95 </strong>
                    <ul>
                      <li>
                        <input
                          className={styles["blue-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["red-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["purple-input"]}
                          type="checkbox"
                        />
                      </li>
                      <li>
                        <input
                          className={styles["green-input"]}
                          type="checkbox"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`${styles["next-button"]}`}
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
    </main>
  );
};

export default ProductList;
