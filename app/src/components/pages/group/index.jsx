function Group() {
    return(
        <>
            <p>Pour chaque Grand Prix vous aller parier sur les pilotes qui arriveront sur les trois premières places.</p>
            <p>Les points sont distribués de la manière suivante :</p>
            <ul>
                <li>Le pilote à la 1ère place trouvé : 5pts</li>
                <li>Le pilote à la 2ème place trouvé : 4pts</li>
                <li>Le pilote à la 3ème place trouvé : 3pts</li>
                <li>Le pilote est dans le top 3 mais pas à la bonne place : 1pt</li>
                <li>Le pilote est absent du top 3 : 0 pt</li>
            </ul>
        </>
    )
}

export default Group;