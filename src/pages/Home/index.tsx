
import { Cards } from "../Components/Cards";
import { Formulario } from "../Components/Formulario";
import { Header } from "../Components/Header";
import { Containerhome } from "./styles";


export function Home() {
    return (
        <Containerhome>
            <Header />
            <Formulario />
            <Cards />
        </Containerhome>
    )
}