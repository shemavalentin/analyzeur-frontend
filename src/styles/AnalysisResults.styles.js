import styled from "styled-components";
import { Button, TextField } from "@mui/material";

// export const ResultsContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   background: #f8f8f8;
//   border-radius: 8px;
//   width: 80%;
//   max-width: 600px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// `;

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

// SearchField wrapper
export const SearchField = styled(TextField)`
  && {
    margin: 20px auto 15px auto;
    width: 100%;
    max-width: 500px;
    // border-radius: 8px;
    // border: "1px solid #ccc";

    .MuiOutlinedInput-root {
      border-raduis: 8px;
    }

    .MuiInputAdornment-root {
      visibility: visible;
    }

    .MuiSvgIcon-root {
      color: #666;
      font-size: 20px;
    }

    @media (max-width: 600px) {
      max-width: 100%;
      // font-size: 14px;

      .MuiInputBase-input {
        font-size: 14px;
      }

      .MuiSvgIcon-root {
        font-size: 18px;
      }
    }
  }
`;

// Results Container

export const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 15px;
  }
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
