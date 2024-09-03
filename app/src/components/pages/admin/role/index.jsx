import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// import styles from "../Admin.module.css"

import CreateRole from "./create/index";

function AdminRole() {

    const [roleList, setRoleList] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const roles = await ( await fetch("/api/v1/admin/role/all") ).json();
                setRoleList(roles.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return (
        <main>
            <h2>Liste des rôles</h2>

            <CreateRole />

            <ul>
                {!roleList ? (
                    <p>Chargement</p>
                ) : (
                    roleList.map((datas) =>
                        <li>
                            <p>{datas.label}</p>
                            <div>
                                <Link to={"modifier/" + datas.id}>Modifier</Link>
                                <Link to={"supprimer/" + datas.id} >Supprimer</Link>
                            </div>

                        </li>
                    )
                )}
            </ul>

        </main>
    );
}

export default AdminRole;