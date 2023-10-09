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

`

const Image = styled.img``