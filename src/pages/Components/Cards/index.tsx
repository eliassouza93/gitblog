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

export function Cards({ posts }: CardsProps) {
  return (
    <DivContainer>
      {posts.length > 0 ? posts.map((post) => (
        <DivPost key={post.id}>
          <PostInterno>
            <TituloPai>
              <Titulo>
                {post.user.login}
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
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
