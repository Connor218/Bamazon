var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "products"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    afterConnect();
});


function afterConnect(){
    var query =  connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;
        // console.log(res);
        connection.end();
        console.log("===================================================")
        for (let index = 0; index < res.length; index++) {
            printing(res[index]);
        }
        console.log("===================================================")
    });
}

function printing(obj){
    
    console.log(obj.prodcut_name+' | '+obj.department_name+' | '+obj.price+' | '+stock_quantity);
}

prodcut_name, department_name, price, stock_quantity