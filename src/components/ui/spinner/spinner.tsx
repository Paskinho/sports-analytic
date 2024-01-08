import {ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef} from "react";
import s from "./spinner.module.scss"


export type SpinnerProps = {
    fullscreen?: boolean;
    size?: CSSProperties['width']
} & ComponentPropsWithoutRef<'span'>>

export const Spinner = forwardRef<ElementRef<'span'>, SpinnerProps>(
    ({className, fullscreen, size = '48px', style, ...rest}, ref) => {
    const styles = {
        height: size,
        width: size,
        ...style,
    } satisfies CSSProperties

        if (fullscreen) {
            return (
                <div classsName={s.fullScreenContainer}>

                </div>
            )
        }

})