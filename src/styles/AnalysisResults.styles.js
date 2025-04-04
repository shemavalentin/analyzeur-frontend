import styled from "styled-components";
import { Button } from "@mui/material";

export const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #333;
  text-align: center;
`;

export const ResultBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
`;

// Container for buttons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

// Styled button

export const StyledButton = styled(Button)`
  && {
    background-color: ${(props) =>
      props.excel ? "#4CAF50" : "#d32f2f"}; /* Green for excel, red for pdf*/
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    text-transform: none;
    transition: 0.3s ease;

    &:hover {
      background-color: ${(props) => (props.excel ? "#388E3C" : "#9A0007")};
    }
  }
`;

export const JSONView = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 14px;
`;

//
