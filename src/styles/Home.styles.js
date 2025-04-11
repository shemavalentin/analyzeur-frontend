import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  min-height: 100vh;
  padding: 20px;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 10px;
  border-radius: 12px;
  text-align: center;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
