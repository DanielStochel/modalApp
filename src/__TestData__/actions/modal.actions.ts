import { ModalSelectors } from "../selectors/modal.selector";
import { fireEvent } from "@testing-library/react";

export class ModalActions {
  constructor(private selectors: ModalSelectors) { }

  private openModal() {
    fireEvent.click(this.selectors.getModalButton())
  }

  markNoRepeatRadio() {
    this.openModal();
    fireEvent.click(this.selectors.getNoRepeatRadio());
  }

  markSpecificDateRadio() {
    this.openModal();
    fireEvent.click(this.selectors.getSpecificDateRadio());
  }

  markDailyDateRadio() {
    this.openModal();
    fireEvent.click(this.selectors.getDailyDateRadio());
  }

  markWeeklyDateRadio() {
    this.openModal();
    fireEvent.click(this.selectors.getWeeklyDateRadio());
  }
}