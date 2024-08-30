import {useState, useEffect} from "react";

function Driver() {

    const [allDriver, setAllDriver] = useState(null);
    const [allTeam, setAllTeam] = useState(null);

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

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const team = await (await fetch("http://localhost:9000/api/v1/team")).json();
    //             setAllTeam(team.datas);
    //         } catch(error) {
    //             throw Error(error);
    //         }
    //     }
    //     getData();
    // }, []);

    return(
        <>
            <h2>Pilotes F1 2024</h2>

            {
                !allDriver ? (
                    <p>Chargement</p>
                ) : (
                    allDriver.map((datas) =>
                        <article>
                            <h4>{datas.label} {datas.score} Points</h4>
                            <p>{datas.nationality}</p>
                            <p>Ecurie: {datas.team}</p>
                        </article>
                    )
                )
            }
        </>
    )
}

export default Driver;