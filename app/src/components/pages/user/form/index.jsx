import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signin } from "../../../../store/slice/user";

function Form({ type }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [label, setLabel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [msg, setMsg] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/v1/user/sign" + type, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label, email, password }),
        });
        const json = await res.json();
        setMsg(json.msg);

        if (type === "in" && res.status === 200) {

            const info = await (await fetch("/api/v1/user/" + label)).json();

            localStorage.setItem("auth", json.TOKEN);
            localStorage.setItem("user_id", info.datas[0].id);

            dispatch(signin({ label }));
            navigate("/");
        }

        if (type === "up" && res.status === 201) {
            navigate("/utilisateur/connexion");
        }
    }

    return (
        <main >
            <form onSubmit={handleSubmit}>
                {msg && <p>{msg}</p>}

                <input
                    placeholder="Votre label"
                    type="text"
                    name="label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />

                {type === "up" && (
                    <input
                        placeholder="Votre email"
                        type="text"
                        name="label"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}

                <input
                    placeholder="Votre mot de passe"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    {type === "in" ? "Se connecter" : "S'enregistrer"}
                </button>

                {type === "in" && (
                    <p>
                        Pas de compte ?{" "}
                        <Link to="/utilisateur/inscription">En créer un</Link>
                    </p>
                )}
            </form>
        </main>
    );
}

export default Form;