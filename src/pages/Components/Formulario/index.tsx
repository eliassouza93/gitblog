import { Container, FormularioContainer, Spam, Titulo } from "./styles"



export function Formulario() {
    return (
        <FormularioContainer>
            <Container>
                <Titulo>Publicações</Titulo>
                <Spam>6 publicaçõs</Spam>
            </Container>

            <input
                type="text"
                placeholder="Buscar conteúdo"
            />


        </FormularioContainer>
    )
}