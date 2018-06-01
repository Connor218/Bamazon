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
    start();
});

function start() {

    var options = [
      {
        type:"list",
        message:"Select an Option",
        name:"option",
        choices: [
          "Buy a Poduct",
          "Buy Multiple Units"
        ]
      }
    ];

    inquirer.prompt(options).then(function(response){

        switch(response.option) {
          
          case "Buy a Product":
    
            buyProduct();
    
          break;
    
          case "Buy Multiple Units":
    
            buyProduct();
    
          break;
          
        }
    
      });
    }

function afterConnect(){
    var query =  connection.query('SELECT * FROM product', function(err, res){
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

  function buyProduct() {

    var question = [
      {
        type:"input",
        message:"What product would you like?",
        name:"product"
      }
    ];

    inquirer.prompt(question).then(function(response) {

      var query = connection.query(
        "SELECT * FROM product WHERE ?",
        {
          product_name: response.product_name
        },
        function(err, res) {
          
          printing(res);
        }
      );

    });

  };

function printing(obj){
    
    console.log(obj.id+' | '+obj.product_name+' | '+obj.department_name+' | '+obj.price+' | '+obj.stock_quantity);
}