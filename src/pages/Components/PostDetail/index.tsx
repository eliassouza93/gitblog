import  { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import cover from '../../../assets/Cover.png'
import axios from 'axios'
import { calculateDays } from '../../../utils/calculateDays'
import { IssueType } from '../../IssueType'
import { ContainerHome, ContainerOne,ContainerPost, ContainerPostFilho, HeaderContainer,CarregandoDIv,NavigationContainer } from './styles'

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
        <img src={cover} alt="cover" />
        <ContainerOne>
          <ContainerHome style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <NavigationContainer> 
              <Link to="/">
              <span>&lt;</span> VOLTAR
              </Link>
              <a href={post.user.html_url} target="_blank" rel="noopener noreferrer">
                VER NO GITHUB
              </a>
            </NavigationContainer>
           
            <div>
              <span>{post.user.login}</span>
              <span>{calculateDays(post.created_at)}</span>
            </div>
          </ContainerHome>
        </ContainerOne>
      </HeaderContainer>

      <ContainerPost>
        <ContainerPostFilho>
        <h3>{post.title}</h3>
          {post.body.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </ContainerPostFilho>
      </ContainerPost>
    </>
  );
}