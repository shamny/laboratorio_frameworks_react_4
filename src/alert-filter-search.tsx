import React, { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

interface AlertFilterSearchProps {
  open: boolean;
  reason: string;
  changeOpen: (open: boolean) => void;
  changeReason: (reason: number) => void;
}

export const AlertFilterSearch: React.FC<AlertFilterSearchProps> = (
  props: AlertFilterSearchProps
) => {
  const { changeOpen, reason, open } = props;

  const handleClose = () => changeOpen(false);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {reason}
      </Alert>
    </Snackbar>
  );
};
