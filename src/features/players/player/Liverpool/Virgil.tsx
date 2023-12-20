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

    const columns = [
        {key: 'Statistic', title: "Statistics"},
        {key: 'Quantity', title: "Quantity"},
        {key: 'Position in Rating', title: "Position in Rating"},
    ]

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
        <Button>Watching for Virgil {name}</Button>

    </StyledFormPlayer>
        </div>
            <Typography variant={'subtitle2'}>Statistics of {name} Virgil</Typography>
            <Table.Root style={{width: '100%'}}>
                <Table.Header columns={columns}/>
                <Table.Body>
                    <Table.Row key={1}>
                        <Table.Cell>Games</Table.Cell>
                        <Table.Cell>23</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                    </Table.Row>
                    <Table.Row key={2}>
                        <Table.Cell>Goals</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>8</Table.Cell>
                    </Table.Row>
                    <Table.Row key={3}>
                        <Table.Cell>Assist</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>9</Table.Cell>
                    </Table.Row>
                    <Table.Row key={4}>
                        <Table.Cell>Rating from Paskinho System</Table.Cell>
                        <Table.Cell>7.89</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
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
