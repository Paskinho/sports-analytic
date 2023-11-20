import {useAppDispatch} from "../../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../components/ui/button";
import {LoginForm} from "../LoginForm/login-form";
import styled from "styled-components";
import s from "./styles.module.scss"
import {Checkbox} from "../../../components/ui/checkbox";
import {Typography} from "../../../components/ui/typography";


export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginHandler = () => {
        const payload = {
            email: "v.paskanov@gmail.com",
            password: "Paskinho777",
            rememberMe: false
        }
        dispatch(authThunks.login(payload))
            .unwrap()
            .then((res)=> {
                toast.success('Successfully login')
                setTimeout(()=> {
                    navigate('/')
                }, 1000)
            }).catch((err)=> {
            toast.error(err.e.response.data.error)
        });
    };

    const NavigateToSignUp = () => {
        return (
            navigate('/registration')
        )
    }


    const NavigateToNewPassword = () => {
        return (
            navigate('/newPassword')
        )
    }


    return (
        <StyledLogin>
            <LoginForm/>
            <Button variant={'primary'} onClick={loginHandler} className={s.button}>SignIn</Button>
            <Typography variant={"link1"} onClick={NavigateToNewPassword}>Forgot Password?</Typography>
            <Typography variant={'link1'} onClick={NavigateToSignUp}>Already have account?</Typography>
        </StyledLogin>
    )
}

const StyledLogin = styled.div `
padding: 100px;
`