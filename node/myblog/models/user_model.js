var db=require('./db.js');

exports.insert_data=function(name,pass,callback){
    var sql='insert into t_users(ACCOUNT,PASSWORD) values(?,?)';
    db.query(sql,[name,pass],callback);
}

exports.checkname=function(name,callback){
    var sql='select * from t_users where ACCOUNT=?';
    db.query(sql,[name],callback);
}