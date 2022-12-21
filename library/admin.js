const dbAdmin = require('../data/admin')

exports.addUpdateEventMaster = async (params) => {
    let result = []
    try {
        result = await dbAdmin.addUpdateEventMaster(params)
    } catch (err) {
        throw err
    }

    return result;
}

exports.listEvents = async () => {
    let result = []
    try {
        result = await dbAdmin.listEvents()
    } catch (err) {
        throw err
    }
    return result;
}


exports.addEmployeeDtls = async (params) => {
    let result = []
    try {
        result = await dbAdmin.addEmployeeDtls(params)
    } catch (err) {
        throw err
    }
    return result;
}

exports.addDeleteEmployeeEvent = async (params) => {
    let result = []
    try {
        result = await dbAdmin.addDeleteEmployeeEvent(params)
    } catch (err) {
        throw err
    }
    return result;
}


exports.getEmployeeLeaderBasedOnCriteria = async (params) => {
    let result = []
    try {
        result = await dbAdmin.getEmployeeLeaderBasedOnCriteria(params)
    } catch (err) {
        throw err
    }
    return parseEmployeeLeaderBasedOnCriteria(result,params);
}


const parseEmployeeLeaderBasedOnCriteria = (result, params) => {
    let employeeDtls = {}
    if (result && Array.isArray(result) && result.length > 0) {
        employeeDtls = result.reduce((ack, curr) => {
            ack[curr.emp_id] = ack[curr.emp_id] || {}
            ack[curr.emp_id]['emp_id'] = curr.emp_id;
            ack[curr.emp_id]['emp_name'] = curr.emp_name;
            ack[curr.emp_id]['score'] = ack[curr.emp_id]['score'] ? (parseFloat(ack[curr.emp_id]['score']) + parseFloat(curr.score)) : parseFloat(curr.score);
            ack[curr.emp_id]['gender'] = curr.gender;
            return ack
        }, {})
        let fResult = Object.values(employeeDtls);
        if (fResult && Array.isArray(fResult) && fResult.length > 0) {
            let sortBy = (params['filterParams'] && params['filterParams']['sortBy']) ? params['filterParams']['sortBy'] : "DESC"
            switch (sortBy) {
                case "ASC":
                    fResult.sort((a, b) => a.score - b.score);
                    break;
                default:
                    fResult.sort((a, b) => -1 * (a.score - b.score));
            }
        }
        return fResult;
    }
}


