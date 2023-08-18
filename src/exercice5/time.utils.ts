export class TimeException {
    private _message: string;

    constructor(message: string) {
        this._message = message;
    }
    get message(): string { return this._message; }
}

export class Date {
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(day: number = 1, month:number=1, year:number=0) {
        this.setDate(day,month,year);
    }

    private clone() : Date {
        return new Date(this._day, this._month, this._year);
    }
    get day() :number { return this._day; }
    get month() :number { return this._month; }
    get year() :number { return this._year; }
    setDate(day:number, month: number, year: number): void {
        if (year>=0&&year<=3000)
            this._year=year;
        else
            throw new TimeException("error: invalid year");
        if (month>=1&&month<=12)
            this._month=month;
        else
            throw new TimeException("error: invalide month");
        switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day>=1 && day<=31)
                this._day=day;
            else
                throw new TimeException("error: invalid day");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day>=1 && day<=30)
                this._day=day;
            else
                throw new TimeException("error: invalid day");
            break;
        case 2:
            if (day>=1 && (day<=29 || (day==30 && year%4==0)))
                this._day=day;
            else
                throw new TimeException("error: invalid day");
            break;
        }
    };
    print(logger: Function = console.log) : void {
        logger(this._day+"/"+this._month+"/"+this._year);
    }
    isEqual(date: Date) : boolean {
        if (this._year<date._year) return false;
        if (this._year>date._year) return false;
        if (this._month<date._month) return false;
        if (this._month>date._month) return false;
        if (this._day<date._day) return false;
        if (this._day>date._day) return false;
        return true;
    }
    isLess(date: Date) : boolean {
        if (this._year<date._year) return true;
        if (this._year>date._year) return false;
        if (this._month<date._month) return true;
        if (this._month>date._month) return false;
        if (this._day<date._day) return true;
        if (this._day>date._day) return false;
        return false;
    }
    subtract(date: Date) : number {
        let daysDifference : number=(this._year-date._year)*365+(this._year-date._year)/4;
        daysDifference+=Math.round((this._month-date._month)*30.5);
        daysDifference+=this._day-date._day;
        return daysDifference;
    }
    tomorrow() : Date {
        const tomorrowDate: Date = this.clone();
        tomorrowDate._day+=1;
        switch(tomorrowDate._month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (tomorrowDate._day==30) { tomorrowDate._day=1; tomorrowDate._month++; } break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (tomorrowDate._day==31) { tomorrowDate._day=1; tomorrowDate._month++; } break;
        case 2:
            if (tomorrowDate._day==29 && tomorrowDate._year%4>0) { tomorrowDate._day=1; tomorrowDate._month++; }
            if (tomorrowDate._day==30) { tomorrowDate._day=1; tomorrowDate._month++; }
            break;
        }
        if (tomorrowDate._month==13){ tomorrowDate._year++; tomorrowDate._month=1; }
        return tomorrowDate;
    }
    add(numberOfDays: number) : Date {
        let newDate: Date= this.clone();
        while(numberOfDays>0) { newDate=newDate.tomorrow(); numberOfDays--; }
        return newDate;
    }
};

export class Duration{
    private numberOfMinutes: number;

    constructor(hours : number = 0, minutes : number = 0) {
        this.numberOfMinutes = hours*60+minutes;
        if (minutes>59) throw new TimeException("error: initialization duration invalid");
    }
    
    setDuration(heures: number, minutes: number): void {
        if (minutes>59) throw new TimeException("error: initialization duration invalid");
        this.numberOfMinutes=heures*60+minutes;
    }
    get durationInMinutes(): number {
        return this.numberOfMinutes;
    }
    get durationInHours(): number { return this.numberOfMinutes/60; }

    print(logger: Function = console.log) :void {
        logger(this.numberOfMinutes/60+"H"+this.numberOfMinutes%60);
    }
};

export class Time{
    private _hour:number;
    private _minute:number;
    constructor(hour: number, minute: number) {
        this._hour = hour;
        this._minute = minute;
        if (hour>23||minute>59) throw new TimeException("error: initialization time invalid");
    }
    setTime(hour:number, minute:number):void {
        if (hour>23||minute>59) throw new TimeException("error: initialization time invalid");
        this._hour=hour;
        this._minute=minute;
    }
    print(logger : Function = console.log) :void {
        logger(this._hour+"H"+this._minute);
    }
    get hour() :number { return this._hour; }
    get minute() :number { return this._minute; }
    isLess(time: Time) :boolean {
        if (this._hour<time._hour) return true;
        if (this._hour>time._hour) return false;
        if (this._minute<time._minute) return true;
        if (this._minute>time._minute) return false;
        return false;
    }
};

export class Period{
    private numberOfDays: number;
    private numberOfMonths: number;
    private numberOfYears: number;
    constructor(days: number, months: number, years: number) {
        if (days>364) throw new TimeException("error: initialization period invalid");
	    if (months>11) throw new TimeException("error: initialization period invalid");
        this.numberOfDays = days;
        this.numberOfMonths = months;
        this.numberOfYears = years;
    }
    print(logger: Function = console.log) :void {
        logger(this.numberOfDays+" jours, "+this.numberOfMonths+" mois, "+this.numberOfYears+" ans");
    }
};

export class Interval{
    private _begin: Date;
    private _end: Date;
    constructor(begin: Date, end: Date){
        if (end<begin) throw new TimeException("Error during creation of an interval: end<begin");
        this._begin = begin;
        this._end = end;
    }
    print(logger : Function = console.log) :void {
        logger("["+this._begin+" - "+this._end+"]");
    }
    get begin() :Date { return this._begin; }
    get end() :Date { return this._end; }
    get duration() :number { return this._end.subtract(this._begin); } 
    isOverlappingWith(interval: Interval) : boolean {
        if (this._begin<interval._begin){
            return !(this._end<interval._begin);
        }
        if (interval._end<this._end){
            return !(interval._end<this._begin);
        }
        return true;
    }
    add (interval: Interval) : Interval {
        const d:Date=this._end.tomorrow();
        if (d.isEqual(interval._begin)){
            return new Interval(this._begin,interval._end);
        }else throw new TimeException("Can't unionized the 2 intervals (they don't touch each other...");
    }
};
