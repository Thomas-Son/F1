import { useState, useEffect } from "react";

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
        <>
            <h2>Equipes de F1 2024</h2>

            {
                !allTeam ? (
                    <p>Chargement</p>
                ) : (
                    allTeam.map((datas) =>
                        <section>
                            <h3>{datas.label} {datas.score} Points</h3>

                            {
                                !allDriver ? (
                                    <p>Chargement</p>
                                ) : (
                                    allDriver.map((datas2) =>
                                        datas.label === datas2.team ? (
                                            <article>
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
                        </section>
                    )
                )
            }
        </>
    )
}

export default Team;