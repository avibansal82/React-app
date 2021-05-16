import React, { useState } from "react";
import styles from "../styles.module.css";


function ItemIncrement() {
    const [num, setNum] = useState(0);


    return (
        <div style={{ width: "100%",margin:"auto" }}>
            <button
                className={styles.button}
                style={{ display: "inline" ,
                         width:"30px"}}
                onClick={() => { if (num != 0) setNum(num - 1) }}
            >-</button>
            <p style={{ "display": "inline" }}>{num}</p>
            <button
                className={styles.button}
                style={{ display: "inline", width:"30px" }}
                onClick={() => setNum(num + 1)}
            >+</button>
        </div>
    );

}
export default ItemIncrement;