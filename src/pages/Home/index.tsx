import { useEffect, useState } from "react";
import axios from "axios";
 
import { Containerhome } from "./styles";
import { Header } from "../../components/Header";
import { Formulario } from "../../components/Formulario";
import { Cards } from "../../components/Cards";

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
 
export function Home() {
  const [issues, setIssues] = useState<IssueType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const fetchIssues = async () => {
    const owner = "eliassouza93"
    const repo = "gitblog"

    setLoading(true)
   
    try {
      const { data } = await axios.get<IssueType[]>(
        `https://api.github.com/repos/${owner}/${repo}/issues`
      );
      setIssues(data)
    } catch (erro) {
      console.log(erro)

    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchIssues()
  }, []);

  const handleSearch = (valor: string) => {
    setSearchTerm(valor)
  };

  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Containerhome>
      <Header />
      <Formulario getiltered={handleSearch} total={filteredIssues.length} />
      {loading && <p>Carregando post...</p>}
      <Cards filtered={issues} />
    </Containerhome>
  );
}
