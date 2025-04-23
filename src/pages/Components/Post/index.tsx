import cover from '../../../assets/Cover.png'
import { PostList } from './PostList'
import { HeaderContainer, ContainerPost,ContainerPostFilho } from './styles'

export function Post() {
    return (
        <>
            <HeaderContainer>
                <img src={cover} alt="cover" />
                <PostList />
            </HeaderContainer>

            <ContainerPost>
                <ContainerPostFilho>
                    <h5>Programing linguagem</h5><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nemo optio animi nesciunt? Corrupti accusamus, perspiciatis tempore, minima facilis quis placeat voluptate reprehenderit iure, animi fugit possimus illo similique ipsa?</p>

                    <a href="">Dynamic Typing</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet dignissimos omnis porro at hic suscipit rem repudiandae earum laborum commodi.</p>
                </ContainerPostFilho>

            </ContainerPost>
        </>

    )
}