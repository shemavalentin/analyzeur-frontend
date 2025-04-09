import axios from "axios";

export const uploadFile = async (file, options) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("top_n", options.top_n);

  // Append additional required fields
  formData.append("transaction_types", "All");
  formData.append("date_column", "Date");
  formData.append("status_column", "Status");
  formData.append("type_column", "Type");
  formData.append("sender_column", "From");
  formData.append("sender_name_column", "From name");
  formData.append("receiver_column", "To");
  formData.append("receiver_name_column", "To name");
  formData.append("fee_column", "From / Fee");
  formData.append("amount_column", "Amount");
  formData.append("balance_column", "Balance");
  formData.append("currency_column", "Currency");

  try {
    const response = await axios.post(
      "https://backend-analyzeur-1.onrender.com",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    //console.log("Debug - Full API Response", response);
    return response.data;
  } catch (error) {
    console.error("Upload error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.detail || "File upload failed");
  }
};
