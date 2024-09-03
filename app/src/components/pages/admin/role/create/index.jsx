import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles from "../../Admin.module.css"

function CreateRole() {

    const [role, setRole] = useState(null);
    const [msg, setMsg] = useState(null);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/v1/admin/role/add", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role }),
        });
        const json = await res.json();
        setMsg(json.msg);

        if (res.status === 201) {
            window.location.reload();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {msg && <p>{msg}</p>}
            <input
                placeholder="Entrer le nom du nouveau rôle"
                type="text"
                name="label"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <button type="submit">Ajouter le nouveau rôle</button>
        </form>
    );
}

export default CreateRole;