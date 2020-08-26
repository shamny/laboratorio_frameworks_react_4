import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { TablePaginationActions } from "./table-pagination-actions";

interface Props {
  lengthRows: number;
  page: number;
  rowsPerPage: number;
  changePage: (page) => void;
  changeRows: (rows) => void;
}

export const MemberTableFooter: React.FC<Props> = (props) => {
  const { lengthRows, page, rowsPerPage, changePage, changeRows } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    changePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeRows(parseInt(event.target.value, 10));
    changePage(0);
  };
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
          colSpan={3}
          count={lengthRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};
