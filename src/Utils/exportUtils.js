import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Function to export to Excel
export const exportToExcel = (data, filename) => {
  if (!data || (!data.top_senders.length && !data.top_receivers.length)) {
    console.error("No data available for export.");
    return;
  }

  const topSendersCount = data.top_senders.length;
  const topReceiversCount = data.top_receivers.length;

  const worksheet = XLSX.utils.json_to_sheet([
    { A: `TOP ${topSendersCount} SENDERS` },
    {}, // Empty row for spacing
    ...data.top_senders.map((row) => ({
      Sender: row.From || "N/A",
      "Sender Name": row["From Name"] || "Unknown",
      "Total Sent": row.total_sent.toLocaleString(), // Format with thousand separator
      "Transactions Count": row.transactions,
    })),
    {},
    {}, // Two empty rows before receivers
    { A: `TOP ${topReceiversCount} RECEIVERS` },
    {}, // Empty row for spacing
    ...data.top_receivers.map((row) => ({
      Receiver: row.To || "N/A",
      "Receiver Name": row["To Name"] || "Unknown",
      "Total Received": row.total_received.toLocaleString(),
      "Transactions Count": row.transactions,
    })),
  ]);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "MoMO ANALYSIS REPORT");
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

// Function to export to PDF
export const exportToPDF = (data, filename) => {
  if (!data || (!data.top_senders.length && !data.top_receivers.length)) {
    console.error("No data available for export.");
    return;
  }

  const doc = new jsPDF();
  doc.text("ANALYSIS REPORT FOR ....", 14, 10);

  const topSendersCount = data.top_senders.length;
  const topReceiversCount = data.top_receivers.length;

  // Top Senders Title
  doc.setFontSize(14);
  doc.text(`TOP ${topSendersCount} SENDERS`, 14, 20);

  const senderColumns = ["Sender", "Sender Name", "Total Sent", "Transactions"];
  const senderRows = data.top_senders.map((row) => [
    row.From || "N/A",
    row["From Name"] || "Unknown",
    `${row.total_sent.toLocaleString()}`, // Format with thousand separator
    row.transactions,
  ]);

  autoTable(doc, {
    head: [senderColumns],
    body: senderRows,
    startY: 25,
  });

  doc.addPage();

  // Top Receivers Title
  doc.setFontSize(14);
  doc.text(`TOP ${topReceiversCount} RECEIVERS`, 14, 20);

  const receiverColumns = [
    "Receiver",
    "Receiver Name",
    "Total Received",
    "Transactions",
  ];
  const receiverRows = data.top_receivers.map((row) => [
    row.To || "N/A",
    row["To Name"] || "Unknown",
    `${row.total_received.toLocaleString()}`,
    row.transactions,
  ]);

  autoTable(doc, {
    head: [receiverColumns],
    body: receiverRows,
    startY: 25,
  });

  doc.save(`${filename}.pdf`);
};
