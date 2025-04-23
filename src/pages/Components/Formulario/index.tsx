import { Container, FormularioContainer, Spam, Titulo } from "./styles"

type Typed = {
  getiltered: (valor: string) => void
  total: number
}

export function Formulario({ getiltered, total }: Typed) {
  return (
    <FormularioContainer>
      <Container>
        <Titulo>Publicações</Titulo>
        <Spam>{total} {total === 1 ? 'publicação' : 'publicações'}</Spam>
      </Container>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => getiltered(e.target.value)}
      />
    </FormularioContainer>
  )
}