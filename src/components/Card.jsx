import React from "react";
import styles from "../styles.module.css";
import ItemIncrement from "./ItemIncrement";

function Card() {
  return (
    <div >
      <div className={styles.card} style={{ margin: "auto" }}>

        <img
          src="./images/screen-full.svg"
          alt="Medicine Img"
          className={styles.cardImg} />

        {/*  title */}
        <h1>Crocine</h1>

        {/*  medicine form */}
        <p>Packaging of Product: 15 ml in 1 packet</p>

        {/*  price */}
        <h2>Rs. 15.00</h2>

        <div className={styles.clearfix}>
          {/*  card link */}
          <div style={{ width: "50%" }}
          className={styles.column}>
            <ItemIncrement />
          </div>
          <div style={{ width: "50%" }}
          className={styles.column}>
            <button className={styles.button} style={{ width: "100%",margin:"auto" }}> Add to Cart</button>
          </div>
        </div>
      </div>


    </div>


  );
}
export default Card;