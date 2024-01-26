const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 5000;
require("dotenv").config();

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bug5j.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });


// ...
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});



app.listen(port, () => {
	console.log(`listening at ${port}`);
});