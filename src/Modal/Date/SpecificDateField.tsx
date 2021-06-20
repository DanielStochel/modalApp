import { Grid } from "@material-ui/core";
import { FieldWrapper } from "../Components/FieldWrapper";
import {
  DatePicker,
  TimePicker,
  DatePickerProps,
  TimePickerProps,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { DateValues, SpecificDateValues } from "../Model/dateValues.model";

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

interface SpecificDateFieldProps {
  onChange: DatePickerProps["onChange"];
  onSelectTimepicker: TimePickerProps["onChange"];
  dateValues: DateValues;
}

export const SpecificDateField = ({
  onChange,
  onSelectTimepicker,
  dateValues,
}: SpecificDateFieldProps) => {
  const classes = useStyles();

  return (
    <FieldWrapper>
      <Grid xs={3}>Date</Grid>
      <Grid xs={9}>
        <div className={classes.dateWrapper}>
          <DatePicker
            inputVariant="outlined"
            value={(dateValues as SpecificDateValues).dateFull}
            onChange={onChange}
            format="dd/MM/yyyy"
            className={classes.datePicker}
            size="small"
          />
          <p className={classes.timeConnector}>at</p>

          <TimePicker
            showTodayButton
            inputVariant="outlined"
            todayLabel="now"
            ampm={false}
            value={(dateValues as SpecificDateValues).dailyDate}
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
