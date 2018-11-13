import { TestBed } from '@angular/core/testing';

import { LoggerService } from '@app/core/logger/';
import { AbstractLogPublisherService } from '../abstract/ILogPublisherService';
import { ILogPublisher } from '../interfaces/ILogPublisher';
import { Injectable } from '@angular/core';
import { IPublisherConfiguration } from '../interfaces/IPublisherConfiguration';
import { LogLevel } from '../enums/LogLevel';

@Injectable()
class TestLogPublisherService implements AbstractLogPublisherService {
    publishers: ILogPublisher[] = [];
}

describe('LoggerService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {
                provide: AbstractLogPublisherService,
                useClass: TestLogPublisherService
            },
            LoggerService
        ]
    }));

    it('should be created', () => {
        const service: LoggerService = TestBed.get(LoggerService);
        expect(service).toBeTruthy();
    });

    describe(`Should log with config All`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.All
        };

        it(`and level 'debug' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeTruthy();
        });

        it(`and level 'info' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeTruthy();
        });

        it(`and level 'warn' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeTruthy();
        });

        it(`and level 'error' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeTruthy();
        });
    });

    describe(`Should log with config Debug`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.Debug
        };

        it(`and level 'debug' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeTruthy();
        });

        it(`and level 'info' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeTruthy();
        });

        it(`and level 'warn' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeTruthy();
        });

        it(`and level 'error' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeTruthy();
        });
    });

    describe(`Should log with config Info`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.Info
        };

        it(`and level 'debug' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeFalsy();
        });

        it(`and level 'info' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeTruthy();
        });

        it(`and level 'warn' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeTruthy();
        });

        it(`and level 'error' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeTruthy();
        });
    });

    describe(`Should log with config Warn`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.Warn
        };

        it(`and level 'debug' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeFalsy();
        });

        it(`and level 'info' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeFalsy();
        });

        it(`and level 'warn' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeTruthy();
        });

        it(`and level 'error' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeTruthy();
        });
    });

    describe(`Should log with config Error`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.Error
        };

        it(`and level 'debug' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeFalsy();
        });

        it(`and level 'info' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeFalsy();
        });

        it(`and level 'warn' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeFalsy();
        });

        it(`and level 'error' to be true`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeTruthy();
        });
    });

    describe(`Should log with config Off`, () => {
        const config: IPublisherConfiguration = {
            level: LogLevel.Off
        };

        it(`and level 'debug' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('debug', config)).toBeFalsy();
        });

        it(`and level 'info' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('info', config)).toBeFalsy();
        });

        it(`and level 'warn' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('warn', config)).toBeFalsy();
        });

        it(`and level 'error' to be false`, () => {
            const service: LoggerService = TestBed.get(LoggerService);
            expect(service.shouldSendMessage('error', config)).toBeFalsy();
        });
    });
});
