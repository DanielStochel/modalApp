import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { useState } from "react";
import { initialformValuesState } from "../Modal/Modal.state";
import { FormValues } from "../Modal/Model/dateValues.model";

export const useHandleChange = () => {
  const [formValues, setFormValues] = useState<FormValues>(
    initialformValuesState
  );

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

  const handleSelectDay = (
    event: React.ChangeEvent<{ name?: string, value: unknown }>
  ): void => {
    setFormValues({
      ...formValues,
      weeklyDate: event.target.value as string,
    });
  };


  return {
    formValues,
    handleChange,
    handleDatePickers,
    handleTimePickers,
    handleSelectDay
  }
}