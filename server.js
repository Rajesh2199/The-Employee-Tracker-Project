var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  
  user: "root",

  password: "password123",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  selectAction ();
});

function selectAction() {
    inquirer  
    .prompt ({
        name: "action",
        type:"rawlist",
        message: "Select the action youd would like to perform?",
        choicses : [
            "Add Department",
            "Add roles",
            "Add employess",
            "View departments",
            "View roles",
            "View employees",
            "update employee roles"
        ]
    })
    .then(function(answer){
        switch (answer.action) {
            case "Add Department":
            addDepartment();
            break;

            case "Add roles":
            addRoles();
            break;

            case "Add Department":
            addDepartment();
            break;

            case "Add employees":
            addEmployees ();
            break;
        }
    })
}

