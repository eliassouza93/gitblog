import { useEffect, useState } from 'react'
import { ContainerFilho, DivContainer, DivImagem, DivInfo, DivLink, Paragrafo, Titulo } from './styles'
import axios from 'axios'
import gitIcon from '../../../assets/git.png'
import intiIcon from '../../../assets/intinuição.png'
import segIcon from '../../../assets/seguidores.png'
import linkIcon from '../../../assets/link.png'


interface UsuarioGitHub {
  avatar_url: string
  name: string
  login: string
  followers: string
  bio: string
}

export function Perfil() {
  const [usuarioInfo, setUsuarioInfo] = useState<UsuarioGitHub>()

  useEffect(() => {
    axios.get('https://api.github.com/users/eliassouza93')
      .then(response => {
        setUsuarioInfo(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  if (!usuarioInfo) return null
  return (
    <DivContainer>
      <DivImagem>
        <img src={usuarioInfo.avatar_url} />
      </DivImagem>
      <ContainerFilho>
        <DivInfo>
          <div>
            <Titulo>{usuarioInfo.name} <a href="https://github.com/eliassouza93" target="_blank" ><p>GITHUB  <img src={linkIcon} alt='Link para o Guithub' /> </p></a> </Titulo>
          </div>
          <Paragrafo> {usuarioInfo.bio} </Paragrafo>
        </DivInfo>
        <DivLink>
          <span><img src={gitIcon} alt="nome" /> {usuarioInfo.login} </span>
          <span><img src={intiIcon} alt="intituição" />Rocketseat</span>
          <span><img src={segIcon} alt="seguidores" />Seguidores: {usuarioInfo.followers}</span>
        </DivLink>
      </ContainerFilho>
    </DivContainer>
  )
}
