const Express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const Routes = require('./routes/Routes.js');

const bodyParser = require('body-parser');

const app = Express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) 
<<<<<<< HEAD

const Username = process.env.MONGO_USER;
const Password = process.env.MONGO_PASSWORD;
=======
app.use(cors(
  {
        origin: ["https://form-dashboard-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
>>>>>>> 745e25a0a34f771e4050bac0f5142420c0b3f728
const Port = process.env.PORT;

const Connection = async () => {

    const DB = `mongodb+srv://${Username}:${Password}@cluster0.lbysu1r.mongodb.net/?retryWrites=true&w=majority`

    mongoose.set('strictQuery', false);
    try {
        const conn = await mongoose.connect(DB, { useNewUrlParser: true })
        console.log('Database is connected successfully');
    } catch (error) {
        console.log(`error while connecting to the database = ${error}`);
    }
}

app.use('/', Routes)


Connection().then(() => {
    app.listen(Port, () => {
        console.log(`app is listening on port ${Port}`);
    })
});
  
