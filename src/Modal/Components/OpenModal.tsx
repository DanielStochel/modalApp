import { Button, ButtonProps } from "@material-ui/core";

export const OpenModal = ({ ...props }: ButtonProps) => {
  return (
    <Button variant="contained" {...props}>
      Open form modal
    </Button>
  );
};
