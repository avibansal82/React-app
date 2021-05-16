import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";



function SearchBar() {
    const [meds, setMed] = useState([]);

    
    function searchMed(event) {
        var prevalue;
        if (event.target.name == "text") {
            prevalue= event.target.value;
        }
    }
    useEffect(() => {
        var myHeaders = new Headers();
        var access_token = "";
        myHeaders.append("Authorization", `Bearer ${access_token}`);

        //var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            //body: raw,
            redirect: 'follow'
        };

        fetch(`https://www.healthos.co/api/v1/autocomplete/medicines/brands/${prevalue}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result[0])
                setMed(result);
            })
            .catch(error => console.log('error is there', error));
    }, []);


    



  

    return (<>
        <div className={styles.SearchBar}>
            <div className={styles.searchContainer}>
                <form>
                    <input type="text" placeholder="Search for Generic Medicines" onChange={searchMed} name="search" />
                    <button type="submit" onClick={searchMed} name="button">Submit</button>
                </form>
            </div>

            <ul>
                {meds.map(Med =>  <li>{Med.name}</li> )}
            </ul>
        </div>



    </>);
}
export default SearchBar;
