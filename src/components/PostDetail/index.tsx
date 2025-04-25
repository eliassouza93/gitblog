import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import cover from '../../assets/Cover.png'
import tempo from '../../assets/tempo.png'
import comentario from '../../assets/coments.png'
import git from '../../assets/git.png'
import axios from 'axios'
import { calculateDays } from '../../utils/calculateDays'
import { IssueType } from '../../pages/IssueType'
import { ContainerHome, ContainerOne, ContainerPost, ContainerPostFilho, HeaderContainer, CarregandoDIv, NavigationContainer, Div1, Div2, ContainerInfoPerfil, ContainerBotton } from './styles'
import gitLink from '../../assets/link.png'

export function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<IssueType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostDetails = async () => {
      const owner = "eliassouza93"
      const repo = "gitblog"

      setLoading(true)
      try {
        const { data } = await axios.get<IssueType>(
          `https://api.github.com/repos/${owner}/${repo}/issues/${id}`
        );
        setPost(data)
      } catch (erro) {
        console.log(erro)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPostDetails()
    }
  }, [id]);

  if (loading) {
    return <CarregandoDIv>Carregando detalhes do post...</CarregandoDIv>
  }

  if (!post) {
    return <div>Post não encontrado.</div>
  }
  return (
    <>
      <HeaderContainer>
        <img src={cover}/>
        <ContainerOne>
          <ContainerHome style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <NavigationContainer>
              <Div1>
                <Link to="/">
                  <span>&lt;</span> VOLTAR
                </Link>
              </Div1>
              <Div2>
                <a href={post.user.html_url} target="_blank" rel="noopener noreferrer">
                  VER NO GITHUB
                  <img src={gitLink} />
                </a>
              </Div2>
            </NavigationContainer>
            <ContainerInfoPerfil>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <h3>{post.title}</h3>
              </div>
              <ContainerBotton>
                <div>
                  <span> <img src={git}/> {post.user.login}</span>
                  <span> <img src={tempo}/> Há {calculateDays(post.created_at)}</span>
                  <span> <img src={comentario}/> {post.comments} comentários</span>
                </div>
              </ContainerBotton>
            </ContainerInfoPerfil>
          </ContainerHome>
        </ContainerOne>
      </HeaderContainer>
      <ContainerPost>
        <ContainerPostFilho>
          {post.body.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </ContainerPostFilho>
      </ContainerPost>
    </>
  );
}