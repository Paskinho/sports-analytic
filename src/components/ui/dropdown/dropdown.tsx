import {CSSProperties, ReactNode, useState} from "react";
import {AnimatePresence, motion, MotionProps, Variants} from 'framer-motion'
import s from './styles.module.scss'
import {clsx} from 'clsx'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

export type DropdownProps = {
    /** Use TooltipItem components as children.*/
    children: ReactNode
    /** The preferred content alignment against the trigger. */
    align?: 'start' | 'center' | 'end'
    trigger?: ReactNode
    className: string
    style?: CSSProperties
}

const menu = {
    closed: {
        scale: 0,
        transition: {
            delay: 0.15,
        },
    },
    open: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        },
    },
}
satisfies
Variants

const item = {
    variants: {
        closed: {x: -16, opacity: 0},
        open: {x: 0, opacity: 1},
    },
    transition: {opacity: {duration: 0.2}},
}
satisfies
MotionProps

export const Dropdown = ({children, trigger, align = 'end', className, style}: DropdownProps) => {

    const [open, setOpen] = useState(false)

    const classNames = {
        button: s.button,
        content: clsx(s.content, className),
        arrowBox: s.arrowBox,
        arrow: s.arrow,
        itemsBox: s.itemsBox,
    }

    return (
        <div>
            <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
                <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
                <AnimatePresence>
                    {open &&
                    <DropdownMenuRadix.Portal forceMount>
<DropdownMenuRadix.Content
    asChild
    forceMount
    className={classNames.content}
    align={align}
    sideOffset={8}
    style={style}
    onClick={event => event.stopPropagation()}
>
<motion.div
    animate={open ? 'open' : 'closed'}
    initial="closed"
    exit="closed"
    variants={menu}
>
<DropdownMenuRadix.Arrow className={classNames.arrow} asChild>
<div className={classNames.arrow}/>

</DropdownMenuRadix.Arrow>
<div className={classNames.itemsBox}>{children}</div>
</motion.div>

</DropdownMenuRadix.Content>
                    </DropdownMenuRadix.Portal>
                    }
                </AnimatePresence>
            </DropdownMenuRadix.Root>
        </div>
    )

}