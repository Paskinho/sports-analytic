import {ComponentProps, FC} from "react";
import s from "modal.module.scss"
import {clsx} from "clsx";
import {Dialog, DialogPortal} from "@radix-ui/react-dialog";
import {AnimatePresence} from "framer-motion";


export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
    open: boolean
    onClose?: () => void
    showCloseButton?: boolean
    title?: string
    size?: ModalSize
} & ComponentProps<'div'>


const getSizeClassName = (size: ModalSize) => {
    if (size === 'sm') return s.sm
    if (size === 'md') return s.md
    if (size === 'lg') return s.lg
}

const getContentClassName = (size: ModalSize, className?: string) => {
  const sizeClassName = getSizeClassName(size)

    return clsx(className, s.content, sizeClassName)
}

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
        overlay: s.overlay,
        content: getContentClassName(size, className),
        header: s.header,
        title: s.title,
        closeButton: s.closeButton,
        contentBox: s.contentBox,
    }
return (
    <Dialog open={open} onOpenChange={handleModalClosed}>
        <AnimatePresence>
            {open && (
                <DialogPortal forceMount>

                </DialogPortal>
            )}

        </AnimatePresence>

    </Dialog>
)


}

