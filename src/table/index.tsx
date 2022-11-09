import * as React from "react";
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
