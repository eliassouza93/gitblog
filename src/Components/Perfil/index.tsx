import { useEffect, useState } from 'react'
import { ContainerFilho, DivContainer, DivImagem, DivInfo, DivLink, Paragrafo, Titulo } from './styles'
import axios from 'axios'
import gitIcon from '../../assets/git.png'
import intiIcon from '../../assets/intinuição.png'
import segIcon from '../../assets/seguidores.png'
import linkIcon from '../../assets/link.png'

interface UsuarioGitHub {
  avatar_url?: string
  name: string
}

export function Perfil() {
  const [usuarioInfo, setUsuarioInfo] = useState<UsuarioGitHub>()

  useEffect(() => {
    axios.get('https://api.github.com/users/eliassouza93')
      .then(response => setUsuarioInfo(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <DivContainer>

      <DivImagem>
        <img src={usuarioInfo?.avatar_url} />
      </DivImagem>

      <ContainerFilho>
        <DivInfo>
          <div>
            <Titulo>Elias de souza <a href="#"><p>GITHUB  <img src={linkIcon} alt='Link para o Guithub' /> </p></a> </Titulo>

          </div>
          <Paragrafo>Lor llitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate modi fugiat? Simil incidunt n ores.</Paragrafo>
        </DivInfo>

        <DivLink>
          <span><img src={gitIcon} alt="nome" />Nome</span>
          <span><img src={intiIcon} alt="intituição" />Rocketseat</span>
          <span><img src={segIcon} alt="seguidores" />Seguidores</span>

        </DivLink>
      </ContainerFilho>

    </DivContainer>
  )
}
