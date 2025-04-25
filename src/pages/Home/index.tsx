import { useState, useEffect } from "react"
import axios from "axios"
import { IssueType } from "../IssueType"
import { Formulario } from "../../components/Formulario"
import { Cards } from "../../components/Cards"
import { Header } from "../../components/Header"

export function Home() {
  const [issues, setIssues] = useState<IssueType[]>([])
  const [filteredIssues, setFilteredIssues] = useState<IssueType[]>([])

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get<IssueType[]>("https://api.github.com/repos/eliassouza93/gitblog/issues")
      setIssues(response.data)
      setFilteredIssues(response.data)
    }

    fetchIssues()
  }, [])

  const buscaFiltro = (valor: string) => {
    const valorLower = valor.toLowerCase()
    const filtradas = issues.filter(issue =>
      issue.title.toLowerCase().includes(valorLower)
    )
    setFilteredIssues(filtradas)
  }

  return (
    <>
      <Header />
      <Formulario getiltered={buscaFiltro} total={filteredIssues.length} />
      <Cards filtered={filteredIssues} />
    </>
  )
}
