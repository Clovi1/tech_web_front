import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form'

import styles from "./Login.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, selectIsAuth} from "../../redux/slices/auth.js";
import {Navigate} from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            username: 'admin',
            password: 'admin',
        },
        mode: "onChange",

    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))
        console.log(data)
        if (!data.payload) {
            return alert('Не удалось авторизоваться!')
        }

        window.localStorage.setItem('access_token', data.payload.access)
        window.localStorage.setItem('refresh_token', data.payload.refresh)
    }
    console.log(isAuth)
    if (isAuth) {
        return <Navigate to={'/'}/>
    }

    return (
        <Paper classes={{root: styles.root}}>
            <Typography classes={{root: styles.title}} variant="h5">
                Вход в аккаунт
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="Username"
                    error={Boolean(errors.username?.message)}
                    helperText={errors.username?.message}
                    fullWidth
                    {...register('username', {required: 'Укажите никнейм'})}
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    fullWidth
                    {...register('password', {required: 'Укажите пароль'})}
                />
                <Button type={"submit"} size="large" variant="contained" fullWidth>
                    Войти
                </Button>
            </form>
        </Paper>
    );
};
