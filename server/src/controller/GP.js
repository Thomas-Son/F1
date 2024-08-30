import query from "../model/query.js"

const getGP = async (req, res) => {
    try {
        const queryGP = "SELECT label, circuit, date FROM gp";
        const [datas] = await query.findByValue(queryGP);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

export { getGP };