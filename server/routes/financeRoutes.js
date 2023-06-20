
const FinanceController = require("../controllers/financeController");  

module.exports = (app) => {
    //Get ALL Posts
    // app.get("/api", FinanceController.index)

    //CREATE Post
    app.post("/api/expense", FinanceController.createExpense)
    
    //READ post
    // app.get("/posts/:id", PostController.getOnePost)
    
    //UPDATE post
    // app.put("/posts/:id", PostController.updatePost)
    
    //DELETE post
    // app.delete("/delete/:id", PostController.deletePost)
}