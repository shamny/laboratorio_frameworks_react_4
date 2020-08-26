import React from "react";
import { TitleList } from "./title-list";
import { MemberTableContainer } from "./member-table-container";
import { MemberEntity } from "./model";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Snackbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { AlertFilterSearch } from "./alert-filter-search";

const useStyles = makeStyles({
  filterGrid: {
    width: 500,
    margin: 16,
  },
});

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("lemoncode");
  const [tempFilter, setTempFilter] = React.useState("lemoncode");
  const [open, setOpen] = React.useState(false);
  const [reason, setReason] = React.useState("");

  const classes = useStyles();

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) =>
        response.ok ? response.json() : handlerAlert(true, 2)
      )
      .then((json) => {
        if (json) setMembers(json);
      });
  }, [filter]);

  const handlerSearch = (tempFilter) =>
    tempFilter.length > 0 ? setFilter(tempFilter) : handlerAlert(true, 1);

  const changeOpenAlert = (open) => setOpen(open);
  const changeReasonAlert = (reason) => {
    switch (reason) {
      case 1:
        setReason("No has escrito ninguna compañía para buscar");
        break;
      case 2:
        setReason("No hay datos de usuarios de la compañía que estás buscando");
        break;
      default:
        setReason("Pero qué razón es esta?...");
        break;
    }
  };

  const handlerAlert = (open, reason) => {
    changeOpenAlert(open);
    changeReasonAlert(reason);
    return false;
  };

  return (
    <>
      <AlertFilterSearch
        reason={reason}
        open={open}
        changeOpen={changeOpenAlert}
        changeReason={changeReasonAlert}
      />
      <Grid container direction="column" justify="center" alignItems="center">
        <TitleList company={filter} />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.filterGrid}
        >
          <TextField
            id="standard-basic"
            label="company"
            defaultValue={filter}
            type="search"
            onChange={(e) => setTempFilter(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
            onClick={(e) => handlerSearch(tempFilter)}
          >
            Search
          </Button>
        </Grid>
        <MemberTableContainer members={members} />
      </Grid>
    </>
  );
};
