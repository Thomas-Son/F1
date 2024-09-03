import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function DeleteRole() {

    const [roleInfo, setRoleInfo] = useState(null);
    const [id, setId] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
                const info = await (await fetch("/api/v1/admin/role/" + params.id)).json();
                setRoleInfo(info.datas);
                setId(info.datas[0].id)
                console.log(id)
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/v1/admin/role/delete/" + params.id, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (res.status === 201) {
            navigate("/administrateur/roles");
        }
    }

    return (
        <main>
            <h2>Supprimer</h2>
            {!roleInfo ? (
                <p>Chargement</p>
            ) : (
                roleInfo.map((datas) =>
                    <form onSubmit={handleSubmit}>
                        <p>Voulez-vous supprimer le rôle : {datas.label} ?</p>
                        <button type="submit">Valider</button>
                        <Link to={"/administrateur/roles"}>Annuler</Link>
                    </form>
                )
            )}

        </main>
    );
}

export default DeleteRole;