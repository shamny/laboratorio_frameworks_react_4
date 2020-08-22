import React from "react";
import { TitleList } from "./title-list";
import { MemberTableContainer } from "./member-table-container";
import { MemberEntity } from "./model";

import { useDebounce } from "use-debounce";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  filterText: {
    width: 500,
  },
});

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(filter, 1000);
  const classes = useStyles();

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => (response.ok ? response.json() : false))
      .then((json) => {
        if (json) setMembers(json);
      });
  }, [debouncedFilter]);

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <TitleList company={filter} />
        <TextField
          id="standard-basic"
          label="company"
          defaultValue={filter}
          type="search"
          className={classes.filterText}
          onChange={(e) => setFilter(e.target.value)}
        />
        <MemberTableContainer members={members} />
      </Grid>
    </>
  );
};
