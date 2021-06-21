import { ComponentType } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export const withDateFns =
  <ComponentProps extends {}>() =>
  (Component: ComponentType<ComponentProps>) =>
  (props: ComponentProps) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Component {...props} />
      </MuiPickersUtilsProvider>
    );
  };
