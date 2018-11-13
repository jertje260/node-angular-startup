export interface ILogMessage {
    logLevel: LogMessageLevel;
    logMessage: string;
    logArguments: any[];
}

export type LogMessageLevel = 'info'| 'warn' | 'error' | 'debug';
