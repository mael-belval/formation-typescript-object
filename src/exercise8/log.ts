import { Date, Time } from "../exercice5/time.utils";

interface Log {
    addEvent(date: Date, time: Time, messsage: string): void;
    displayLog(logger: Function): void;
};
