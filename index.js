const express = require("express")
const { default: mongoose } = require("mongoose")
const routes = require("./routes");

mongoose.connect("mongodb://shema:password@localhost:27017")
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use("/api", routes);

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    }).catch((err) => {
        console.log(err)
    })
