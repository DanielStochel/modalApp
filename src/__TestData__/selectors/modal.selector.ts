import { screen } from "@testing-library/react";
import { testData } from "../test-data/modal.data";

export class ModalSelectors {
  getModalButton() {
    return screen.getByText(testData.MODAL)
  }

  getDateField() {
    return screen.queryByTestId(testData.DATE_FIELD)
  }

  getNoRepeatRadio() {
    return screen.getByTestId(testData.NO_REPEAT);
  }

  getSpecificDateRadio() {
    return screen.getByTestId(testData.SPECIFIC_DATE);
  }

  getDailyDateRadio() {
    return screen.getByTestId(testData.DAILY)
  }

  getWeeklyDateRadio() {
    return screen.getByTestId(testData.WEEKLY)
  }

  getSpecificDatePickerInput() {
    return screen.getByTestId(testData.SPECIFIC_DATE_PICKER)
  }

  getSpecificTimePickerInput() {
    return screen.getByTestId(testData.SPECIFIC_TIME_PICKER)
  }

  getDailyTimePicker() {
    return screen.getByTestId(testData.DAILY_TIME_PICKER)
  }

  getSelectDayPicker() {
    return screen.getByTestId(testData.SELECT_DAY)
  }

  getWeeklyTimePicker() {
    return screen.getByTestId(testData.WEEKLY_TIME_PICKER);
  }
}