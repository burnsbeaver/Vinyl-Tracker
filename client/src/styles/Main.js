import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 60px;
  background-color: black;
  color: white;
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
