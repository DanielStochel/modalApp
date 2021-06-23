import { DialogActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  dialogFooter: {
    borderTop: "3px solid #ebeae6",
    marginTop: "50px",
  },
  submitButton: {
    backgroundColor: "#212121",
  },
}));

interface ModalButtonsProps {
  toggleModal: () => void;
}

export const ModalButtons = ({ toggleModal }: ModalButtonsProps) => {
  const classes = useStyles();
  return (
    <DialogActions className={classes.dialogFooter}>
      <Button variant="outlined" color="default" onClick={toggleModal}>
        Cancel
      </Button>
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Ok
      </Button>
    </DialogActions>
  );
};
