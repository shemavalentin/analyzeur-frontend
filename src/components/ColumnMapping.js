import React, { useState } from "react";
import {
  MappingContainer,
  Label,
  Select,
  SubmitButton,
} from "../styles/ColumnMapping.styles";

const ColumnMapping = ({ availableColumns, onSubmit }) => {
  const [columnMap, setColumnMap] = useState({
    sender: "",
    receiver: "",
    amount: "",
    date: "",
    type: "",
  });

  const handleChange = (field, value) => {
    setColumnMap({ ...columnMap, [field]: value });
  };

  return (
    <MappingContainer>
      <h3> Map Columns</h3>
      {Object.keys(columnMap).map((field) => (
        <div key={field}>
          <Label>{field.replace(/^\w/, (c) => c.toUpperCase())}Column:</Label>
          <Select onChange={(e) => handleChange(field, e.target.value)}>
            {" "}
            value={columnMap[field]}
            <option value=""> Select Column</option>
            {availableColumns.map((col, index) => (
              <option key={index} value={col}>
                {col}
              </option>
            ))}
          </Select>
        </div>
      ))}
      <SubmitButton onClick={() => onSubmit(columnMap)}>
        Apply Mapping{" "}
      </SubmitButton>
    </MappingContainer>
  );
};

export default ColumnMapping;
