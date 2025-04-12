import { ContainerPerfil, HeaderContainer } from "./styles";
import cover from '../../assets/Cover.png'
import { Perfil } from "../Perfil";




export function Header() {
    return (
        <HeaderContainer>
            <img src={cover} alt="cover" />

            <ContainerPerfil>
                <Perfil />
            </ContainerPerfil>
        </HeaderContainer>
    )
}