const Express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const Connection = require('./connection/db.js');
const Routes = require('./routes/Routes.js');

const app = Express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) 
app.use(cors());
 // {
 //        origin: ["https://form-dashboard-frontend.vercel.app"],
 //        methods: ["POST", "GET"],
 //        credentials: true
 //    }
const Port = process.env.PORT;
app.use('/',Routes);

Connection();

app.listen(Port,() => {
    console.log(`app is listening on port ${Port}`);
})  
