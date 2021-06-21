import { TimePicker, TimePickerProps } from "@material-ui/pickers";
import { FieldWrapper } from "../Components/FieldWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { DailyDateValues, DateValues } from "../Model/dateValues.model";

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
}));

interface DateDailyFieldProps {
  onSelectTimepicker: TimePickerProps["onChange"];
  dateValues: DateValues;
}

export const DateDailyField = ({
  onSelectTimepicker,
  dateValues,
}: DateDailyFieldProps) => {
  const classes = useStyles();

  return (
    <FieldWrapper>
      <Grid item xs={3}>
        Everyday at
      </Grid>
      <Grid item xs={9}>
        <TimePicker
          showTodayButton
          inputVariant="outlined"
          todayLabel="now"
          ampm={false}
          value={(dateValues as DailyDateValues).dailyDate}
          minutesStep={5}
          className={classes.datePicker}
          onChange={onSelectTimepicker}
          size="small"
        />
      </Grid>
    </FieldWrapper>
  );
};
