import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
    abstract debug(message: string, ...supportingData: any[]): void;
    abstract warn(message: string, ...supportingData: any[]): void;
    abstract error(message: string, ...supportingData: any[]): void;
    abstract info(message: string, ...supportingData: any[]): void;
    abstract trace(message: string, ...supportingData: any[]): void;
}
