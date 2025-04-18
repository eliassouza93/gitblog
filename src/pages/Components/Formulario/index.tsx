import { Container, FormularioContainer, Spam, Titulo } from "./styles"
import axios from 'axios';


export function Formulario() {
    //teste
    async function PostGit() {
        try {
        
            const owner = 'eliassouza93';
            const repo = 'gitblog';
            const issueNumber = 1;
            const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;
            
            const response = await axios.get(url);
 
            const { title, body, created_at } = response.data;
            new Date(created_at).toLocaleString()
            console.log('Título:     ', title);
            console.log('Conteúdo:   ', body);
            console.log('Criado em:  ', new Date(created_at).toLocaleString());
        }
        catch (error) {
                console.log(error)
        }
    }
    

    PostGit();
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