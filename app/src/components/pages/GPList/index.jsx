import {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"

import styles from "./gpList.module.css"

function GPList() {

    const [GPList, setGPList] = useState(null);
    const [GPResult, setGPResult] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const GP = await (await fetch("http://localhost:9000/api/v1/GPList")).json();
                setGPList(GP.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const GPR = await (await fetch("http://localhost:9000/api/v1/GPList/top3/" + "16")).json();
                setGPResult(GPR.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return (
        <main>
            <h2>Chanpionnat 2024</h2>
            {
                !GPList ? (
                    <p>Chargement</p>
                ) : (
                    GPList.map((datas) => 
                        <article className={styles.gpList}>
                            <NavLink to={datas.id}>
                                <h4>{datas.label}</h4>
                            </NavLink>
                            <p>Circuit: {datas.circuit} // Date: {new Date(datas.date).toLocaleDateString()}</p>
                            <ul>
                                {
                                    !GPResult ? (
                                        <p>Chargement</p>
                                    ) : (
                                        GPResult.map((datas2) =>
                                            <li>
                                                {datas2.driver}
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </article>
                    )
                )
            }
        </main>
    )
}

export default GPList;