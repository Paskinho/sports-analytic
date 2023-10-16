import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import Profile from "../../assets/images/Profile.png"
import styled from "styled-components";
import {Dropdown} from "../../components/ui/dropdown";

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
        <StyledProfile>Profile
            <h2>
                <StyledImg src={Profile}/>
            </h2>
            <h2>name: {name}
                {/*{!name && <TextField></TextField>}*/}
            </h2>
            <h2>email: {email}</h2>
            {avatar}
        </StyledProfile>
    )
}

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`

const StyledProfile = styled.div `
background-color: rgba(208,231,225,0.99);
`