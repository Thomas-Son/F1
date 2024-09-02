import query from "../model/query.js";
import { hash, compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const { sign } = jsonwebtoken;
const { SK } = process.env;
const SALT = 10;

const signup = async (req, res) => {
    try {
        const datas = { label: req.body.label, email: req.body.email, password: req.body.password };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (!emailRegex.test(datas.email)) {
            return res.status(400).json({ msg: "L'email n'est pas dans un format valide" })
        }
        if (!passwordRegex.test(datas.password)) {
            return res.status(400).json({ msg: "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et avoir au moins 8 caractères." })
        }

        const queryUser = "SELECT label, email FROM user WHERE label = ? OR email = ?";
        const [user] = await query.findByDatas(queryUser, datas);

        if (user.length) {
            res.status(409).json({ msg: "un utilisateur avec cette identifiant ou email existe déjà" });
        }

        if (!user.length) {
            const datas = {
                label: req.body.label,
                email: req.body.email,
                password: await hash(req.body.password, SALT),
            };
            const queryNew = "INSERT INTO user (label, email, password) VALUES(?, ?, ?)";
            await query.write(queryNew, datas);

            res.status(201).json({ msg: "utilisateur créé" });
        }
    } catch (error) {
        throw Error(error);
    }
};

const signin = async (req, res) => {
    try {
        const datas = { label: req.body.label };
        const queryUser = "SELECT user.id, label, email, password FROM user WHERE label = ?";
        const [user] = await query.findByDatas(queryUser, datas);

        if (user.length) {
            const samePWD = await compare(req.body.password, user[0].password);
            if (samePWD) {
                const TOKEN = sign({ label: user[0].label }, SK, { expiresIn: '1h' });
                res.status(200).json({ TOKEN });
            }
            if (!samePWD) {
                res.status(401).json({ msg: "Mot de passe incorrecte" })
            }
        }
        if (!user.length) {
            res.status(409).json({ msg: "Mauvais identifiants" });
        }
    } catch (error) {
        throw Error(error);
    }
};

const signout = (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({ msg });
    } catch (error) {
        throw Error(error);
    }
}

const getInfoUser = async (req, res) => {
    try {
        const queryUser = " SELECT user.id, label FROM user WHERE user.label = ? ";
        const [datas] = await query.findByDatas(queryUser, req.params);
        res.status(200).json({ datas });
    } catch (error) {
        throw Error(error);
    }
}

export { signup, signin, signout, getInfoUser };