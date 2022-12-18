let sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite" 
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
      
    }
})

module.exports = db ;

// let sql ;

//drop script
// sql = `DROP TABLE event_master ` ;
//create scripts
//sql = `CREATE TABLE event_master ( event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name text,event_date text,score REAL)` 
//sql = `CREATE TABLE event_master_audit ( event_id ,event_name text,event_date text,score REAL,modified_date text)` 
//sql = `select * event_master ` ;

//trigger
/*sql = `CREATE TRIGGER event_master_audit AFTER UPDATE   
ON event_master  
BEGIN  
INSERT INTO event_master_audit(event_id ,event_name text,event_date text,score REAL,modified_date text) VALUES (old.event_id,old.event_name,old.event_date,old.score,datetime('now'));  
END; 
`
*/

//run sql
// db.run(sql)

// db.all(sql,[],(err,rows)=>{
//     if(err) return console.log(err.message);
//     console.log("rows",rows)
// })