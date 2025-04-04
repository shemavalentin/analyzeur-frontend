import React, { useState } from "react";
import { uploadFile } from "../api/api";
import TopNSelector from "./TopNSelector";
import { Container, Input, Button, Message } from "../styles/FileUpload.styles";

const FileUploader = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);
  const [topN, setTopN] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("⚠️ Please select a file before analyzing!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const options = { top_n: topN };
      const response = await uploadFile(file, options);

      if (response?.analysis_result) {
        onAnalyze(response.analysis_result);
      } else {
        throw new Error(response?.error || "Unexpected response from server");
      }
    } catch (err) {
      setError(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Upload & Analyze Excel File</h2>
      <Input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <TopNSelector topN={topN} setTopN={setTopN} />

      <Button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Data"}
      </Button>

      {error && <Message error={"true"}>{error}</Message>}
    </Container>
  );
};

export default FileUploader;
