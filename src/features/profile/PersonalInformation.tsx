import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";

export const PersonalInformation = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div>Profile</div>
    )
}