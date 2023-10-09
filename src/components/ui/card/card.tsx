import {ComponentPropsWithoutRef, forwardRef} from "react";
import {clsx} from "clsx";

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({className, ...restProps}, ref)=> {
  const classNames = {
      root: clsx(s.root, className)
  }
  return <div ref={ref} className={className.root} {restProps}></div>
})