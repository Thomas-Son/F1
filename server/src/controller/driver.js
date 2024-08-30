import query from "../model/query.js"

const getDriver = async (req, res) => {
    try {
        const queryDriver = "SELECT driver.label, nationality.label AS nationality, team.label AS team FROM driver JOIN nationality ON nationality_id = nationality.id JOIN team ON team_id = team.id";
        const [datas] = await query.findByValue(queryDriver);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

export {getDriver};