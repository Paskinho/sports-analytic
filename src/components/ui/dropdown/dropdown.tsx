import {CSSProperties, ReactNode, useState} from "react";
import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion'
import s from './styles.module.scss'

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
} satisfies Variants

const item = {
    variants: {
        closed: { x: -16, opacity: 0 },
        open: { x: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps

export const Dropdown = ({children, trigger, align = 'end', className, style }: DropdownProps) => {

    const [open, setOpen] = useState(false)



}