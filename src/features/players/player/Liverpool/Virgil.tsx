import s from '../../../../common/styles/player.module.scss'
import styled from "styled-components";
import {Button} from "../../../../components/ui/button";


export const Virgil = () => {
    return <div className={s.page}>
        <div>#4 Virgil Van Dijk</div>
        <img className={s.img} src={"https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-07/virgil-van-dijk-statement-cover-.webp?itok=9Oyo-aSV"}/>
    <form>
        age: 31 ()
        Nationality: Netherlands
        Club: Liverpool
        <Button>Watching for {"Virgil"}</Button>
    </form>
    </div>
}

// const Img = styled.image `
//   width: 600px;
//   height: 400px;
//   border-radius: 20px;
// `
