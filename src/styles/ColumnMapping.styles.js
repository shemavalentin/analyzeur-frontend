import styled from "styled-components";

export const MappingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin-top: 20px;
`;

export const Label = styled.div`
  font-size: 14px;
  margin: 5px 0;
`;

export const Select = styled.select`
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
