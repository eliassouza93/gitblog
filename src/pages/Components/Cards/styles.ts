import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: center;
    padding: 10px;
  }
`

export const DivPost = styled.div`
  width: 416px;
  height: 269px;
  background-color: #112131;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E7EDF4;

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
`

export const PostInterno = styled.div`
  width: 350px;
  height: 199px;

  @media (max-width: 450px) {
    width: 90%;
    height: auto;
  }
`

export const TituloPai = styled.div`
  height: 64px;
`

export const Titulo = styled.h3`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 10px;
  }
`

export const ContainerParagrafo = styled.div`
  height: 112px;
`

export const Paragrafo = styled.p`
  font-size: 14px;
`
