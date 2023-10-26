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
const handleSort = (key: string, sortable?: boolean) => {
    if (!onSort || !sortable) return
    if (sort?.key === key) return onSort({key, direction: 'asc'})
    if(sort?.direction === 'desc') return onSort(null)

    return onSort({
        key,
        direction: sort?.direction === 'asc' ? 'desc' : 'asc'
    })
}

return (
    <Head {...restProps}>
        <Row>
            {columns.map(({title,key,sortable})=> {
                <HeadCell/>
            })}
        </Row>

    </Head>

)

}


export type RowProps = ComponentProps<'tr'>

export const Row = (props) => {
    return <tr {...props}/>
}

export type HeadCellProps = ComponentProps<'th'> & {
    sortable?: boolean
}

export const HeadCell: FC<HeadCellProps> = ({className, children, sortable, ...rest}) => {
    const classNames = {
        headCell: clsx(className, s.headCell, sortable && s.sortable)
    }

    return (
        <th className={classNames.headCell} {...rest}>
            <span>{children}</span>
        </th>
    )

}




export const Table =  {
    Root,
        Head,
        Header

}