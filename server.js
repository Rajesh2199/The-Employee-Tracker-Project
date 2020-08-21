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
        choices : [
            "Add Department",
            "Add roles",
            "Add employees",
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

            case "Add employees":
            addEmployees();
            break;

            case "View department":
            viewDepartment();
            break;

            case "View roles":
            viewRoles();
            break;

            case "View employees":
            viewEmployees ();
            break;

            case "Update employee roles":
            updateEmployee ();
            break;
        }
    })
}


function addDepartment() {
    inquirer
    .prompt ({
        name:"department",
        type:"input",
        message:"What department would you like to add?"
    })
    .then(function(answer){
        var query = "INSERT INTO department SET ?" 
        connection.query(query, {name: answer.department}, function(err, res){
            if (err) throw err;
            console.log ("Your department has been added.")
            selectAction();
        })
    })
}


function addRoles() {
    inquirer
    .prompt ([
    {
        name:"roles",
        type:"input",
        message:"What roles would you like to add?"
    },

    {
        name:"salary",
        type:"input",
        message:"What is the salary for this role?"
    }
    ])

    
    .then(function(answer){
        var query = "INSERT INTO role SET ?" 
        connection.query(query, {title: answer.roles, salary:answer.salary}, function(err, res){
            if (err) throw err;
            console.log ("Your role has been added.")
            selectAction();
        })
    })
}



function addEmployees() {
    inquirer
    .prompt ([
    {
        name:"firstname",
        type:"input",
        message:"What is the first name of the employee?"
    },

    {
        name:"lastname",
        type:"input",
        message:"What is the last name of the employee?"
    },
    
    ])

    
    .then(function(answer){
        var query = "INSERT INTO employee SET ?" 
        connection.query(query, {firstname: answer.firstname, lastname:answer.lastname}, function(err, res){
            if (err) throw err;
            console.log ("Your employee has been added.")
            selectAction();
        })
    })
}



function viewDepartment(){
    inquirer
    .prompt ([
        {
        name:"view_department",
        type: "input",
        message: " What department would you like to view?"
         }
    ])

    .then(function(answer){
        var query = "SELECT * FROM department" 
        connection.query(query, function(err, res){
            if (err) throw err;
            console.log ("-----Here is your department info---------")
            selectAction();
        })
    })
}
