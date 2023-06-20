
const Finance = require("../models/financeModel.js"); 

// module.exports.index = (req, res) => {
//     res.json({
//         message: "This is working!"
//     });
// }

module.exports = {

    // NEW expense
    createExpense: (req, res) => {
        Finance.create(req.body)
            .then((newExpense) => res.json(newExpense))
            .catch((err) => console.log(err));
    },
}