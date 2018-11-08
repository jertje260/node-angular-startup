export interface ILogMessage {
    logLevel: 'info'| 'warn' | 'error' | 'debug' | 'trace';
    logMessage: string;
    logArguments: any[];
}
