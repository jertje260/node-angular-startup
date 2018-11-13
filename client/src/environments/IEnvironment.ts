export interface IEnvironment {
    production: boolean;
    useHttpLogger: boolean;
    name: string; // defines the conf.${env}.json for the config
}
