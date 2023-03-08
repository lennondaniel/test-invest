import express, {Request, Response} from "express";
import HttpServer from "./http-server";

export default class ExpressAdapter implements HttpServer {
    app: any;

    constructor () {
        this.app = express();
        this.app.use(express.json());
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](`/api${url}`, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body);
            res.status(output.status).json(output.response);
        });
    }

    listen(port: number): void {
        this.app.listen(port);
    }
}
