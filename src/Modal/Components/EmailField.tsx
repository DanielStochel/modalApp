import { Grid, TextField, TextFieldProps } from "@material-ui/core";
import { FieldWrapper } from "./FieldWrapper";
import { fieldsAttributes } from "../Model/fieldsAttributes.model";

interface EmailFieldProps {
  onChange: TextFieldProps["onChange"];
}

export const EmailField = ({ ...props }: EmailFieldProps) => {
  return (
    <FieldWrapper>
      <Grid item xs={3}>
        Email to
      </Grid>
      <Grid item xs={9}>
        <TextField
          label="client@company.com"
          fullWidth
          required
          name={fieldsAttributes.EMAIL}
          {...props}
        />
      </Grid>
    </FieldWrapper>
  );
};
