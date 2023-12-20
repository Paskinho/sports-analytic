import s from '../../../../common/styles/player.module.scss'
import styled from "styled-components";
import {Button} from "../../../../components/ui/button";
import Netherlands from '../../../../assets/images/Netherlands.png'
import Liverpool from '../../../../assets/images/Liverpool.png'


type VirgilProps = {
    name: string
    games: number
    nationality: string,
    club: string,
    age: number
}

export const Virgil = ({name, games, nationality, club, age}: VirgilProps) => {

    return <div className={s.page}>
        <div>#4 Virgil Van Dijk</div>
        <img className={s.img} src={"https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-07/virgil-van-dijk-statement-cover-.webp?itok=9Oyo-aSV"}/>
    <StyledFormPlayer>
        <div>age: 31 ()</div>
        <div>Nationality: Netherlands <img className={s.flag} alt={'Netherlands'} src={Netherlands}/></div>
        <div>  Club: Liverpool <img className={s.logo} alt={Liverpool} src={Liverpool}/></div>
        <div>  games: {games}</div>
        <Button>Watching for {name}</Button>
    </StyledFormPlayer>
    </div>
}

// const Img = styled.image `
//   width: 600px;
//   height: 400px;
//   border-radius: 20px;
// `

const StyledFormPlayer = styled.form `
display: flex;
  flex-direction: column;
`
