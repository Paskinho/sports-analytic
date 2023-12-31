import {useAppDispatch} from "../../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../components/ui/button";
import {LoginForm} from "../LoginForm/login-form";
import styled from "styled-components";
import s from "./styles.module.scss"
import {Checkbox} from "../../../components/ui/checkbox";
import {Typography} from "../../../components/ui/typography";
import {Card} from "../../../components/ui/card";


export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginHandler = () => {
        const payload = {
            email: "",
            password: "",
            rememberMe: false
        }
        dispatch(authThunks.login(payload))
            .unwrap()
            .then((res) => {
                toast.success('Successfully login')
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }).catch((err) => {
            toast.error(err.e.response.data.error)
        });
    };

    const NavigateToSignUp = () => {
        return (
            navigate('/registration')
        )
    }


    const NavigateToRecoveryPassword = () => {
        return (
            navigate('/recoveryPassword')
        )
    }

    return (
        <>
        <Card className={s.card}>
            <StyledLogin>
                <div className={s.header}>
                    <Typography variant={'large'}>Sign in</Typography>
                </div>

                <LoginForm/>
                <Button variant={'primary'} onClick={loginHandler} className={s.button}>SignIn</Button>
                <Typography  variant={"link1"} onClick={NavigateToRecoveryPassword}>Forgot Password?</Typography>
                <Typography variant={'link1'} onClick={NavigateToSignUp}>Registration now</Typography>
            </StyledLogin>
        </Card>
        </>

    )
}

const StyledLogin = styled.div`
  
`