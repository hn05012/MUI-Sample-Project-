import React, { FC, ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";

interface tableData {
  contactName: string;
  quotationId: string;
  total: number;
  status: string;
  date: string;
}

const rowData: tableData[] = [
  {
    contactName: "Justin",
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
  const theme = createTheme({
    typography: {
      fontFamily: ["Rothern Variable"].join(","),
    },
  });
  return (
    // <ThemeProvider theme={theme}>
    //   </ThemeProvider>

    <TableContainer
      component={Paper}
      sx={{ border: 1, borderWidth: 3, borderRadius: 4.5 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontStyle: "italic", fontFamily: "Rothern Variable" }}
            >
              Contact
            </TableCell>
            <TableCell
              sx={{ fontStyle: "italic", fontFamily: "Rothern Variable" }}
            >
              Quotation ID
            </TableCell>
            <TableCell
              sx={{ fontStyle: "italic", fontFamily: "Rothern Variable" }}
            >
              {" "}
              Total
            </TableCell>
            <TableCell
              sx={{ fontStyle: "italic", fontFamily: "Rothern Variable" }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{ fontStyle: "italic", fontFamily: "Rothern Variable" }}
            >
              {" "}
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow
              key={row.quotationId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontFamily: "Rothern Variable" }}
              >
                {row.contactName}
              </TableCell>
              <TableCell sx={{ fontFamily: "Rothern Variable" }}>
                {row.quotationId}
              </TableCell>
              <TableCell sx={{ fontFamily: "Rothern Variable" }}>
                {row.total}
              </TableCell>
              <TableCell sx={{ fontFamily: "Rothern Variable" }}>
                {row.status}
              </TableCell>
              <TableCell sx={{ fontFamily: "Rothern Variable" }}>
                {row.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
