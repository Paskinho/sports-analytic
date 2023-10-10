import styled from "styled-components";
import {Typography} from "../../../../components/ui/typography";
import {Button} from "../../../../components/ui/button";
import s from '../../../../common/styles/player.module.scss'
import {Card} from "../../../../components/ui/card";

type RegionProps = {
    title: string
    text: string
    image: string
}



export const Region = (props: RegionProps) => {

    const flippedCard = () => {
        return (
            <StyledRegion className={s.flipped}>
            </StyledRegion>
        )

    }

    return (
        <StyledRegion>
            <Image src={props.image} alt=''/>
            <Typography variant={""}>{props.title}</Typography>
            <Typography variant={""}>{props.text}</Typography>
            <Button variant={"primary"} onClick={flippedCard}>Click Me</Button>
        </StyledRegion>
    );
};

const StyledRegion = styled.div`
background-color: lightgoldenrodyellow;
  max-width: 540px;
  width: 100%;
  padding: 20px;
  border: 1px dashed;
  
`

const Image = styled.img`
  width: 100%;
  height: 260px
;`