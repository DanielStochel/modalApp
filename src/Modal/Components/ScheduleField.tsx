import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  RadioGroupProps,
} from "@material-ui/core";
import { FieldWrapper } from "./FieldWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { scheduleOptions } from "../Model/scheduleOptions.model";
import { FieldsMapper } from "../Mapper/fieldsMapper.mapper";
import { useMemo } from "react";
import uniqid from "uniqid";

const useStyles = makeStyles(() => ({
  formControlLabel: {
    marginTop: 10,
    marginLeft: 0,
  },
  formRadio: {
    padding: 0,
  },
  formRadioLabel: {
    marginLeft: 10,
    fontSize: "12px",
  },
}));

interface ScheduleFieldProps {
  onChange: RadioGroupProps["onChange"];
  value: scheduleOptions;
}

export const ScheduleField = ({ onChange, value }: ScheduleFieldProps) => {
  const classes = useStyles();

  const ScheduleFormControlLabels = useMemo(
    () =>
      FieldsMapper.radioFieldsMapper(scheduleOptions, (formatOption) => (
        <FormControlLabel
          key={uniqid()}
          className={classes.formControlLabel}
          value={formatOption}
          control={<Radio size="small" className={classes.formRadio} />}
          label={<span className={classes.formRadioLabel}>{formatOption}</span>}
        />
      )),
    [classes.formRadioLabel, classes.formRadio, classes.formControlLabel]
  );

  return (
    <FieldWrapper>
      <Grid item xs={3}>
        Schedule
      </Grid>
      <Grid item xs={9}>
        <RadioGroup value={value} row onChange={onChange} name="schedule">
          {ScheduleFormControlLabels}
        </RadioGroup>
      </Grid>
    </FieldWrapper>
  );
};
