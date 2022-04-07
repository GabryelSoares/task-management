import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 32px;
  
  .content {
    display: flex;
    flex-direction: column;
    width: 320px;
    align-items: stretch;
    text-align: center;

    .logo{
      color: #3f51b5;
    }

    h2 {
      font-size: 24px;
      margin: 48px 0 24px;
      font-family: 'Poppins', sans-serif;
    }
    
    form {
      input {
        height: 50px;
        border-radius: 8px;
        background: #fff;
        border: 1px solid #a8a8b3;
      }
      button {
        margin-top: 16px;
        width: 100%;
      }
      input {
        box-sizing: border-box;
        padding: 0 20px;    
        width: 100%;
      }
    }

    p{
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #3f51b5;
      }
    }

  }

`;
