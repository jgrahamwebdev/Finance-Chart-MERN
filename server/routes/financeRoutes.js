
const FinanceController = require("../controllers/financeController");  

module.exports = (app) => {
    // Get ALL Expenses
    app.get("/api/expenses", FinanceController.findAllExpenses)

    //CREATE Expense
    app.post("/api/expense", FinanceController.createExpense)
    
    //READ post
    // app.get("/posts/:id", PostController.getOnePost)
    
    //UPDATE post
    // app.put("/posts/:id", PostController.updatePost)
    
    //DELETE post
    // app.delete("/delete/:id", PostController.deletePost)
}