import { FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core";
import React, { useMemo } from "react";
import { FieldWrapper } from "./FieldWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { formatFields, formatFieldsHelpers } from "../Model/formatFields.model";
import { FieldsMapper } from "../Mapper/fieldsMapper.mapper";
import { fieldsAttributes } from "../Model/fieldsAttributes.model";
import uniqid from "uniqid";

const useStyles = makeStyles(() => ({
  formControlLabel: {
    marginTop: 10,
    marginLeft: 0,
  },
  formRadio: {
    padding: 0,
  },
  formRadioLabel: {
    marginLeft: 10,
    fontSize: "12px",
  },
}));

interface FormatFieldProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormatField = ({ value, handleChange }: FormatFieldProps) => {
  const classes = useStyles();

  const FormControlLabels = useMemo(
    () =>
      FieldsMapper.radioFieldsMapper(formatFields, (formatOption) => (
        <FormControlLabel
          key={uniqid()}
          className={classes.formControlLabel}
          value={formatOption}
          control={<Radio size="small" className={classes.formRadio} />}
          label={<span className={classes.formRadioLabel}>{formatOption}</span>}
        />
      )),
    [classes.formRadioLabel, classes.formControlLabel, classes.formRadio]
  );

  return (
    <FieldWrapper>
      <Grid item xs={3}>
        {formatFieldsHelpers.FORMAT_FIELD}
      </Grid>
      <Grid item xs={9}>
        <RadioGroup
          value={value}
          onChange={handleChange}
          row
          name={fieldsAttributes.FORMAT}
        >
          {FormControlLabels}
        </RadioGroup>
      </Grid>
    </FieldWrapper>
  );
};
