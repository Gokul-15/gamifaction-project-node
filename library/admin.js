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
    return parseEmployeeLeaderBasedOnCriteria(result);
}


const parseEmployeeLeaderBasedOnCriteria = (result)=>{
    if(result && Array.isArray(result) && result.length > 0){
        
    }
}


