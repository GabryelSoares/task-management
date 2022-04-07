import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
`;

export const StyledControls = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  input, select {
    height: 50px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #a8a8b3;
    box-sizing: border-box;
    padding: 0 20px;    
    width: 100%;
  }
`;
