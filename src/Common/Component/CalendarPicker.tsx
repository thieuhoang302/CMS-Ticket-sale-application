import { Button } from '@material-ui/core';
// import the calendarcomponent
import {  Calendar, CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import moment from "moment";
import * as React from "react";
import '../Style/css/calenderPicker.scss';

export default class CalendarPicker extends React.Component<{}, {}> {

private calendarInstance: Calendar;

constructor(props: any) {
    super(props);
    this.onchange = this.onchange.bind(this);
    this.onweekChange = this.onweekChange.bind(this);
    this.onworkweekChange = this.onworkweekChange.bind(this);
}
public onchange(args: ChangedEventArgs){
    const startOfWeek: any = moment(args.value).startOf('week');
    const endOfWeek: any = moment(args.value).endOf('week');
    if (this.calendarInstance.element.classList.contains('workweek')) {
        this.getWeekArray(startOfWeek.day(1) , endOfWeek.day(5)) ;
    } else if (this.calendarInstance.element.classList.contains("week")) {
        this.getWeekArray(startOfWeek, endOfWeek);
    }
}

public onworkweekChange(): void {
     if (this.calendarInstance.element.classList.contains('week')) {
        this.calendarInstance.element.classList.remove('week')
    }
    this.calendarInstance.element.classList.add('workweek');
}

public onweekChange(): void{
     if (this.calendarInstance.element.classList.contains('workweek')) {
         this.calendarInstance.element.classList.remove('workweek')
    }
    this.calendarInstance.element.classList.add('week');
}

public getWeekArray(startOfWeek: any ,endOfWeek: any) {
    const days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
   this.calendarInstance.values = days;
   }

    public render() {
        return (
    <div>
        <div className="wrap">
         <CalendarComponent id="calendar" isMultiSelection={true}  change={this.onchange} ref={(element) => {(this.calendarInstance as Calendar | null) = element }} />
        </div>
        <div id="btncontainer" className="e-btn-group e-vertical">
            <Button onClick={this.onweekChange} id="week" className="e-btn"> Week </Button>
            <Button onClick={this.onworkweekChange} id="workweek" className="e-btn"> Work Week </Button>
    </div>
  </div>
  );
}
}
