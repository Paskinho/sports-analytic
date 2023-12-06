import s from './pagination.module.scss'
import {FC} from "react";
import {usePagination} from "./usePagination";
import {BiChevronLeft} from "react-icons/bi";

type PaginationConditionals =
    | {
    perPage?: null
    perPageOptions?: never
    onPerPageChange?: never
}
    | {
    perPage: number
    perPageOptions: number[]
    onPerPageChange: (itemPerPage: number) => void
}

export type PaginationProps = {
    count: number
    page: number
    onChange: (page: number) => void
    siblings?: number
    perPage?: number
    perPageOptions?: number[]
    onPerPageChange?: (itemPerPage: number) => void
} & PaginationConditionals

const classNames = {
    root: s.root,
    container: s.container,
    selectBox: s.selectBox,
    select: s.select,
    item: s.item,
    dots: s.dots,
    icon: s.icon,
    pageButton(selected?: boolean) {
        return clsx(this.item, selected && s.selected)
    },
}


export const Pagination: FC<PaginationProps> = ({
                                                    count,
                                                    page,
                                                    onChange,
                                                    siblings,
                                                    perPage = null,
                                                    perPageOptions,
                                                    onPerPageChange
                                                }) => {
const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,

} = usePagination ({
    page,
    count,
    onChange,
    siblings
})

    return (
        <div className={classNames.root}>
            <div className={classNames.container}>
                <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage}/>
                </div>
        </div>
    )

}

type NavigationButtonProps = {
    onClick: () => void
    disabled?: boolean
}


const PrevButton: FC<NavigationButtonProps> = ({onClick, disabled}) => {
    return (
        <button className={classNames.item} onClick={onClick} disabled={disabled}>
            <BiChevronLeft className={classNames.icon} size={16}/>
        </button>
    )
}