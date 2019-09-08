var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySQLPassword!",
    database: "products"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

var seeThroughWindow = function () {
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        var displayTable = new Table({
            head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
            colWidths: [20, 20, 20, 20, 20]
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        buyPrompt();
    });
}

function buyPrompt() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter the Item ID of the item you want to purchase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many of this item do you wish to purchase?",
            filter: Number
        },

    ]).then(function (answers) {
        var enteredQuantity = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, enteredQuantity);
    });
};

function purchaseOrder(ID, amount) {
    connection.query('Select * FROM products WHERE item_id = ' + ID, function (err, res) {
        if (err) { console.log(err) };
        if (amount <= res[0].stock_quantity) {
            var totalCost = res[0].price * amount;
            console.log("Vending...");
            console.log("Your total cost for " + amount + " " + res[0].product_name + " is " + totalCost);

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amount + "WHERE item_id = " + ID);
        } else {
            console.log("Sorry, we do not have enough " + res[0].product_name + " in the vending machine. Please try again.");
        };
        seeThroughWindow();
    });
};

seeThroughWindow();