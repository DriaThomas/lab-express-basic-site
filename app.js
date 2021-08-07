const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));



app.get("/", (request, response) => {
    console.log(request.url, request.method, __dirname); // C:\Users\I\Desktop\code\PTWD-Jun\module2\express-intro
    response.sendFile(__dirname + "/views/home-page.html");
    response.sendFile(`${__dirname}/views/about.html`);
    response.sendFile(`${__dirname}/views/works.html`);
});



// app.get("/about", (req, res) => {
//     res.render(`${__dirname}/views/about.html`);
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));