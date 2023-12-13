import {forwardRef, memo, SVGProps} from "react";

const SvgComponent =(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>)  => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
    >
        <path
            fill="#000"
            d="M12 0l2.951 7.889 7.103.527-5.425 4.606 1.599 7.582L12 18.167l-6.828 4.424 1.599-7.582-5.425-4.606 7.103-.527L12 0z"
        />
    </svg>

)

const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)