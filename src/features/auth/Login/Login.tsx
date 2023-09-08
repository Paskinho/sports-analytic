import {useAppDispatch} from "../../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../components/ui/button";



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



    return (
        <div>
            <Button variant={'primary'} onClick={loginHandler}>SignIn</Button>
            <div>Forgot Password</div>
        </div>
    )
}