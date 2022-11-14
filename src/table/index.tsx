import React, { FC, ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@mui/material";

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

const handleOnClickEvent = () => {
  console.log("Hello World");
};

export const UserTable: FC = (): ReactElement => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Rothern Variable"].join(","),
    },
  });
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: 1,
        borderWidth: 3,
        borderRadius: 4.5,
      }}
    >
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow sx={{ borderInlineEnd: "inherit" }}>
            <TableCell></TableCell>
            <TableCell
              sx={{
                fontFamily: "Rothern Variable",
                fontWeight: "bold",
              }}
            >
              Contact
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Rothern Variable",
                fontWeight: "bold",
              }}
            >
              Quotation ID
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Rothern Variable",
                fontWeight: "bold",
              }}
            >
              {" "}
              Total
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Rothern Variable",
                fontWeight: "bold",
              }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Rothern Variable",
                fontWeight: "bold",
              }}
            >
              {" "}
              Date
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow
              key={row.quotationId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ height: 80, width: 80 }}>
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "grey",
                    display: "block",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    border: "5 solid #000",
                    margin: "auto",
                    textAlign: "center",
                    position: "relative",
                    fontSize: 13,
                  }}
                >
                  {row.contactName.charAt(0).toUpperCase()}
                </span>
              </TableCell>
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
              <TableCell
                sx={{
                  fontFamily: "Rothern Variable",
                  bgcolor: row.status === "approved" ? "green" : "yellow",
                }}
              >
                {row.status}
              </TableCell>
              <TableCell sx={{ fontFamily: "Rothern Variable" }}>
                {row.date}
              </TableCell>
              <TableCell>
                <RemoveRedEyeIcon onClick={handleOnClickEvent} />
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  sx={{ bgcolor: "yellow" }}
                  onClick={handleOnClickEvent}
                >
                  Build Invoice
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
