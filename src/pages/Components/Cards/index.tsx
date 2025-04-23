import { DivContainer, ContainerParagrafo, DivPost, Paragrafo, PostInterno, Titulo, TituloPai } from "./styles"

type IssueType = {
  id: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
    avatar_url: string
    html_url: string
  };
};

type CardsProps = {
  filtered: IssueType[];
};

const calculateDays = (createdAt: string): string => {
  const createdDate = new Date(createdAt)
  const now = new Date()
  const timeDiff = now.getTime() - createdDate.getTime()
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))

  if (dayDiff === 0) return 'Hoje'
  if (dayDiff === 1) return '1 dia'
  return `${dayDiff} dias`
};

export function Cards({ filtered }: CardsProps) {
  if (!filtered || filtered.length === 0) return <h3>Nenhuma issue encontrada.</h3>;

  return (
    <DivContainer>
      {filtered.map((issue) => (
        <DivPost key={issue.id}>
          <PostInterno>
            <TituloPai>
              <Titulo>
                {issue.title}
                <span>{calculateDays(issue.created_at)}</span>
              </Titulo>
            </TituloPai>
            <ContainerParagrafo>
              <Paragrafo>{issue.body}</Paragrafo>
            </ContainerParagrafo>
          </PostInterno>
        </DivPost>
      ))}
    </DivContainer>
  );
}