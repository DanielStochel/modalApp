import { SnackbarProvider } from "notistack";
import { ComponentType } from "react";

export const withSnackbar =
  <ComponentProps extends {}>() =>
  (Component: ComponentType<ComponentProps>) =>
  (props: ComponentProps) => {
    return (
      <SnackbarProvider maxSnack={3}>
        <Component {...props} />
      </SnackbarProvider>
    );
  };
