import query from "../model/query.js"

const getBetGroup = async (req, res) => {
    try {
        const queryBetGroup = "SELECT bet_group.label, user.label, score FROM bet_group_user JOIN user ON user.id = bet_group_user.user_id JOIN bet_group ON bet_group.id = bet_group_user.bet_group_id"; //Liste des user avec les groupes dans lesquels ils sont présent avec le score du groupe.
        const [datas] = await query.findByValue(queryBetGroup);
        res.status(200).json({ datas })
    } catch (error) {
        throw Error(error);
    }
};

export {getBetGroup};