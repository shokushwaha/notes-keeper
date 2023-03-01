const express = require("express");

require("./db/mongoose.js");

const noteRouter = require("./routers/note-routers.js");
const userRouter = require("./routers/user-routers.js");

const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.use(noteRouter);
app.use(userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});