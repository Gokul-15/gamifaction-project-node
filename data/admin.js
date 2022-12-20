let db = require('./sqlConnect.js');
const moment = require('moment')
exports.addUpdateEventMaster = async (params) => {
    const INS_QUERY = `INSERT INTO event_master (event_name,event_date,score) values (?,?,?)`
    const UPDT_QUERY = `UPDATE event_master SET score = coalesce(?,score) where event_id=?`
    let QUERY = INS_QUERY;
    if (params['isUpdate'])
        QUERY = UPDT_QUERY

    let inparams = !params['isUpdate'] ? [params['eventName'], params['eventDate'], params['score']] : [params['score'], params['eventId']]
    let result = []
    try {
        result = await db.query(QUERY, inparams)
    } catch (err) {
        throw err;
    }
    return;
}

exports.listEvents = async () => {
    const QUERY = `SELECT * FROM event_master`
    let result = null
    try {
        result = await db.query(QUERY)
    } catch (err) {
        throw err;
    }
    if (result && result.rows) return result.rows;
    return [];
}



exports.addEmployeeDtls = async (params) => {
    const INS_QUERY = `INSERT INTO employee_master (emp_id,emp_name,gender) values (?,?,?)`
    let inparams = [params['empId'], params['empName'], params['gender']]
    let result = []
    try {
        result = await db.query(INS_QUERY, inparams)
    } catch (err) {
        throw err;
    }
    return;
}

exports.addDeleteEmployeeEvent = async (params) => {
    const INS_QUERY = `INSERT INTO employee_event (emp_id,event_id,event_date) values (?,?,?)`
    const UPDT_QUERY = `DELETE FROM event_master where event_id=? and emp_id = ?`
    let QUERY = INS_QUERY;
    if (params['isUpdate'])
        QUERY = UPDT_QUERY

    let inparams = !params['isUpdate'] ? [params['empId'], params['eventId'], params['eventDate']] : [params['empId'], params['eventId']]
    let result = []
    try {
        result = await db.query(QUERY, inparams)
    } catch (err) {
        throw err;
    }
    return;
}

exports.getEmployeeLeaderBasedOnCriteria = async (params) => {
    let QUERY = `SELECT a.emp_id,a.emp_name ,a.gender,c.score   from employee_master a,employee_event b, event_master c
    where a.emp_id = b.emp_id
    and b.event_id = c.event_id `
    if (params && params['filterParams'] && Object.keys(params['filterParams']).length > 0) {
        if (params['filterParams']['emp_id']) QUERY += `and a.emp_id = ${params['filterParams']['emp_id']} `;
        if (params['filterParams']['event_from']) {
            params['filterParams']['event_to'] = params['filterParams']['event_to'] ? params['filterParams']['event_to'] : moment().format("YYYY-MM-DD HH:mm:ss")
            QUERY += `and b.event_date >= ${params['filterParams']['event_from']} and b.event_date <= ${params['filterParams']['event_to']} `
        }
    }
    let result = null
    try {
        result = await db.query(QUERY)
    } catch (err) {
        throw err;
    }
    if (result && result.rows) return result.rows;
    return [];
}