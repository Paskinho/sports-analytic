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
    phone: string,
    onLogout?: () => void
    onAvatarChange: (newAvatar: string) => void
    onNameChange: (newName: string) => void
}


export const PersonalInformation = ({email, avatar, name = "Uladzsislau", onLogout, onAvatarChange, onNameChange, phone}: PersonalInformationProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleAvatarChanged = () => {
        onAvatarChange('newAvatar')
    }

    const handleNameChanged = () => {
        onNameChange('newName')
    }

    const handleLogout = () => {
        onLogout()
    }

    const OnChangePassword = () => {
        return navigate('../newPassword')
    }


    return (
        <StyledProfile>
            <Typography variant={'large'}>Profile</Typography>
            <h2>
                <StyledImg src={avatar}/>
            </h2>
            <Button className={s.camera} variant={'primary'} onClick={handleAvatarChanged}>
                <Camera/>
            </Button>
            <Typography variant={'h1'} className={s.name}>
                name: {name}
                {/*{!name && <TextField></TextField>}*/}
            </Typography>
            <Button variant={'primary'} onClick={handleNameChanged}>
                <Edit/>
            </Button>
            <Typography variant={'h1'} className={s.email}>
                email: {email}
            </Typography>
            <Typography variant={'h1'} className={s.email}>
                phone: {phone}
            </Typography>
            <Button variant={"primary"} onClick={OnChangePassword}>
                Change Password
            </Button>
            <Button variant={"secondary"} onClick={handleLogout}>
                <Logout/>
                Sign Out
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
background-color: #E5DDC8;
  margin-top: 100px;
`