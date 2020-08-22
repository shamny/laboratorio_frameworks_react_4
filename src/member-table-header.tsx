import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const MemberTableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Avatar</TableCell>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
  );
};
