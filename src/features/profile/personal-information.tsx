import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import Profile from "../../assets/images/Profile.png"
import styled from "styled-components";
import {Typography} from "../../components/ui/typography";
import Edit from "../../assets/icons/edit";
import {Button} from "../../components/ui/button";
import Camera from "../../assets/icons/camera";
import Logout from "../../assets/icons/logout";
import s from "./styles.module.scss"

type PersonalInformationProps = {
    email: string,
    avatar?: string,
    name: string,
    onLogout?: () => void
    onAvatarChange: (newAvatar: string) => void
    onNameChange: (newName: string) => void
}


export const PersonalInformation = ({email, avatar, name, onLogout, onAvatarChange, onNameChange}: PersonalInformationProps) => {

    const handleAvatarChanged = () => {
        onAvatarChange('newAvatar')
    }

    const handleNameChanged = () => {
        onNameChange('newName')
    }

    const handleLogout = () => {
        onLogout()
    }


    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <StyledProfile>Profile
            <h2>
                <StyledImg src={Profile}/>
            </h2>
            <Button variant={'secondary'} onClick={handleAvatarChanged}>
                <Camera/>
            </Button>
            <Typography variant={'h1'} className={s.name}>
                name: {name}
                {/*{!name && <TextField></TextField>}*/}
            </Typography>
            <Button variant={'secondary'} onClick={handleNameChanged}>
                <Edit/>
            </Button>
            <Typography variant={'h1'} className={s.email}>
                email: {email}
            </Typography>
            <Button variant={"secondary"} onClick={handleLogout}>
                <Logout/>
            </Button>
        </StyledProfile>
    )
}

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  padding: 50px;
`

const StyledProfile = styled.div `
background-color: rgba(208,231,225,0.99);
`