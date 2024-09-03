import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";

import logo from "../../assets/images/f1_logo.svg"

import styles from "./header.module.css"

function Header() {

    const { isLogged, userInfos } = useSelector((state) => state.user);
    console.log(userInfos)

    return(
        <header>

            <img src={logo} alt="logo de formule 1" />
            <h1>Site de paris de Formule 1</h1>

            <nav className={styles.navHeader}>
                <NavLink to={"/"}>Accueil</NavLink>
                <NavLink to={"GP-2024"}>Resultats</NavLink>
                <NavLink to={"equipes"}>Equipes</NavLink>
                <NavLink to={"pilotes"}>Pilotes</NavLink>
                <NavLink to={"paris"}>Paris</NavLink>
                <NavLink to={"historique"}>Historique</NavLink>

                {localStorage.user_role === "admin" &&
                    <>
                        <NavLink to={"administrateur"}>Admin</NavLink>
                    </>}

                {!isLogged ?
                    <NavLink to={"utilisateur/connexion"}>Connexion</NavLink>
                    :
                    <NavLink to={"utilisateur/deconnexion"}>Déconnexion</NavLink>
                }

            </nav>

        </header>
    )
}

export default Header;