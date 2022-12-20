let sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite" 
let Promise = require('promise')
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
      
    }
})

db.query = function (sql, params) {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.all(sql, params, function (error, rows) {
        console.log("error, rows",error, rows)
        if (error)
          reject(error);
        else
          resolve({ rows: rows });
      });
    });
};
    

module.exports = db ;

    // let sql ;

//drop script
// sql = `DROP TABLE event_master ` ;
//create scripts
// sql = `CREATE TABLE event_master ( event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name text,event_date text,score text)` 
// sql = `CREATE TABLE event_master_audit ( event_id ,event_name text,event_date text,score REAL,modified_date text)` 
//  sql = `select * from event_master ` ;

//trigger
/*sql = `CREATE TRIGGER event_master_audit AFTER UPDATE   
ON event_master  
BEGIN  
INSERT INTO event_master_audit(event_id ,event_name text,event_date text,score REAL,modified_date text) VALUES (old.event_id,old.event_name,old.event_date,old.score,datetime('now'));  
END; 
`
*/
// sql = `CREATE TABLE employee_master ( emp_id text,emp_name text,gender text)` 
//sql =`drop table employee_event`
// sql = `CREATE TABLE employee_event ( emp_id text,event_id text,event_date text)` 
//  sql = `DELETE FROM  event_master_audit ` ;


// //run sql
  // db.run(sql)

// db.all(sql,[],(err,rows)=>{
//     if(err) return console.log(err.message);
//     console.log("rows",rows)
// })


/*create table event_master (event_id text,score real);

create table employee_master (employee_id text);

create table employee_event (employee_id text,event_id text);


INSERT INTO event_master (event_id,score)  
VALUES ('1', 10);   

INSERT INTO event_master (event_id,score)  
VALUES ('2', 20);

INSERT INTO employee_master (employee_id)  
VALUES ('28');   


INSERT INTO employee_event (employee_id,event_id)  
VALUES ('28','2');   

select a.employee_id,b.event_id,c.score  from employee_master a,employee_event b, event_master c
where a.employee_id = b.employee_id
and b.event_id = c.event_id


*/


