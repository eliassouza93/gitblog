import styled from "styled-components";

export const FormularioContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 12rem;
  

  input {
    width: 100%;
    max-width: 864px;
    padding: 0.75rem 1rem;
    background-color: #040F1A;
    border: 1px solid #1C2F41;
    border-radius: 6px;
    color: #E7EDF4;
    font-size: 1rem;
    margin-top: 1rem;
    margin-top:3px;
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
  width: 864px;
`

export const Titulo = styled.h5`
  font-size: 18px;
`

export const Spam = styled.p`
  font-size: 14px;
`