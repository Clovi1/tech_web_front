import Container from "@mui/material/Container";

// @ts-ignore
import {Header} from "./components";
// @ts-ignore
import {Home, FullPost, Registration, AddPost, Login} from "./pages";
import {FC} from "react";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Home/>
                {/*<FullPost />*/}
                {/*<AddPost />*/}
                {/*<Login />*/}
                {/*<Registration />*/}
            </Container>
        </>
    );
}

export default App;