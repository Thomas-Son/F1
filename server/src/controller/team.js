import query from "../model/query.js"

const getTeam = async (req, res) => {
    try {
        const queryTeam = "SELECT label, team.score, photo_url FROM team ORDER BY team.score DESC";
        const [datas] = await query.findByValue(queryTeam);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

export { getTeam };