import Container from "@mui/material/Container";
// @ts-ignore
import {Header} from "./components";
// @ts-ignore
import {Home, FullPost, Registration, AddPost, Login} from "./pages";
import {FC, useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {fetchAuthVerify, selectIsAuth} from './redux/slices/auth'

const App: FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    useEffect(() => {
        const token = window.localStorage.getItem('access_token')
        dispatch(fetchAuthVerify({'token': token}))
    }, [])

    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/posts/:id'} element={<FullPost/>}/>
                    <Route path={'/add-post'} element={<AddPost/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Registration/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;