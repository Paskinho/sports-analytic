import styled from "styled-components";
import {Typography} from "../../../../components/ui/typography";

type RegionProps = {
    title: string
    text: string
    image: string
}

export const Region = (props: RegionProps) => {
    return (
        <StyledRegion>
            <Image src={props.image} alt=''/>
            <Typography variant={""}>{props.title}</Typography>
            <Typography variant={""}>{props.text}</Typography>
        </StyledRegion>
    );
};

const StyledRegion = styled.div`
background-color: lightgoldenrodyellow;
  max-width: 540px;
  width: 100%;
  
`

const Image = styled.img`
  width: 100%;
  height: 260px
;`