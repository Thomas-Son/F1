import query from "../model/query.js"

const getGP = async (req, res) => {
    try {
        const queryGP = "SELECT id, label, circuit, date FROM gp";
        const [datas] = await query.findByValue(queryGP);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

const getGPTop3 = async (req, res) => {
    try {
        const queryGPTop3 = "SELECT gp_id, gp.label AS gp, driver.label AS driver, place FROM results JOIN driver ON driver_id = driver.id JOIN gp ON gp_id = gp.id WHERE place < 4 AND gp_id = ?";
        const [datas] = await query.findByValue(queryGPTop3, req.params["id"]);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

export { getGP, getGPTop3 };