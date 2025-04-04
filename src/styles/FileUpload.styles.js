import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10pxrgb (15, 19, 50);
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #0056b3;
  }
`;

export const Button = styled.button`
  background: rgb(6, 40, 75);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background: rgb(95, 117, 52);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  background: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: rgb(16, 41, 66);
  }
`;

export const Message = styled.p`
  color: ${(props) => (props.error === "true" ? "red" : "green")};
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
  background: ${(props) => (props.error === "true" ? "#ffe6e6" : "#e6ffe6")};
  width: 100%;
  max-width: 400px;
`;
