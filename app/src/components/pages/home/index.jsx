import {NavLink} from "react-router-dom";

function Home() {
    return(
        <main>
            <h2>Bienvenue sur la page d'accueil !</h2>

            <NavLink to="pilotes"><h3>Liste des pilotes et des écuries</h3></NavLink>

            <NavLink to="GP-2024"><h3>Liste des GP 2024</h3></NavLink>

            <NavLink to="paris"><h3>Paris entre amis</h3></NavLink>
        </main>
    )
}

export default Home;