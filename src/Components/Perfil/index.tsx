import { useEffect, useState } from 'react'
import { ContainerFilho, DivContainer, DivImagem, DivInfo, DivLink, Paragrafo, Titulo } from './styles'
import axios from 'axios'

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
            <Titulo>{usuarioInfo?.name}</Titulo>
            <p>Github</p>
          </div>
          <Paragrafo>Lor llitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate modi fugiat? Similique, quas veritatis! Adipisci nulla tempora velit quaerat voluptatum fuga beatae, veniam eaque. Explicabo quibusdam dolor consequatur facere. incidunt n ores.</Paragrafo>
        </DivInfo>

        <DivLink>
          <span>git</span>
          <span>rocketseat</span>
          <span>seguidores</span>
        </DivLink>
      </ContainerFilho>
    </DivContainer>
  )
}
