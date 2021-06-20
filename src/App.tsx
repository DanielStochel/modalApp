import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import { FormatField } from "./Modal/Components/FormatField";
import { EmailField } from "./Modal/Components/EmailField";
import { ScheduleField } from "./Modal/Components/ScheduleField";
import { ModalButtons } from "./Modal/Components/ModalButtons";
import { ReportField } from "./Modal/Components/ReportField";
import { withDateFns } from "./WithDateFns";
import {
  scheduleOptions,
  ScheduleOptionsHelpers,
} from "./Modal/Model/scheduleOptions.model";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { DateValues, FormValues } from "./Modal/Model/dateValues.model";
import { initialformValuesState } from "./Modal/Modal.state";
import { useBoolean } from "./hooks/useBoolean";
import { OpenModal } from "./Modal/Components/OpenModal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  dialogTitle: {
    backgroundColor: "#ebeae6",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const ModalApp = () => {
  const classes = useStyles();
  const [open, { toggle: toggleModal }] = useBoolean(false);

  const [formValues, setFormValues] = useState<FormValues>(
    initialformValuesState
  );

  const DateField = ScheduleOptionsHelpers.getDateField(formValues.schedule);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formField = event.target.name;

    setFormValues({
      ...formValues,
      [formField]: event.target.value,
    });
  };

  const handleDatePickers = (date: MaterialUiPickersDate): void => {
    setFormValues({
      ...formValues,
      dateFull: date,
    });
  };

  const handleTimePickers = (date: MaterialUiPickersDate): void => {
    setFormValues({
      ...formValues,
      dailyDate: date,
    });
  };

  const onSelectDay = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormValues({
      ...formValues,
      weeklyDate: event.target.value as string,
    });
  };

  const dateValues = useMemo((): DateValues => {
    switch (formValues.schedule) {
      case scheduleOptions.SPECIFIC_DATE:
        return {
          dateFull: formValues.dateFull,
          dailyDate: formValues.dailyDate,
        };
      case scheduleOptions.DAILY:
        return {
          dailyDate: formValues.dailyDate,
        };
      case scheduleOptions.WEEKLY:
        return {
          dailyDate: formValues.dailyDate,
          weeklyDate: formValues.weeklyDate,
        };
      default:
        return formValues;
    }
  }, [formValues]);

  return (
    <div>
      <OpenModal onClick={toggleModal} />
      <Dialog open={open} onClose={toggleModal} fullWidth>
        <DialogTitle className={classes.dialogTitle}>Export Report</DialogTitle>
        <DialogContent>
          <form>
            <Grid alignItems="stretch" direction="column">
              <ReportField onChange={handleChange} />

              <FormatField
                value={formValues.format}
                handleChange={handleChange}
              />

              <EmailField onChange={handleChange} />
              <ScheduleField
                onChange={handleChange}
                value={formValues.schedule}
              />
              <DateField
                onChange={handleDatePickers}
                onSelectTimepicker={handleTimePickers}
                onSelectDay={onSelectDay}
                dateValues={dateValues}
              />
            </Grid>
          </form>
        </DialogContent>
        <ModalButtons toggleModal={toggleModal} />
      </Dialog>
    </div>
  );
};

export const App = withDateFns()(ModalApp);
