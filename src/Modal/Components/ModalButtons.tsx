import { DialogActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  dialogFooter: {
    borderTop: "3px solid #ebeae6",
    marginTop: "50px",
  },
}));

interface ModalButtonsProps {
  toggleModal: () => void;
}

export const ModalButtons = ({ toggleModal }: ModalButtonsProps) => {
  const classes = useStyles();
  return (
    <DialogActions className={classes.dialogFooter}>
      <Button onClick={toggleModal} color="primary">
        Cancel
      </Button>
      <Button onClick={toggleModal} color="primary">
        Ok
      </Button>
    </DialogActions>
  );
};
