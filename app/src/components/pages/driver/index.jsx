import {useState, useEffect} from "react";

import styles from "./driver.module.css"

function Driver() {

    const [allDriver, setAllDriver] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const driver = await (await fetch("http://localhost:9000/api/v1/driver")).json();
                setAllDriver(driver.datas);
            } catch(error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return(
        <main>
            <h2>Pilotes F1 2024</h2>

            {
                !allDriver ? (
                    <p>Chargement</p>
                ) : (
                    allDriver.map((datas) =>
                        <article className={styles.driver}>                            
                            <h4>{datas.label} {datas.score} Points</h4>
                            <img src={"images/driver/" + datas.photo_url} alt={"photo de " + datas.label} />
                            <p>{datas.nationality}</p>
                            <p>Ecurie: {datas.team}</p>
                        </article>
                    )
                )
            }
        </main>
    )
}

export default Driver;