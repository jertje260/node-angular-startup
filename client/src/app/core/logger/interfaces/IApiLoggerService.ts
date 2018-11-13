import { ILogMessage } from './ILogMessage';

export interface IApiLoggerService {
    sendLogMessage(logMessage: ILogMessage): Promise<void>;
}
