import styled from "styled-components";

export const FormularioContainer = styled.div`
  margin-top: 200px;
  width: 864px;

  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    padding: 20px;
    margin-top: 8px;
    background: #040F1A;
    color: #3A536B;
    border: 1px solid #3A536B;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const Container = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  color: #E7EDF4;
  flex-wrap: wrap;
  gap: 10px;
`

export const Titulo = styled.h5`
  font-size: 18px;
`

export const Spam = styled.p`
  font-size: 14px;
`
