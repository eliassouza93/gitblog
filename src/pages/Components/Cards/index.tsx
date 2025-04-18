import { DivContainer, ContainerParagrafo, DivPost, Paragrafo, PostInterno, Titulo, TituloPai } from "./styles";



export function Cards() {
    return (
        <DivContainer>

            <DivPost>
                <PostInterno>
                    <TituloPai>
                        <Titulo>Javascript e nodejs <span>Há 1 dia</span> </Titulo>
                    </TituloPai>
                    <ContainerParagrafo>
                        <Paragrafo> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid repellat, ducimus debitis, nisi quidem et, illo aut quod hic officiis non saepe! Voluptates </Paragrafo>
                    </ContainerParagrafo>
                </PostInterno>
            </DivPost>
            <DivPost>
                <PostInterno>
                    <TituloPai>
                        <Titulo>Javascript  e Typescript <span>Há 1 dia</span> </Titulo>
                    </TituloPai>
                    <ContainerParagrafo>
                        <Paragrafo> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid repellat, ducimus debitis, nisi quidem et, illo aut quod hic officiis non saepe! Voluptates </Paragrafo>
                    </ContainerParagrafo>
                </PostInterno>
            </DivPost>
           
        </DivContainer>
    )
}