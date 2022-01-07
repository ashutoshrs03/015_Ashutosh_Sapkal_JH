const mysql = require("mysql");
const promise = require("bluebird");
promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "javascript",
};



const addmsg = async(user) =>{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql =`insert into user (msg) values (?)`;
    connection.queryAsync(sql,[user.msg]);
    console.log("Message Added Successfully..!!!");
    await connection.endAsync();
};

const selectAllMsg = async (user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
  
    let sql = `select * from user`;
    const list = await connection.queryAsync(sql);
  
    await connection.endAsync();
    return list;
  };

module.exports={selectAllMsg,addmsg};
