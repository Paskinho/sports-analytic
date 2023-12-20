import s from '../../../../common/styles/player.module.scss'
import styled from "styled-components";
import {Button} from "../../../../components/ui/button";
import Netherlands from '../../../../assets/images/Netherlands.png'
import Liverpool from '../../../../assets/images/Liverpool.png'
import {Table} from "../../../../components/ui/table";
import {Typography} from "../../../../components/ui/typography";
import {Card} from "../../../../components/ui/card";


type VirgilProps = {
    name: string
    games: number
    nationality: string,
    club: string,
    age: number
}

export const Virgil = ({name, games, nationality, club, age}: VirgilProps) => {

    return (
        <Card className={s.page}>

        <div>
        <Typography variant={'large'}>VIRGIL VAN DIJK</Typography>
    </div>
        <div className={s.playerInfo}>
        <img className={s.img} src={"https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-07/virgil-van-dijk-statement-cover-.webp?itok=9Oyo-aSV"}/>
    <StyledFormPlayer>
        <Typography variant={'subtitle1'}>age: 31 ()</Typography>
        <Typography variant={'subtitle1'}>Nationality: Netherlands <img className={s.flag} alt={'Netherlands'} src={Netherlands}/></Typography>
        <Typography variant={'subtitle1'}>  Club: Liverpool <img className={s.logo} alt={Liverpool} src={Liverpool}/></Typography>
        <Typography variant={'subtitle1'}>  games: {games}</Typography>
        <Button>Watching for Virgil {name}</Button>
        {/*<Table.Root style={{width: '100%'}}>*/}
        {/*    <Table.Header/>*/}
        {/*</Table.Root>*/}
    </StyledFormPlayer>
        </div>
            <Typography variant={'subtitle2'}>Statistics of {name} Virgil</Typography>
        </Card>
    )
}

// const Img = styled.image `
//   width: 600px;
//   height: 400px;
//   border-radius: 20px;
// `

const StyledFormPlayer = styled.form `
display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  
`
