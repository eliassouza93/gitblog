import styled from "styled-components"


export const DivContainer = styled.div`
  position: absolute;
  bottom: -8.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 864px;
  background-color: #0B1B2B;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  height: 212px;
  color: #E7EDF4;
 

  @media (max-width: 768px) {
    margin-top: -220px;
    position: relative;
    font-size: 10px;
    
  }


`
export const ContainerTitulo = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;

`
export const Container = styled.div`
  margin: 15px;
  height: 100px;

`
export const ContainerInformacoes = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;

`
