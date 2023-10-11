import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import {Typography} from "../../components/ui/typography";
import {TextField} from "../../components/ui/text-field";

type PersonalInformationProps = {
    email?: string,
    avatar?: string,
    name?: string,
    onLogout?: () => void
}


export const PersonalInformation = ({email, avatar, name, onLogout}: PersonalInformationProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div>Profile
        <h2>name: {name}
            {/*{!name && <TextField></TextField>}*/}
        </h2>
        <h2>email: {email}</h2>
            {avatar}
        </div>
    )
}