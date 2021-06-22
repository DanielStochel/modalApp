import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "../App/App";
import { ModalSelectors } from "../__TestData__/selectors/modal.selector";
import { ModalActions } from "../__TestData__/actions/modal.actions";

describe('Modal form', () => {
  const selectors = new ModalSelectors();
  const actions = new ModalActions(selectors);
  it('should not show date fields if no repeat is checked', () => {
    render(<App />);
    actions.markNoRepeatRadio();

    expect(selectors.getDateField()).not.toBeInTheDocument();
  })
  
  it('should show date picker input and time picker input if radio specific date is checked', () => {
    render(<App />);
    actions.markSpecificDateRadio();

    expect(selectors.getDateField()).toBeInTheDocument();
    expect(selectors.getSpecificDatePickerInput()).toBeInTheDocument();
    expect(selectors.getSpecificTimePickerInput()).toBeInTheDocument();
  })

  it('should show daily time picker if radio daily is checked', () => {
    render(<App />);
    actions.markDailyDateRadio();

    expect(selectors.getDateField()).toBeInTheDocument();
    expect(selectors.getDailyTimePicker()).toBeInTheDocument();
  })

  it('should show select day and time picker if weekly radio is checked', () => {
    render(<App />);
    actions.markWeeklyDateRadio();

    expect(selectors.getDateField()).toBeInTheDocument();
    expect(selectors.getSelectDayPicker()).toBeInTheDocument();
    expect(selectors.getWeeklyTimePicker()).toBeInTheDocument();
  })
})
