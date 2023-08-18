import { Date } from "./time.utils";

export class SingleDayEvent {
    private _date: Date;
    private _subject: string;

    constructor(date: Date, subject: string) {
        this._date = date;
        this._subject = subject;
    }

    get date(): Date { return this._date; }
    get subject(): string { return this._subject; }
    print(logger : Function = console.log) {
        logger(`Subject: ${this._subject}`);
        this._date.print(logger);
    }
}