const datas = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Shyam' },
    { id: 3, name: 'Hari' },
]

function getAllUser(req, res, next) {
    res.json({
        data: datas
    });
}

function getSingleUser(req, res, next) {
    res.json({
        data: datas.filter(function (item, index) {
            if (item.id == req.params.id) {
                return item;
            }
        })[0]
    });
}

module.exports = {
    getAllUser,
    getSingleUser
}