import { useEffect, useState } from "react"
import { Cards } from "../Components/Cards"
import { Formulario } from "../Components/Formulario"
import { Header } from "../Components/Header"
import { Containerhome } from "./styles"
import axios from "axios"

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

export function Home() {
  const [dados, setDatos] = useState<CommentType[]>([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const fetchIssueComments = async () => {
      const owner = 'eliassouza93'
      const repo = 'gitblog'
      const issueNumber = 1
      
      try {
        const { data } = await axios.get<CommentType[]>(
          `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/comments`
        )
        setDatos(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchIssueComments()
  }, [])

  const filteredComments = dados.filter((comment) =>
    comment.body.toLowerCase().includes(filtro.toLowerCase())
  )
  return (
    <Containerhome>
      <Header />
      <Formulario getDate={setFiltro} />
      <Cards posts={filteredComments} />
    </Containerhome>
  )
}
