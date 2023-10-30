import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import Profile from "../../assets/images/Profile.png"
import styled from "styled-components";
import {Typography} from "../../components/ui/typography";
import Edit from "../../assets/icons/edit";
import {Button} from "../../components/ui/button";
import Camera from "../../assets/icons/camera";

type PersonalInformationProps = {
    email?: string,
    avatar?: string,
    name?: string,
    onLogout?: () => void
    onAvatarChange: (newAvatar: string) => void
    onNameChange: (newName: string) => void
}


export const PersonalInformation = ({email, avatar, name, onLogout, onAvatarChange, onNameChange}: PersonalInformationProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <StyledProfile>Profile
            <h2>
                <StyledImg src={Profile}/>
            </h2>
            <Button>
                <Camera/>
            </Button>
            <Typography variant={'h1'}>
                name: {name}
                {/*{!name && <TextField></TextField>}*/}
            </Typography>
            <Button variant={'primary'}><Edit/></Button>
            <Typography variant={'h1'}>
                email: {email}
            </Typography>
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