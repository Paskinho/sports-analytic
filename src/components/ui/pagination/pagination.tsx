import s from './pagination.module.scss'
import {FC} from "react";
import {usePagination} from "./usePagination";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

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

    } = usePagination({
        page,
        count,
        onChange,
        siblings
    })

    return (
        <div className={classNames.root}>
            <div className={classNames.container}>
                <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage}/>
                <MainPaginationProps paginationRange={paginationRange} currentPage={page} onClick={handleMainPageClicked}/>
            <NextButton onClick={handleNextPageClicked} disabled={isFirstPage}/>

            </div>
        </div>
    )

}

type PageButtonProps = NavigationButtonProps & {
    page: number
    selected: boolean
}

const Dots: FC = () => {
    return <span className={classNames.dots}>&#8230</span>
}

const PageButton: FC<PageButtonProps> = ({onClick, page, disabled, selected}) => {
    return (
        <button onClick={onClick}
                disabled={selected || disabled}
                className={classNames.pageButton(selected)}
        >
            {page}
        </button>
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

type MainPaginationButtonProps = {
    paginationRange: (number | string) []
    currentPage: number
    onClick: (pageNumber: number) => () => void
}


const MainPaginationProps: FC<MainPaginationButtonProps> = ({
                                                                paginationRange,
                                                                currentPage,
                                                                onClick
                                                            }) => {
    return (
        <>
            {paginationRange.map((page: number | string, index) => {
                const isSelected = page === currentPage

                if (typeof page !== "number") {
                    return <Dots key={index}/>
                }
                return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)}/>
            })}
        </>
    )
}

const NextButton: FC<NavigationButtonProps> = ({onClick, disabled}) => {
    return (
        <button className={classNames.item} onClick={onClick} disabled={disabled}>
            <BiChevronRight className={classNames.icon} size={16}/>
        </button>
    )
}