import { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, DialogTitle, Grid } from "@material-ui/core";
import { FormatField } from "../Modal/Components/FormatField";
import { EmailField } from "../Modal/Components/EmailField";
import { ScheduleField } from "../Modal/Components/ScheduleField";
import { ModalButtons } from "../Modal/Components/ModalButtons";
import { ReportField } from "../Modal/Components/ReportField";
import { withDateFns } from "./WithDateFns";
import {
  scheduleOptions,
  ScheduleOptionsHelpers,
} from "../Modal/Model/scheduleOptions.model";
import { DateTypes, DateValues } from "../Modal/Model/dateValues.model";
import { useBoolean } from "../hooks/useBoolean";
import { OpenModal } from "../Modal/Components/OpenModal";
import { useHandleChange } from "../hooks/useHandleChange";
import { compose } from "recompose";
import { withSnackbar } from "./withSnackbar";
import { useSnackbar } from "notistack";
import { FormValues } from "../Modal/Modal.state";

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
  const { enqueueSnackbar } = useSnackbar();

  const {
    formValues,
    handleChange,
    handleDatePickers,
    handleTimePickers,
    handleSelectDay,
  } = useHandleChange();

  const DateField = ScheduleOptionsHelpers.getDateField(formValues.schedule);

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
        return {};
    }
  }, [formValues]);

  const stateWithoutDates = useMemo(() => {
    return Object.keys(formValues).reduce((object, key) => {
      switch (key) {
        case DateTypes.DAILY_DATE:
          return object;
        case DateTypes.DATE_FULL:
          return object;
        case DateTypes.WEEKLY_DATE:
          return object;
        default:
          return { ...object, [key]: formValues[key as keyof FormValues] };
      }
    }, {});
  }, [formValues]);

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await fetch("https://postman-echo.com/post", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          ...stateWithoutDates,
          ...dateValues,
        }),
      });

      enqueueSnackbar("This is a success message!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }

    toggleModal();
  };

  return (
    <div>
      <OpenModal onClick={toggleModal} />
      <Dialog open={open} onClose={toggleModal} fullWidth>
        <DialogTitle className={classes.dialogTitle}>Export Report</DialogTitle>
        <DialogContent>
          <form onSubmit={onFormSubmit}>
            <Grid container alignItems="stretch" direction="column">
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
                onSelectDay={handleSelectDay}
                dateValues={dateValues}
              />
            </Grid>
            <ModalButtons toggleModal={toggleModal} />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const App = compose(withDateFns(), withSnackbar())(ModalApp);
