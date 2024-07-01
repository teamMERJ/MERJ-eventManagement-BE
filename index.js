import express from "express";


const eventApp = express();




// listening to the server
const port = process.env.PORT || 3000;
eventApp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});