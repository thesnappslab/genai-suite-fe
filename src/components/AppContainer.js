import { Container } from "native-base";

export default function AppContainer({ children }){
    return(
        <Container>
            {children}
        </Container>
    )
}