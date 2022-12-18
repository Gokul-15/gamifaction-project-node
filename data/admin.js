let db = require('./sqlConnect.js');
exports.addUpdateEventMaster =  (params) => {
    const INS_QUERY = `INSERT INTO event_master (event_name text,event_date text,score REAL) value (?,?,?)`
    const UPDT_QUERY = `UPDATE event_master SET score = coalesce(?,score) where event_id=?`
    let QUERY = INS_QUERY;
    if (params['isUpdate'])
        QUERY = UPDT_QUERY

    let inparams = !params['isUpdate'] ? [params['eventName'], params['eventDate'], params['score']] : [params['score'], params['eventId']]
    try {
        db.run(QUERY, inparams, (err, result) => {
            if (err) {
                throw err;
            }
        })
    } catch (err) {
        throw err;
    }
    return;
}

