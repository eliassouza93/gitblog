import { IssueType } from "../../IssueType";
import { DivContainer, ContainerParagrafo, DivPost, Paragrafo, PostInterno, Titulo, TituloPai } from "./styles"

import { useNavigate } from "react-router-dom"

type CardsProps = {
  filtered: IssueType[]
};

const calculateDays = (createdAt: string): string => {
  const createdDate = new Date(createdAt)
  const now = new Date()
  const timeDiff = now.getTime() - createdDate.getTime()
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))

  if (dayDiff === 0) return 'Hoje'
  if (dayDiff === 1) return '1 dia'
  return `${dayDiff} dias`;
};

export function Cards({ filtered }: CardsProps) {
  const navigate = useNavigate();

  if (!filtered || filtered.length === 0) return <h3>Nenhuma issue encontrada.</h3>;

  const handleCardClick = (number: number) => {
    navigate(`/post/${number}`);
  };

  return (
    <DivContainer>
      {filtered.map((issue) => (
       <DivPost
       key={issue.id} 
       onClick={() => handleCardClick(issue.number)}
       style={{ cursor: 'pointer' }}
     >
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