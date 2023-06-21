
const Finance = require("../models/financeModel.js"); 

// FIND ALL expenses
module.exports.findAllExpenses = (req, res) => {
    Finance.find()
      .sort({ _id: -1 })
      .then((allExpenses) => {
        res.status(200).json(allExpenses);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  };

 // CREATE new expense
module.exports.createExpense = (req, res) => {   
    Finance.create(req.body)
        .then((newExpense) => {
            res.json(newExpense)
        })
        .catch((err) => {
            console.log(err)
        });
}