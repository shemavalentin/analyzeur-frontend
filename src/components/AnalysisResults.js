import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { exportToExcel, exportToPDF } from "../Utils/exportUtils";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ButtonContainer,
  StyledButton,
  SearchField,
  ResultsContainer,
} from "../styles/AnalysisResults.styles";

// Function to format numbers with a thousand separator
const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

const AnalysisResults = ({ result, setResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!result || (!result.top_senders && !result.top_receivers)) {
    return <p> No data available.</p>;
  }

  const { top_senders = [], top_receivers = [] } = result;

  // Filter function
  const filterData = (data, key, nameKey) =>
    data.filter(
      (row) =>
        row[key].toLowerCase().includes(searchTerm.toLowerCase()) ||
        row[nameKey].toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredSenders = filterData(top_senders, "From", "From Name");
  const filteredReceivers = filterData(top_receivers, "To", "To Name");

  // Highlight function
  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span
          key={index}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Combine top_senders and top_receivers into a single exportable object
  const exportData = {
    top_senders,
    top_receivers,
  };

  return (
    <div>
      <h2>TECHNICAL ANALYSIS REPORT</h2>

      <SearchField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchTerm("")} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <ResultsContainer>
        {/* Top Senders Table */}
        <h4>TOP SENDERS</h4>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sender</TableCell>
                <TableCell>Sender Name</TableCell>
                <TableCell>Total Sent</TableCell>
                <TableCell>Transactions Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSenders.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{highlightMatch(row.From || "N/A")}</TableCell>
                  <TableCell>
                    {highlightMatch(row["From Name"] || "Unknown")}
                  </TableCell>
                  <TableCell> {formatNumber(row.total_sent)} RWF</TableCell>
                  <TableCell>{row.transactions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Top Receivers Table */}
        <h4>TOP RECEIVERS</h4>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Receiver</TableCell>
                <TableCell>Receiver Name</TableCell>
                <TableCell>Total Received</TableCell>
                <TableCell>Transactions Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReceivers.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{highlightMatch(row.To || "N/A")}</TableCell>
                  <TableCell>
                    {highlightMatch(row["To Name"] || "Unknown")}
                  </TableCell>
                  <TableCell> {formatNumber(row.total_received)} RWF</TableCell>
                  <TableCell>{row.transactions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ResultsContainer>

      {/* Action Buttons */}
      <ButtonContainer>
        <StyledButton
          excel
          onClick={() => exportToExcel(exportData, "Analysis_Report")}
        >
          Export to Excel
        </StyledButton>

        <StyledButton
          onClick={() => exportToPDF(exportData, "Analysis_Report")}
        >
          Export to PDF
        </StyledButton>
        <StyledButton onClick={() => setResult(null)} color="secondary">
          Clear/Reset
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

export default AnalysisResults;
