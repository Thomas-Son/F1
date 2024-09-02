import { useState, useEffect } from "react";

import styles from "./team.module.css"

function Team() {

    const [allDriver, setAllDriver] = useState(null);
    const [allTeam, setAllTeam] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const driver = await (await fetch("http://localhost:9000/api/v1/driver")).json();
                setAllDriver(driver.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const team = await (await fetch("http://localhost:9000/api/v1/team")).json();
                setAllTeam(team.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return (
        <main>
            <h2>Equipes de F1 2024</h2>

            {
                !allTeam ? (
                    <p>Chargement</p>
                ) : (
                    allTeam.map((datas) =>
                        <section className={styles.team}>
                            <h3>{datas.label} {datas.score} Points</h3>
                            <img src={"images/team/" + datas.photo_url} alt={"photo de l'équipe" + datas.label} />
                            <div className={styles.teamComp}>
                                {
                                    !allDriver ? (
                                        <p>Chargement</p>
                                    ) : (
                                        allDriver.map((datas2) =>
                                            datas.label === datas2.team ? (
                                                <article className={styles.teamates}>
                                                    <h4>{datas2.label}</h4>
                                                    <p>{datas2.nationality}</p>
                                                    <p>Ecurie: {datas2.team}</p>
                                                </article>
                                            ) : (
                                                <></>
                                            )
                                        )
                                    )
                                }
                            </div>
                        </section>
                    )
                )
            }
        </main>
    )
}

export default Team;