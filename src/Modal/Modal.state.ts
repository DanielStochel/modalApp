import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { formatFields } from "./Model/formatFields.model";
import { scheduleOptions } from "./Model/scheduleOptions.model";

export const initialformValuesState = {
  reportName: "",
  email: "",
  schedule: scheduleOptions.NO_REPEAT,
  format: formatFields.EXCEL,
  dateFull: new Date(),
  dailyDate: new Date(),
  weeklyDate: "Monday",
}

export type FormValues = {
  reportName: string;
  email: string;
  schedule: scheduleOptions;
  format: formatFields;
  dateFull: MaterialUiPickersDate | string;
  dailyDate: MaterialUiPickersDate | string;
  weeklyDate: string;
};