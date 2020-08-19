const ClashServiceAPI = require("../services/ClashService")

const getClanMemberData = async () => {
    let json = await new ClashServiceAPI('clans/%23GYQG2ULQ').clashAPI()

    return json
}

exports.getClanMemberData = getClanMemberData