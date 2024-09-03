import query from "../../model/query.js";

const getRoleAll = async (req, res) => {
    try {
        const queryRole = " SELECT id, label FROM role ";
        const [datas] = await query.find(queryRole);

        res.status(200).json({ datas });
    } catch (error) {
        throw Error(error);
    }
};

const getRole = async (req, res) => {
    try {
        const queryRole = " SELECT id, label FROM role WHERE role.id = ?";
        const [datas] = await query.findByDatas(queryRole, req.params);

        res.status(200).json({ datas });
    } catch (error) {
        throw Error(error);
    }
};

const addRole = async (req, res) => {
    try {
        let msg = "Nouveau rôle créé"
        const data = { role: req.body.role };
        const queryRole = " INSERT INTO role (label) VALUE (?) ";
        await query.write(queryRole, data);

        res.status(201).json({ msg });
    }
    catch (error) {
        throw Error(error);
    }
}

const deleteRole = async (req, res) => {
    try {
        let msg = ""
        const queryRole = "DELETE FROM role WHERE id = ?";
        await query.findByValue(queryRole, req.params.id);

        msg = "Le rôle a été supprimé.";
        res.status(201).json({ msg });
    } catch (error) {
        throw Error(error);
    }
};

const updateRole = async (req, res) => {
    try {
        let msg = "";
        const datas = {
            role: req.body.role,
            id: req.body.id
        };

        const queryRole = "SELECT id, label FROM role WHERE id = ?";
        const [role] = await query.findByDatas(queryRole, req.params);

        if (role.length) {
            const queryRole = " UPDATE role SET label = ? WHERE id = ? ";
            await query.write(queryRole, datas);

            msg = "Le rôle a été modifié.";
            res.status(201).json({ msg });
        }
    } catch (error) {
        throw Error(error);
    }
};

export { getRoleAll, addRole, deleteRole, updateRole, getRole };