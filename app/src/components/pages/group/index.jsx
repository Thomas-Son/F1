import { useState, useEffect } from "react";

function Group() {

    const [betGroup, setBetGroup] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const betGroup = await (await fetch("http://localhost:9000/api/v1/betGroup")).json();
                setBetGroup(betGroup.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return(
        <>
            <p>Pour chaque Grand Prix vous allez parier sur les pilotes qui arriveront sur les trois premières places.</p>
            <p>Les points sont distribués de la manière suivante :</p>
            <ul>
                <li>Le pilote à la 1ère place trouvé : 5pts</li>
                <li>Le pilote à la 2ème place trouvé : 4pts</li>
                <li>Le pilote à la 3ème place trouvé : 3pts</li>
                <li>Le pilote est dans le top 3 mais pas à la bonne place : 1pt</li>
                <li>Le pilote est absent du top 3 : 0 pt</li>
            </ul>
            
            <article>
                <ul>
                    {
                        !betGroup ? (
                            <p>Chargement</p>
                        ) : (                    
                            betGroup.map((datas) =>
                                <li>
                                    {datas.label} Score : {datas.score}
                                </li>
                            )
                        )
                    }
                </ul>
            </article>
            

        </>
    )
}

export default Group;