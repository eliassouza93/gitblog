import { DivContainer, ContainerParagrafo, DivPost, Paragrafo, PostInterno, Titulo, TituloPai } from "./styles"

type CommentType = {
  id: number
  body: string
  created_at: string
  user: {
    login: string
    avatar_url: string
    html_url: string
  }
}

type CardsProps = {
  posts: CommentType[]
}

const calculateDays = (createdAt: string): string => {
    const createdDate = new Date(createdAt)
    const day = new Date()
    const timeDif = day.getTime() - createdDate.getTime()
    const dayDif = Math.floor(timeDif / (1000 * 3600 * 24))
  
    if (dayDif === 0) {
      return 'Hoje'
    } else if (dayDif === 1) {
      return '1 dia'
    } else {
      return `${dayDif} dias`
    }
  }
  
export function Cards({ posts }: CardsProps) {
  return (
    <DivContainer>
      {posts.length > 0 ? posts.map((post) => (
        <DivPost key={post.id}>
          <PostInterno>
            <TituloPai>
              <Titulo>
                {post.user.login}
                <span>{calculateDays(post.created_at)}</span>
              </Titulo>
            </TituloPai>
            <ContainerParagrafo>
              <Paragrafo>{post.body}</Paragrafo>
            </ContainerParagrafo>
          </PostInterno>
        </DivPost>
      )) : <h3>Nenhum post encontrado</h3>}
    </DivContainer>
  )
}
