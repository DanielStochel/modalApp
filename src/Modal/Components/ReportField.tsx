import { Grid, TextField, TextFieldProps } from "@material-ui/core";
import { FieldWrapper } from "./FieldWrapper";
import { fieldsAttributes } from "../Model/fieldsAttributes.model";

interface ReportFieldProps {
  onChange: TextFieldProps["onChange"];
}

export const ReportField = ({ ...props }: ReportFieldProps) => {
  return (
    <FieldWrapper>
      <Grid item xs={3}>
        Report name
      </Grid>
      <Grid item xs={9}>
        <TextField
          label="Shareablee Report"
          fullWidth
          name={fieldsAttributes.REPORT_NAME}
          {...props}
        />
      </Grid>
    </FieldWrapper>
  );
};
