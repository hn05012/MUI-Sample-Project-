import React, { FC, ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface tableData {
  contactName: string;
  quotationId: string;
  total: number;
  status: string;
  date: string;
}

const rowData: tableData[] = [
  {
    contactName: "Hasan",
    quotationId: "12345",
    total: 1000,
    status: "approved",
    date: "2020",
  },
  {
    contactName: "Avinash",
    quotationId: "12346",
    total: 2000,
    status: "approved",
    date: "2020",
  },
  {
    contactName: "Akarsh",
    quotationId: "12246",
    total: 2050,
    status: "closed",
    date: "2020",
  },
  {
    contactName: "Uzair",
    quotationId: "12256",
    total: 2250,
    status: "approved",
    date: "2020",
  },
];

export const UserTable: FC = (): ReactElement => {
  return (
    <div
      style={{
        margin: 20,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: "black",
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Contact</TableCell>
              <TableCell> Quotation ID</TableCell>
              <TableCell> Total</TableCell>
              <TableCell> Status</TableCell>
              <TableCell> Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <TableRow
                key={row.quotationId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.contactName}
                </TableCell>
                <TableCell>{row.quotationId}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
