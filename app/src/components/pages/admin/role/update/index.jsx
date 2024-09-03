import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function UpdateRole() {

    const [roleInfo, setRoleInfo] = useState(null);
    const [role, setRole] = useState(null);
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
        const res = await fetch("/api/v1/admin/role/update/" + params.id, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role, id }),
        });

        if (res.status === 201) {
            navigate("/administrateur/roles");
        }

    }


    return (
        <main>
            <h2>Modifier</h2>

            {!roleInfo ? (
                <p>Chargement</p>
            ) : (
                roleInfo.map((datas) =>
                    <form onSubmit={handleSubmit}>
                        <p>Souhaitez-vous modifier le rôle : {datas.label} ?</p>
                        <input
                            placeholder="Entrer le nouveau rôle"
                            type="text"
                            name="label"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <button type="submit">Valider</button>
                        <Link to={"/administrateur/roles"}>Annuler</Link>
                    </form>
                )
            )}
        </main>
    );
}

export default UpdateRole;