import styled from "styled-components";

export const Form = styled.form`
margin: 10px 0 20px 30px;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 25px;
  border-radius: 5px;
  border: none;
  border: 1px solid #2a2a2a;
  padding: 1px 8px;
`;

export const Button = styled.button`
  height: 28px;
  margin-left: 10px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
  background-color: #ff553d;
  color: white;
  transition: all 150ms ease-in;

  &:hover {
    cursor: pointer;
    background-color: #b20000;
  }
`;