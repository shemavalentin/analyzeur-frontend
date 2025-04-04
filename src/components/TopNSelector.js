import React from "react";
import { SelectContainer } from "../styles/TopNSelector.styles";

const TopNSelector = ({ topN, setTopN }) => {
  return (
    <SelectContainer>
      <label> Top Transactions: </label>
      <select value={topN} onChange={(e) => setTopN(Number(e.target.value))}>
        <option value={5}> Top 5 </option>
        <option value={10}> Top 10 </option>
        <option value={15}> Top 15 </option>
        <option value={20}> Top 20 </option>
        <option value={25}> Top 25 </option>
        <option value={30}> Top 30 </option>
      </select>
    </SelectContainer>
  );
};

export default TopNSelector;
