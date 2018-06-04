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

function start() {

    var options = [
      {
        type:"list",
        message:"Select an Option",
        name:"option",
        choices: [
          "Buy a Product",
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
      
        console.log("===================================================")
        for (let index = 0; index < res.length; index++) {
            printing(res[index]);
        }
        console.log("===================================================")
        start();
    });
 
}

function buyProduct() {

  var question = [
    {
      type:"input",
      message:"What product would you like? slect by product ID",
      name:"product"
    },
    {
      type:"input",
      message:"what quanitiy?",
      name:"amount"
    }
  ];

  inquirer.prompt(question)
  .then(function(response) {

    var product_id = parseInt(response.product);
    console.log(product_id);

    var count = parseInt(response.amount);
    console.log(count);

    connection.query("SELECT * FROM product WHERE id = "+product_id, function(err, res) {

      if(err){
        console.log(err)
      }
      else{
      
        if(parseInt(res[0].stock_quantity) > count){
          console.log("id", product_id)
          // update db
          connection.query("UPDATE product SET ? WHERE ?",[
            {stock_quantity: parseInt(res[0].stock_quantity) - count}, {id: product_id}
            ],
            function(errs, results){
            console.log(results);
            if(errs){
              console.log(errs)
            }
              console.log("your total is:", parseInt(res[0].price)*count);
              afterConnect();
          })
          // let user know their total
          
        }
        else {
          console.log("sorry there isn't enough stock to cover your order!")
        }
          //printing(res);
      }
    }

      
    );

  });
};

function printing(obj){
    
    console.log(obj.id+' | '+obj.product_name+' | '+obj.department_name+' | '+obj.price+' | '+obj.stock_quantity);  
}
