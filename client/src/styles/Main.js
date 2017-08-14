import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 60px;
  background-color: black;
  color: white;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  img {
    height: 60px;
    width: 60px;
  }
  a {
    color: white
  }
`;

export const HomePageForms = styled.div`
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.3);
  input {
    margin-bottom: 10px;
  }
  form {
    margin-left: 10px;
  }
`;



export const StyledRecord = styled.div`
  height: 20vh;
  width: 55vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5vh;
  border: 4px solid black;
  background-color: rgba(0, 0, 0, 0.7);
  img {
    height: 20vh;
    width: 20vh;
  }
  h3, h4 {
    color: white;
    font-weight: 600;
  }
  button {
    background-color: #ff6666;
    color: white;
  }

`;
