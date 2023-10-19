import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";

export const Slider = forwardRef<
    ElementRef<typeof SliderPrimitive.Root>,
    ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
    >(({ className, ...props }, ref) => (
    <div className={s.container}>
        <span>{props?.value?.[0]}</span>
        <SliderPrimitive.Root ref={ref} className={clsx(s.root, className)} {...props}>
            <SliderPrimitive.Track className={s.track}>
                <SliderPrimitive.Range className="absolute h-full bg-primary" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={s.thumb} />
            <SliderPrimitive.Thumb className={s.thumb} />
        </SliderPrimitive.Root>
        <span>{props?.value?.[1]}</span>
    </div>
))