import { Grid, TextField, TextFieldProps } from "@material-ui/core";
import { FieldWrapper } from "./FieldWrapper";
import { fieldsAttributes } from "../Model/fieldsAttributes.model";

interface EmailFieldProps {
  onChange: TextFieldProps["onChange"];
}

export const EmailField = ({ ...props }: EmailFieldProps) => {
  return (
    <FieldWrapper>
      <Grid xs={3}>Email to</Grid>
      <Grid xs={9}>
        <TextField
          label="client@company.com"
          fullWidth
          name={fieldsAttributes.EMAIL}
          {...props}
        />
      </Grid>
    </FieldWrapper>
  );
};
