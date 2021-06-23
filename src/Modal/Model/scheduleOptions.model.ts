import { EmptyComponent } from "../Components/EmptyComponent";
import { DateDailyField } from "../Date/DateDailyField";
import { DateWeeklyField } from "../Date/DateWeeklyField";
import { SpecificDateField } from "../Date/SpecificDateField";

export enum scheduleOptions {
  NO_REPEAT = "No repeat",
  SPECIFIC_DATE = "Speficic Date",
  DAILY = "Daily",
  WEEKLY = "Weekly",
}

export class ScheduleOptionsHelpers {
  static getDateField = (schedule: scheduleOptions) => {
    switch (schedule) {
      case scheduleOptions.NO_REPEAT:
        return EmptyComponent;
      case scheduleOptions.SPECIFIC_DATE:
        return SpecificDateField;
      case scheduleOptions.DAILY:
        return DateDailyField;
      case scheduleOptions.WEEKLY:
        return DateWeeklyField;
    }
  };
}  
