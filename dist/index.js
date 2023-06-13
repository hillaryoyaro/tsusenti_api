import express from "express";
import morgan from "morgan";
//define our logging
var app = express();
app.use(morgan("dev"));
//define our route 
app.get("/", function(req, res) {
    res.json({
        hello: "Hillary"
    });
});
var port = Number(process.env.PORT || 8080);
app.listen(port, "0.0.0.0", function() {
    console.log("Server listening at http://localhost:".concat(port));
});
