import { Grid } from "@material-ui/core";
import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fieldWrapper: {
    display: "flex",
    flexDirecton: "row",
    alignItems: "flex-end",
    height: 50,
  },
}));

interface FieldWrapperProps {
  children: JSX.Element[];
}

export const FieldWrapper: FC<any> = ({ children }: FieldWrapperProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.fieldWrapper}>
      {children}
    </Grid>
  );
};
