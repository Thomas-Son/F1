import { NavLink } from "react-router-dom";

import styles from "./admin.module.css"

function Admin() {
    return (
        <main>
            <h2>Panneau administrateur</h2>

            <nav className={styles.panneau}>
                <NavLink to="utilisateurs">Liste des utilisateurs</NavLink>
                <NavLink to="roles">Liste des rôles</NavLink>
                <NavLink to="pilotes">Liste des pilotes</NavLink>
                <NavLink to="equipes">Liste des équipes</NavLink>
                <NavLink to="gp">Liste des GP 2024</NavLink>
                <NavLink to="paris">Liste des groupes de paris</NavLink>
            </nav>

        </main>
    )
}

export default Admin;