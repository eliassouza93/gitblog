import styled from "styled-components";


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
  display: flex;
  align-items: center;
  height: 212px;
`
export const DivImagem = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
  }
`
export const ContainerFilho = styled.div`
   width: 75%;
   display: flex;
   flex-direction: column;
   color: #AFC2D4;
`

export const DivInfo = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   height: 110px;
   font-family: "Nunito", sans-serif;

  img{
    width: 18px;
    height: 18px;
  }
   
`

export const Titulo = styled.h2`
    display: flex;
    justify-content: space-between;
    width: 95%;
    color: #E7EDF4;
    padding: 0;
    margin: 0;
  
    p{
      font-size: 15px;
      color: #3294F8;
    }
    a{
      text-decoration: none;
    }

`
export const Paragrafo = styled.p`
    margin-top: -10px;
   
`
export const DivLink = styled.p`
    width: 75%;
    display: flex;
    gap: 1;
    height: 20px;
    justify-content: space-between;
    
    img{
      margin-right: 12px;
      width: 18px;
      height:18px;
    }

`
