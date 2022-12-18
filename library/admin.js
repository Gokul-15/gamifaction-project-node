const dbAdmin = require('../data/admin')

exports.addUpdateEventMaster =  (params) => {
    let result = []
    try {
        result =  dbAdmin.addUpdateEventMaster(params)
    } catch (err) {
        throw err
    }
    return  result;
}
