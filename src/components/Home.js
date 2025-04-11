import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import AnalysisResults from "../components/AnalysisResults";
import { HomeContainer, Section } from "../styles/Home.styles";

const Home = () => {
  const [result, setResult] = useState(null);

  const handleAnalyze = (analysisResult) => {
    setResult(analysisResult);
  };

  const handleClearResults = () => {
    setResult(null); // Clears the analysis results
  };

  return (
    <HomeContainer>
      <Section>
        <h1>MOMO ANALYZEUR</h1>
        <FileUpload onAnalyze={handleAnalyze} />
        <AnalysisResults
          result={result}
          setResult={setResult}
          onClear={handleClearResults}
        />
      </Section>
    </HomeContainer>
  );
};

export default Home;
