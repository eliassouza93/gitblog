import { DivContainer,ContainerTitulo,Container,ContainerInformacoes } from "./styles";



export function PostList() {
    return (
        <DivContainer>
            <ContainerTitulo>
                <a href="">VOLTAR</a>
                <a href="">VER NO GITBUB</a>
            </ContainerTitulo>
            <Container>
                <h3>JavaScript data types and data structures</h3>
            </Container>
            <ContainerInformacoes>
                <span>elias93s</span>
                <span>Há 1 dia</span>
                <span>5 comentários</span>
            </ContainerInformacoes>
        </DivContainer>
    )
}