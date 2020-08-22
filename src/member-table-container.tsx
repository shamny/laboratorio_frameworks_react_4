import React from "react";
import { MemberEntity } from "./model";
import { MemberTableRow } from "./member-table-row";
import { MemberTableHeader } from "./member-table-header";
import { MemberTableFooter } from "./member-table-footer";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

interface Props {
  members: MemberEntity[];
}

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 500,
  },
});

export const MemberTableContainer: React.FC<Props> = (props) => {
  const { members } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const changePage = (page) => {
    setPage(page);
  };

  const changeRows = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table size="small" aria-label="simple table">
        <MemberTableHeader />
        <TableBody>
          {(rowsPerPage > 0
            ? members.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : members
          ).map((member) => (
            <MemberTableRow key={member.id} member={member} />
          ))}
        </TableBody>
        <MemberTableFooter
          lengthRows={members.length}
          page={page}
          rowsPerPage={rowsPerPage}
          changePage={changePage}
          changeRows={changeRows}
        />
      </Table>
    </TableContainer>
  );
};
