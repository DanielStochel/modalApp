import { Grid, MenuItem, SelectProps, Select } from "@material-ui/core";
import { TimePicker, TimePickerProps } from "@material-ui/pickers";
import { FieldWrapper } from "../Components/FieldWrapper";
import { makeStyles } from "@material-ui/core/styles";
import {
  DateValues,
  WeekDays,
  WeeklyDateValues,
} from "../Model/dateValues.model";

const useStyles = makeStyles(() => ({
  datePicker: {
    width: "130px",
  },
  timeConnector: {
    margin: "0px 15px 0px 15px",
  },
  dateWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formControl: {
    minWidth: "130px",
    height: "40px",
  },
}));

interface DateWeeklyFieldProps {
  onSelectTimepicker: TimePickerProps["onChange"];
  onSelectDay: SelectProps["onChange"];
  dateValues: DateValues;
}

export const DateWeeklyField = ({
  onSelectTimepicker,
  onSelectDay,
  dateValues,
}: DateWeeklyFieldProps) => {
  const classes = useStyles();

  return (
    <FieldWrapper>
      <Grid xs={3}>Every</Grid>
      <Grid xs={9}>
        <div className={classes.dateWrapper}>
          <Select
            value={(dateValues as WeeklyDateValues).weeklyDate}
            displayEmpty
            defaultValue={(dateValues as WeeklyDateValues).weeklyDate}
            className={classes.formControl}
            onChange={onSelectDay}
            variant="outlined"
          >
            {Object.values(WeekDays).map((day) => (
              <MenuItem value={day}>{day}</MenuItem>
            ))}
          </Select>
          <p className={classes.timeConnector}>at</p>

          <TimePicker
            showTodayButton
            inputVariant="outlined"
            todayLabel="now"
            ampm={false}
            value={(dateValues as WeeklyDateValues).dailyDate}
            minutesStep={5}
            className={classes.datePicker}
            onChange={onSelectTimepicker}
            size="small"
          />
        </div>
      </Grid>
    </FieldWrapper>
  );
};
