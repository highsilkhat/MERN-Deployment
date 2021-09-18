const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pirate_exam", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Tank, I'm in!"))
    .catch(err=>console.log("Mr. Anderson...", err))