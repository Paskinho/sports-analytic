import {ComponentProps, FC} from "react";

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
    open: boolean
    onClose?: () => void
    showCloseButton?: boolean
    title?: string
    size?: ModalSize
} & ComponentProps<'div'>

export const Modal: FC<ModalProps> = ({
    open = false,
    onClose,
    title,
    size= 'md',
    className,
    children,
    showCloseButton= true
                                      }) => {
    function handleModalClosed () {
        onClose?.()
    }
    const classNames = {

    }



}