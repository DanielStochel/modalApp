import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"

export type SpecificDateValues = {
  dateFull: MaterialUiPickersDate | string;
  dailyDate: MaterialUiPickersDate | string;
}

export type DailyDateValues = {
  dailyDate: MaterialUiPickersDate | string;
}

export type WeeklyDateValues = {
  dailyDate: MaterialUiPickersDate | string;
  weeklyDate: string;
}
  
export type DateValues = SpecificDateValues | DailyDateValues | WeeklyDateValues | {}

export enum WeekDays {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday'
}

export enum DateTypes {
  DAILY_DATE = 'dailyDate',
  DATE_FULL = 'dateFull',
  WEEKLY_DATE = 'weeklyDate'
}