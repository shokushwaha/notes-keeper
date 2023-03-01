const mongoose = require("mongoose");

const dbconnecturl = `mongodb+srv://shobhit:kushwaha@cluster0.4p38fce.mongodb.net/notes-mern?retryWrites=true&w=majority`;

mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongo is connected");
});