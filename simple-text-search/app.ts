import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { SearchRoutes } from './routes/searchRoutes';

class App {
    public app: express.Application;
    public searchRoutes: SearchRoutes = new SearchRoutes();
    public mongoUrl: string = 'mongodb+srv://ahmadateya:123@clustertravolic-dkvhe.mongodb.net/travolic_task?retryWrites=true&w=majority';

    constructor() {
        this.app = express();
        this.configureApp();
        this.initializeMongoConnection();
        // Wire the Route to the app
        this.searchRoutes.routes(this.app);
    }

    private configureApp(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initializeMongoConnection(): void {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => {
            console.log(`connection to database established`)
        }).catch(err=>{
            console.log(`connection error ${err.message}`);
            // process.exit(-1)
        });
    }
}

export default new App().app;
