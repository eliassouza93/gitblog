import { Container, FormularioContainer, Spam, Titulo } from "./styles"

type Typed = {
  getDate: (valor: string) => void
}


export function Formulario({ getDate }: Typed) {
  return (
    <FormularioContainer>
      <Container>
        <Titulo> </Titulo>
        <Spam>6 publicações</Spam>
      </Container>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => getDate(e.target.value)}
      />
    </FormularioContainer>
  )
}
