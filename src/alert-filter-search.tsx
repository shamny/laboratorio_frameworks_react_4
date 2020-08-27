import React, { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

interface AlertFilterSearchProps {
  open: boolean;
  reason: number;
  changeOpen: (open: boolean) => void;
  changeReason: (reason: number) => void;
}

export const AlertFilterSearch: React.FC<AlertFilterSearchProps> = (
  props: AlertFilterSearchProps
) => {
  const { changeOpen, reason, open } = props;

  const handleClose = () => changeOpen(false);
  let miTexto = "";

  switch (reason) {
    case 1:
      miTexto = "No has escrito ninguna compañía. Escribe algo y pulsa buscar";
      break;
    case 2:
      miTexto = "No hay datos de usuarios de la compañía que estás buscando";
      break;
    default:
      miTexto = "Pero qué razón es esta?...";
      break;
  }

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>{miTexto}</strong>
      </Alert>
    </Snackbar>
  );
};
