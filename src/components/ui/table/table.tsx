import {ComponentProps, FC} from "react";
import {clsx} from "clsx";
import s from "./table.module.scss"

export type RootProps = ComponentProps<'table'>


export const Root: FC<RootProps> = ({className,...rest}) => {
    const classNames = {
        table: clsx(className, s.table)
    }

    return <table className={classNames.table}/>
}

export type HeadProps = ComponentProps<"head">

export const Head: FC<HeadProps> = (props) => {
    return <thead {...props}/>

}

export type Column = {
    title: string
    key: string
    sortable?: boolean
}

export type Sort = {
    key: string
    direction: 'asc' | 'desc'
} | null

export const Header: FC<
    Omit<
        HeadProps & {
        columns: Column[]
        sort?: Sort
        onSort?: (sort: Sort) => void
}, 'children'
        >> = ({columns,sort, onSort,...restProps}) => {
const classNames = {
    chevron: sort?.direction === "asc" ? "" : s.chevronDown
}

}


export const Table = () => {
    Root,
        Head

}