
const mongoose = require("mongoose");

const dbName = "financeAppDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName}`))
.catch((err)=>console.log(err));