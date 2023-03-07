import { Request } from 'express';
import Scaffold from 'scaffold-generator';
import mustache from 'mustache';


export class Quarkus {
    private body;
    private appName: string;
    private appPackage: string[];
    private version: string;

    constructor(req: Request) {
        this.body = req.body.data;
        this.appPackage = (this.body.package).split(".");
        this.appName = this.body.swagger.info.title;
        this.version = `v${(this.body.swagger.info.version).split(".")[0]}`;
    }

    public makeQuarkusProject() {
        return new Promise((resolve, reject) => {
            new Scaffold({
                data: {
                    appName: this.appName,
                    lowerCaseAppName: this.appName.toLowerCase(),
                    version: this.version,
                    package_1: this.appPackage[0],
                    package_2: this.appPackage[1],
                    package_3: this.appPackage[2],
                },
                render: mustache.render
            }).copy('./templates/quarkus', `./outputs`)
                .then((res) => resolve(res))
                .catch((err: Error) => reject(err));
        });
    }
}